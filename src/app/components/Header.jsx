"use client";

//Hooks & plugins
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

//Components
import { ThemeButton } from "@/app/components/ThemeButton";
import { HamburgerMenu } from "@/app/components/HamburgerMenu";
import { MobileMenu } from "@/app/components/MobileMenu";

export default function Header() {
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleIsDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Disable scroll when menu is open

  // Toggle between light & dark mode by adding 'dark' class to body (Tailwind CSS dark mode).
  useEffect(() => {
    const body = document.querySelector("body");
    isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
  }, [isDarkMode]);

  //Change logo from full name to initials on mobile screen.
  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.innerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    };

    // Add the resize event listener when the component is mounted
    window.addEventListener("resize", handleScreenSizeChange);

    // Call on load to set the initial screen size state
    handleScreenSizeChange();

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  // This runs whenever the mobile menu is opened or closed. If the menu is open, it prevents scrolling. If closed, it allows scrolling.
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // document.body.style.height = "100dvh";
      console.log(true);
    } else {
      document.body.style.overflow = "unset";
      // document.body.style.height = "unset";
      console.log(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`relative flex items-center justify-between border-b-[1px] border-white/10 bg-almostBlack px-mobileXPadding py-2 transition-colors dark:bg-blueBlack`}
    >
      <Link href={"/"}>
        <h1 className={`text-2xl font-semibold text-white`}>
          {isMobileScreen ? "KG" : "Kieran Gunessee Photography"}
        </h1>
      </Link>
      <div className={`flex items-center gap-4`}>
        <ThemeButton
          handleIsDarkModeToggle={handleIsDarkModeToggle}
          isDarkMode={isDarkMode}
        ></ThemeButton>
        <HamburgerMenu
          handleMobileMenuToggle={handleMobileMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        ></HamburgerMenu>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu isMobileMenuOpen={isMobileMenuOpen}></MobileMenu>
        )}
      </AnimatePresence>
    </header>
  );
}
