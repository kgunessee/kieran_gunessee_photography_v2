"use client";

//Hooks & Plugins

import { useState } from "react";

//Components
import Header from "@/app/components/Header";
// import {
//   daytimeEquipmentInfo,
//   astroEquipmentInfo,
// } from "@/app/components/ImageInfo";

import imageData from "../imageData.json";
import { EquipmentCategory } from "@/app/components/EquipmentCategory";
import { Footer } from "@/app/components/Footer";

export default function Equipment() {
  const [isAstroOpen, setIsAstroOpen] = useState(true);
  const [isDaytimeOpen, setIsDaytimeOpen] = useState(true);

  const astroEquipmentInfo = imageData.astroEquipmentInfo;
  const daytimeEquipmentInfo = imageData.daytimeEquipmentInfo;

  const astroEquipmentLength = Object.keys(astroEquipmentInfo);
  const dayEquipmentLength = Object.keys(daytimeEquipmentInfo);
  return (
    <main>
      <Header />
      <section className={`flex flex-col justify-between`}>
        <section
          className={`my-2 px-mobileXPadding text-blueBlack lg:px-desktopXPadding dark:text-almostWhite`}
        >
          <h2 className={`text-2xl font-semibold lg:text-3xl`}>EQUIPMENT</h2>
          <p className={`mb-4 mt-2 lg:text-xl`}>
            Below is by photography equipment that I currently use or have used
            to capture my images.
          </p>
          <section className={`mb-4`}>
            <button
              className={`flex w-full items-center justify-between bg-greyBlue/40 p-2 text-left text-xl font-semibold text-almostBlack hover:bg-greyBlue/60 dark:bg-blueBlack dark:text-almostWhite hover:dark:bg-blueBlack/80`}
              onClick={() => setIsAstroOpen(!isAstroOpen)}
            >
              Astrophotography
              <span
                className={`${
                  isAstroOpen ? "rotate-0" : "rotate-180"
                } transition-transform duration-300`}
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

            {astroEquipmentLength.map((item) => {
              return (
                <div
                  className={`${
                    isAstroOpen ? "max-h-[1000px]" : "max-h-0"
                  } overflow-hidden transition-all duration-300`}
                  key={`astro-${item}`}
                >
                  <EquipmentCategory
                    header={item}
                    content={astroEquipmentInfo[`${item}`]}
                  />
                </div>
              );
            })}
          </section>
          <section>
            <button
              className={`flex w-full items-center justify-between bg-greyBlue/40 p-2 text-left text-xl font-semibold text-almostBlack hover:bg-greyBlue/60 dark:bg-blueBlack dark:text-almostWhite hover:dark:bg-blueBlack/80`}
              onClick={() => setIsDaytimeOpen(!isDaytimeOpen)}
            >
              Landscape, Nature & Everything Else
              <span
                className={`${
                  isDaytimeOpen ? "rotate-0" : "rotate-180"
                } transition-transform duration-300`}
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
            {dayEquipmentLength.map((item) => {
              return (
                <div
                  className={`${
                    isDaytimeOpen ? "max-h-[1000px]" : "max-h-0"
                  } overflow-hidden transition-all duration-300`}
                  key={`day-${item}`}
                >
                  <EquipmentCategory
                    header={item}
                    content={daytimeEquipmentInfo[`${item}`]}
                  />
                </div>
              );
            })}
          </section>
        </section>
        <Footer />
      </section>
    </main>
  );
}
