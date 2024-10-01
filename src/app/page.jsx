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
        style={{ height: `calc(100vh - ${headerHeight}px )` }}
        className="relative row-start-2 flex w-screen flex-col items-center gap-8 overflow-y-hidden sm:items-start"
      >
        <Image
          src={astroImageInfo[bgImage].fullRes}
          // width={100}
          // height={100}
          fill={true}
          alt={astroImageInfo[bgImage].title}
          style={{ objectFit: "cover" }}
        ></Image>
        <div
          className={`absolute left-0 top-0 h-full w-full bg-black/60 backdrop-blur`}
        ></div>
        {/*{astroImageInfo.map((image) => {*/}
        {/*  return (*/}
        {/*    <div key={image.title}>*/}
        {/*      <Image src={image[bgImage].thumb} alt={"dd"}></Image>*/}
        {/*    </div>*/}
        {/*  );*/}
        {/*})}*/}
      </main>
    </>
  );
}
