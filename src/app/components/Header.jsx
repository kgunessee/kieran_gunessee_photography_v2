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

export default function Header({ isHomepage = false }) {
  const [isMobileScreen, setIsMobileScreen] = useState(true); //Boolean to state whether the screen size is mobile (< 768px)
  const [isDarkMode, setIsDarkMode] = useState(true); //Boolean to set the theme
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //Boolean to state whether the mobile menu is open
  const [imageBorder, setImageBorder] = useState(false);

  const mobileLogo = (
    <svg
      className={`h-8 w-8`}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 24 24"
    >
      <text
        x="7.36"
        y="21.159"
        fill="#ebebeb"
        fillOpacity="0.6"
        fontFamily="'Lato-Bold', 'Lato'"
        fontSize="25.456"
        fontWeight="700"
        transform="matrix(.98594 0 0 1 -.085 0)"
      >
        G
      </text>
      <text
        x="-1.986"
        y="21.276"
        fill="#e1e1e1"
        fontFamily="'Lato-Bold', 'Lato'"
        fontSize="25.636"
        fontWeight="700"
      >
        K
      </text>
    </svg>
  );

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

  // Apply class to body when imageBorder changes. This enables css in the globals.css file for the fancybox image.
  useEffect(() => {
    const body = document.querySelector("body");
    imageBorder
      ? body.classList.add("image-has-border")
      : body.classList.remove("image-has-border");
  }, [imageBorder]);

  // Change logo from full name to initials on mobile screen
  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.innerWidth < 1024) {
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
      className={`${
        isHomepage
          ? "absolute left-0 top-0 z-10 w-screen border-b-0 border-transparent bg-transparent dark:bg-transparent"
          : "relative"
      } mx-auto flex min-h-[65px] items-center justify-between bg-almostBlack px-mobileXPadding py-4 transition-colors lg:min-h-[80px] lg:px-desktopXPadding dark:bg-blueBlack`}
    >
      <Link href={"/"}>
        <h1 className={`text-2xl font-semibold text-white`}>
          {isMobileScreen
            ? mobileLogo
            : !isHomepage
              ? "Kieran Gunessee Photography"
              : mobileLogo}
        </h1>
      </Link>
      <div className={`flex items-center gap-4 lg:gap-2`}>
        <ThemeButton
          handleIsDarkModeToggle={handleIsDarkModeToggle}
          isDarkMode={isDarkMode}
        />
        <div
          title={"Apply image border"}
          className={`cursor-pointer rounded border-[1px] border-white/40 px-2 py-1 text-sm text-almostWhite transition-all hover:bg-white/10 lg:border-none lg:text-base`}
          onClick={() => setImageBorder(!imageBorder)}
        >
          <p>Border {imageBorder ? "Off" : "On"}</p>
        </div>
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
