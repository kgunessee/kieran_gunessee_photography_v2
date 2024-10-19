//This is the template for the image pages
"use client";
//Components
import Gallery from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";
import { useEffect, useState } from "react";

export function PageTemplate({
  images,
  bgColourLight,
  bgColourDark,
  isAstroImage = false,
  isLocationCategory = false,
  pageText,
  pageTitle,
}) {
  const [searchText, setSearchText] = useState("");

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = images.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    if (isAstroImage) {
      return (
        image.title.toLowerCase().includes(searchTerm) ||
        image.catalogue
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(searchTerm) ||
        image.catalogue.toLowerCase().includes(searchTerm)
      );
    } else {
      return (
        image.title.toLowerCase().includes(searchTerm) ||
        image.location.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
        image.location.toLowerCase().includes(searchTerm)
      );
    }
  });

  return (
    <section
      // style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between overflow-hidden border-t-[1px] border-white/20 bg-gradient-to-tr from-transparent from-50% lg:min-h-[calc(100dvh-80px)] ${bgColourDark} ${bgColourLight}`}
    >
      <section className={`px-mobileXPadding lg:px-desktopXPadding`}>
        <h2
          className={`mt-2 text-2xl font-semibold text-blueBlack xl:text-3xl dark:text-almostWhite`}
        >
          {pageTitle}
        </h2>
        <p className={`mb-4 text-almostBlack dark:text-almostWhite`}>
          {pageText}
        </p>

        {!isLocationCategory && (
          <input
            placeholder={`${
              isAstroImage
                ? "Search by name or catalogue ID"
                : "Search by name or location"
            }`}
            className={`mb-4 h-8 w-full rounded bg-black/10 px-2 xl:h-10 xl:text-xl dark:bg-white/10 dark:text-almostWhite`}
            onChange={handleSearchTerm}
          ></input>
        )}
        <Gallery images={filteredImages} isAstroImage={isAstroImage} />
      </section>
      <Footer />
    </section>
  );
}
