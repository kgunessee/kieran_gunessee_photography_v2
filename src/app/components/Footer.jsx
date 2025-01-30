"use client";

import Link from "next/link";
import { ThemeButton } from "@/app/components/ThemeButton";
import { useState, useEffect } from "react";
import { AstrobinLogo, InstagramLogo } from "@/app/components/Logos_Icons";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const [isDarkMode, setIsDarkMode] = useState(true); //Boolean to set the theme

  // Handle dark mode toggle and persist in localStorage
  const handleIsDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode)); // Save to localStorage
  };

  // Apply dark mode class to body when isDarkMode changes
  useEffect(() => {
    const body = document.querySelector("body");
    isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
  }, [isDarkMode]);

  // Set dark mode based on localStorage on initial load
  useEffect(() => {
    const savedThemePreference = localStorage.getItem("isDarkMode");
    if (savedThemePreference !== null) {
      setIsDarkMode(JSON.parse(savedThemePreference)); // Apply saved preference
    }
  }, []);

  return (
    <>
      <footer
        className={`mt-4 flex h-auto flex-col-reverse items-end border-t-[1px] border-almostBlack/30 bg-transparent px-mobileXPadding pt-1 sm:h-20 sm:flex-row sm:items-center sm:justify-between md:pt-0 lg:px-desktopXPadding dark:border-white/20`}
      >
        <p
          className={`mb-2 text-sm text-almostBlack/70 sm:mb-0 lg:text-base dark:text-almostWhite/70`}
        >
          © Kieran Gunessee {year}. Website designed and developed by me.
        </p>
        <div
          className={`relative flex items-center gap-4 rounded p-1 opacity-80`}
        >
          <ThemeButton
            handleIsDarkModeToggle={handleIsDarkModeToggle}
            isDarkMode={isDarkMode}
          />
          <Link
            href={"https://www.astrobin.com/users/Kieran_Gunessee/"}
            target="_blank"
            className="group relative"
          >
            <AstrobinLogo />
          </Link>
          <Link
            href={"https://www.instagram.com/kieran_gunessee_photography/"}
            target="_blank"
            className="group relative"
          >
            <InstagramLogo />
          </Link>
        </div>
      </footer>
    </>
  );
}
