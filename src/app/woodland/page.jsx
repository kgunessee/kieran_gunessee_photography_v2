"use client";
//Components
import { woodlandImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import { useState } from "react";

export default function Woodland() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = woodlandImageInfo.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    return (
      image.title.toLowerCase().includes(searchTerm) ||
      image.location.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
      image.location.toLowerCase().includes(searchTerm)
    );
  });

  const pageText =
    "Trees, leaves, orange and green - the chaos and calm of the woods.";
  return (
    <>
      <Header />

      <PageTemplate
        pageTitle={"WOODLAND"}
        pageText={pageText}
        handleSearchTerm={handleSearchTerm}
        images={filteredImages}
        bgColourDark={"dark:to-emerald-700/10"}
        bgColourLight={"to-emerald-700/20"}
      />
    </>
  );
}
