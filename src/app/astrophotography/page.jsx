"use client";

//Hooks & Plugins
import { useState } from "react";

//Components
import { astroImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

export default function Astrophotography() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = astroImageInfo.filter((image) => {
    return (
      image.title.toLowerCase().includes(searchText.toLowerCase()) ||
      image.catalogue
        .replaceAll(" ", "")
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      image.catalogue.toLowerCase().includes(searchText.toLowerCase())
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
