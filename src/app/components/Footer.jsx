"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeButton } from "@/app/components/ThemeButton";
import { useState, useEffect } from "react";

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
        className={`mt-4 flex h-auto flex-col-reverse items-end border-t-[1px] border-almostBlack/30 bg-transparent px-mobileXPadding sm:h-20 sm:flex-row sm:items-center sm:justify-between lg:px-desktopXPadding dark:border-white/20`}
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
            <Image
              width={40}
              height={40}
              src={"/images/icons/astrobin_logo.webp"}
              alt={"link to astrobin logo"}
              className="transition duration-300 group-hover:opacity-70"
            />
            <div className="pointer-events-none absolute inset-0">
              <Image
                width={40}
                height={40}
                src={"/images/icons/astrobin_logo.webp"}
                alt={"astrobin overlay"}
                className="absolute inset-0 opacity-80 mix-blend-multiply invert filter transition duration-150 group-hover:opacity-70 dark:invert-0"
              />
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/kieran_gunessee_photography/"}
            target="_blank"
            className="group relative"
          >
            <Image
              width={27}
              height={27}
              src={"/images/icons/instagram_logo.webp"}
              alt={"link to instagram logo"}
              className="transition duration-300 group-hover:opacity-70"
            />
            <div className="pointer-events-none absolute inset-0">
              <Image
                width={27}
                height={27}
                src={"/images/icons/instagram_logo.webp"}
                alt={"instagram overlay"}
                className="absolute inset-0 opacity-80 mix-blend-multiply invert filter transition duration-150 group-hover:opacity-70 dark:invert-0"
              />
            </div>
          </Link>
        </div>
      </footer>
    </>
  );
}
