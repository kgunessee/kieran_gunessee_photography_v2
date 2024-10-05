"use client";

//Components
import { landscapeImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import { useState } from "react";

export default function Landscape() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = landscapeImageInfo.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    return (
      image.title.toLowerCase().includes(searchTerm) ||
      image.location.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
      image.location.toLowerCase().includes(searchTerm)
    );
  });

  const pageText =
    "Hills, mountains, sweeping vistas and interesting landmarks. Exploring nature's landscapes from every angle.";
  return (
    <>
      <Header />
      <PageTemplate
        pageTitle={"LANDSCAPE"}
        pageText={pageText}
        handleSearchTerm={handleSearchTerm}
        images={filteredImages}
        bgColourDark={"dark:to-orange-300/5"}
        bgColourLight={"to-orange-300/20"}
      />
    </>
  );
}
