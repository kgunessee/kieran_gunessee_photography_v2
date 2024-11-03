"use client";

// Hooks & Plugins
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

// Components
import { NavbarItems } from "@/app/components/NavbarItems";
import { DropDownButton } from "@/app/components/DropDownButton";

export function DesktopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center gap-4 text-almostBlack dark:text-almostWhite">
      <div className="cursor-pointer rounded px-2 py-1 text-almostWhite transition-all hover:bg-white/10">
        <Link style={{ color: "#e1e1e1" }} href="/equipment">
          Equipment
        </Link>
      </div>
      <div className="-ml-2 cursor-pointer rounded px-2 py-1 text-almostWhite transition-all hover:bg-white/10">
        <Link style={{ color: "#e1e1e1" }} href="/blog">
          Blog
        </Link>
      </div>

      <div className="relative" ref={menuRef}>
        <DropDownButton
          title={"Gallery"}
          openCloseState={isMenuOpen}
          onClickFunction={handleToggleMenu}
        />
        <ul
          className={`absolute ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          } right-0 top-full z-10 mt-2 flex flex-col items-start rounded border-[1px] border-white/40 bg-almostBlack p-2 transition-all duration-150 dark:bg-blueBlack`}
        >
          {NavbarItems.slice(0, 2).map((item) => (
            <li
              key={item.name}
              className="group flex items-center rounded px-2 py-1 text-almostWhite transition-colors hover:bg-white/10"
            >
              <Link href={item.url}>{item.name}</Link>
              <span>
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#E1E1E1"
                  viewBox="0 -960 960 960"
                >
                  <path d="M504-480L320-664l56-56 240 240-240 240-56-56 184-184z"></path>
                </svg>
              </span>
            </li>
          ))}
          <hr className={`my-2 h-[1px] w-full border-none bg-white/40 p-0`} />
          {NavbarItems.slice(4).map((item) => (
            <li
              key={item.name}
              className="group flex items-center rounded px-2 py-1 text-almostWhite transition-colors hover:bg-white/10"
            >
              <Link href={item.url}>{item.name}</Link>
              <span>
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#E1E1E1"
                  viewBox="0 -960 960 960"
                >
                  <path d="M504-480L320-664l56-56 240 240-240 240-56-56 184-184z"></path>
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
