"use client";
//Plugins
import Link from "next/link";
import Header from "@/app/components/Header";
import Image from "next/image";
import { astroImageInfo } from "@/app/components/ImageInfo";
import { useState, useEffect, useRef } from "react";

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
      <main
        style={{
          height: `calc(100vh - ${headerHeight}px )`,
          backgroundImage: `url(${astroImageInfo[bgImage].fullRes})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="relative grid w-screen place-items-center gap-8 overflow-y-hidden"
      >
        <div className={`absolute left-0 top-0 h-full w-full bg-black/60`}>
          <p className={`text-center text-almostWhite`}>
            Hi, my name is Kieran and I&apos;m a landscape, nature &
            astrophotographer based in the UK.
          </p>
          <button className={`rounded border-2 border-almostWhite p-2`}>
            <Link href={"/gallery-overview"}>Gallery</Link>
          </button>
        </div>
      </main>
    </>
  );
}
