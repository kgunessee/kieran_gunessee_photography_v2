"use client";

//Hooks & Plugins
import { useState } from "react";

//Components
import { astroImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import { Footer } from "@/app/components/Footer";

export default function Astrophotography() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = astroImageInfo.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    return (
      image.title.toLowerCase().includes(searchTerm) ||
      image.catalogue.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
      image.catalogue.toLowerCase().includes(searchTerm)
    );
  });

  const pageText =
    "Galaxies, nebulae, comets and stars - the endless beauty of the universe.";
  return (
    <>
      <Header />

      <PageTemplate
        pageTitle={"ASTROPHOTOGRAPHY"}
        pageText={pageText}
        handleSearchTerm={handleSearchTerm}
        images={filteredImages}
        isAstroImage={true}
        bgColourDark={"dark:to-indigo-500/5"}
        bgColourLight={"to-indigo-500/20"}
      />
    </>
  );
}
