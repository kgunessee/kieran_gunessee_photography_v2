"use client";

//Hooks & plugins
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobileScreen, setIsMobileScreen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleIsDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

  return (
    <header
      className={`dark:bg-blueBlack bg-almostBlack px-mobileXPadding relative flex items-center justify-between border-b-[1px] border-white/10 py-2 transition-colors`}
    >
      <h1 className={`text-2xl font-semibold text-white`}>
        {isMobileScreen ? "KG" : "Kieran Gunessee Photography"}
      </h1>
      <div className={`flex items-center gap-4`}>
        <button
          onClick={handleIsDarkModeToggle}
          className={`relative grid h-7 w-8 place-items-center overflow-hidden text-white`}
        >
          <svg
            className={`absolute top-0 h-6 w-6 ${
              isDarkMode ? "animate-themeButtonSet" : "animate-themeButtonRise"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="rgb(253, 224, 71"
            viewBox="0 -960 960 960"
          >
            <path d="M480-28L346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28zm0-252q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280zm0 140l100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100z"></path>
          </svg>
          <svg
            className={`absolute top-0 h-5 w-5 ${
              isDarkMode ? "animate-themeButtonRise" : "animate-themeButtonSet"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#e8eaed"
            viewBox="0 -960 960 960"
          >
            <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80z"></path>
          </svg>

          <div
            className={`absolute bottom-0 h-[2px] w-full rounded-full bg-white/50`}
          ></div>
        </button>
        <button onClick={handleMobileMenuToggle} className={`relative z-10`}>
          <span
            className={`bg-almostWhite block h-0.5 w-6 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-almostWhite my-0.5 block h-0.5 w-6 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-almostWhite block h-0.5 w-6 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </div>
    </header>
  );
}
