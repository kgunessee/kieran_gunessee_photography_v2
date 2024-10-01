"use client";

//Hooks & plugins
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

//Components
import { ThemeButton } from "@/app/components/ThemeButton";
import { HamburgerMenu } from "@/app/components/HamburgerMenu";
import { MobileMenu } from "@/app/components/MobileMenu";
import { DesktopNav } from "@/app/components/DesktopNav";

export default function Header({ headerRef = null }) {
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle dark mode toggle and persist in localStorage
  const handleIsDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode)); // Save to localStorage
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Set dark mode based on localStorage on initial load
  useEffect(() => {
    const savedThemePreference = localStorage.getItem("isDarkMode");
    if (savedThemePreference !== null) {
      setIsDarkMode(JSON.parse(savedThemePreference)); // Apply saved preference
    }
  }, []);

  // Apply dark mode class to body when isDarkMode changes
  useEffect(() => {
    const body = document.querySelector("body");
    isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
  }, [isDarkMode]);

  // Change logo from full name to initials on mobile screen
  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.innerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
        setIsMobileMenuOpen(false); // Close menu on screen size change
      }
    };

    window.addEventListener("resize", handleScreenSizeChange);
    handleScreenSizeChange(); // Call initially to set the correct state

    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`relative mx-auto flex items-center justify-between border-b-[1px] border-white/10 bg-almostBlack px-mobileXPadding py-4 transition-colors lg:px-desktopXPadding dark:bg-blueBlack`}
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
        />
        {isMobileScreen && (
          <HamburgerMenu
            handleMobileMenuToggle={handleMobileMenuToggle}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        )}
        {!isMobileScreen && <DesktopNav />}
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />}
      </AnimatePresence>
    </header>
  );
}
