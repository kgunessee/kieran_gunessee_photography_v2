"use client";

//Hooks & PLugins
import { useState } from "react";
import Link from "next/link";

//Components
import { NavbarItems } from "@/app/components/NavbarItems";

export function DesktopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`flex items-center gap-4 text-almostBlack dark:text-almostWhite`}
    >
      <div
        className={`cursor-pointer rounded px-2 py-1 text-almostWhite transition-all hover:bg-white/10`}
      >
        <Link style={{ color: "#e1e1e1" }} href={"/equipment"}>
          Equipment
        </Link>
      </div>
      <div className="relative">
        <button
          onClick={handleToggleMenu}
          className={`flex cursor-pointer items-center rounded border-[1px] border-white/40 py-1 pl-2 pr-0 text-almostWhite transition-colors hover:bg-white/10`}
        >
          Gallery
          <span
            className={`transition-transform ${
              isMenuOpen ? "rotate-0" : "-rotate-90"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#e8eaed"
              viewBox="0 -960 960 960"
            >
              <path d="M480-344L240-584l56-56 184 184 184-184 56 56-240 240z"></path>
            </svg>
          </span>
        </button>
        <ul
          className={`absolute ${
            isMenuOpen ? "visible" : "invisible"
          } right-0 top-full z-10 mt-2 flex flex-col items-start gap-2 rounded border-[1px] border-white/40 bg-almostBlack p-2 transition-opacity duration-200 dark:bg-blueBlack`}
        >
          {NavbarItems.map((item) => {
            return (
              <li
                className={`group flex items-center rounded px-2 py-1 text-almostWhite transition-colors hover:bg-white/10`}
                key={item.name}
              >
                <Link href={item.url}>{item.name}</Link>
                <span>
                  <svg
                    className={`transition-transform group-hover:translate-x-1`}
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
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
