"use client";
//Plugins
import { useState, useEffect, useRef } from "react";

//Components
import { GalleryCategories } from "@/app/components/GalleryCategories";
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
const homepageImages = [
  "/images/homepage/hp_Road_To_The_Mountain.webp",
  "/images/homepage/hp_Andromeda.webp",
  // "/images/homepage/hp_TriangulumGalaxy.webp",
  // "/images/homepage/hp_Down_to_the_River.webp",
  // "/images/homepage/hp_ElephantsTrunkNebulaHOO.webp",
  // "/images/homepage/hp_GhostOfCassiopeia.webp",
  // "/images/homepage/hp_HorseheadAndFlameNebula.webp",
  "/images/homepage/hp_Iceland_5.webp",
  "/images/homepage/hp_Iceland_12.webp",
];

export default function Home() {
  const [bgImage, setbgImage] = useState(0);

  const gallerySectionRef = useRef(null);

  const handleScrollToGallery = () => {
    if (gallerySectionRef.current) {
      gallerySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setbgImage((prevIndex) => (prevIndex + 1) % homepageImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section>
        <Header isHomepage={true} />
        <section className={`w-screen overflow-y-hidden bg-black`}>
          <section className="relative grid h-dvh place-items-center gap-8">
            <div className="absolute inset-0 z-0">
              {homepageImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                    bgImage === index ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
            <div
              className={`absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-4 bg-black/60 px-4 lg:gap-8`}
            >
              <h1
                className={`text-center text-3xl font-medium text-almostWhite lg:font-semibold`}
              >
                Kieran Gunessee Photography
              </h1>

              <p className={`text-center text-xl text-almostWhite`}>
                Astro, Landscape & Macro Photography based in the UK.
              </p>
              <button
                onClick={handleScrollToGallery}
                className={`border-2 border-almostWhite bg-white/10 p-4 text-almostWhite transition-colors hover:bg-white/20 lg:text-xl`}
              >
                View my Gallery
              </button>
            </div>
          </section>

          <GalleryCategories galleryRef={gallerySectionRef} />
        </section>
      </section>
      <Footer />
    </main>
  );
}
