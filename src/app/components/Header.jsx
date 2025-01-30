"use client";

//Hooks & plugins
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

//Components
import { HamburgerMenu } from "@/app/components/HamburgerMenu";
import { MobileMenu } from "@/app/components/MobileMenu";
import { DesktopNav } from "@/app/components/DesktopNav";
import Image from "next/image";
import MainLogo from "@/app/components/MainLogo";

export default function Header({ isHomepage = false }) {
  const [isMobileScreen, setIsMobileScreen] = useState(true); //Boolean to state whether the screen size is mobile (< 768px)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //Boolean to state whether the mobile menu is open
  const [imageBorder, setImageBorder] = useState(false);

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        <MainLogo isMobileScreen={isMobileScreen} />
      </Link>
      <div className={`flex items-center gap-2`}>
        {!isHomepage && (
          <button
            title={"Apply image border"}
            className={`mx-2 cursor-pointer border-[1px] border-white/20 px-2 py-2 text-sm text-almostWhite transition-all hover:bg-white/10 lg:border-none lg:text-base`}
            onClick={() => setImageBorder(!imageBorder)}
          >
            <p>Border {imageBorder ? "On" : "Off"}</p>
          </button>
        )}

        {isMobileScreen && (
          <HamburgerMenu
            handleMobileMenuToggle={handleMobileMenuToggle}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        )}
        {!isMobileScreen && <DesktopNav />}
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className={`fixed top-0 z-[15] -ml-2 h-[65px] w-screen border-b-[1px] border-almostWhite/20 bg-blueBlack`}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMobileMenuOpen && <MobileMenu isMobileMenuOpen={isMobileMenuOpen} />}
      </AnimatePresence>
    </header>
  );
}
