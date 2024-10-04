"use client";
//Plugins
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

//Components
import { GalleryCategories } from "@/app/components/GalleryCategories";
import { astroImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";

export default function Home() {
  const [bgImage, setbgImage] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null); // Create a ref for the header

  useEffect(() => {
    const interval = setInterval(() => {
      setbgImage((prevIndex) => (prevIndex + 1) % astroImageInfo.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, [headerRef]);

  return (
    <>
      <Header headerRef={headerRef} />
      <main className={`w-screen overflow-y-hidden bg-black`}>
        <section
          style={{
            height: `calc(100vh - ${headerHeight}px )`,
          }}
          className="relative grid place-items-center gap-8"
        >
          <div className="absolute inset-0 z-0">
            {astroImageInfo.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                  bgImage === index ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${image.fullRes})` }}
              ></div>
            ))}
          </div>
          <div
            className={`absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/60 px-4`}
          >
            <p className={`text-center text-almostWhite`}>
              Hi, my name is Kieran and I&apos;m a landscape, nature &
              astrophotographer based in the UK.
            </p>
            <button
              className={`rounded border-2 border-almostWhite p-4 text-almostWhite backdrop-blur-md transition-colors hover:bg-white/20`}
            >
              <Link href={"#"}>View my Gallery</Link>
            </button>
          </div>
        </section>
        <GalleryCategories />
      </main>
    </>
  );
}
