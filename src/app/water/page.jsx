"use client";
//Components
import Head from "next/head";
import { waterImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import { useState } from "react";
import { HeadComponent } from "@/app/components/HeadComponent";

export default function Water() {
  const [searchText, setSearchText] = useState("");

  const handleSearchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);
  };

  const filteredImages = waterImageInfo.filter((image) => {
    const searchTerm = searchText.toLowerCase();
    return (
      image.title.toLowerCase().includes(searchTerm) ||
      image.location.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
      image.location.toLowerCase().includes(searchTerm)
    );
  });

  const pageText =
    "Waterfalls, rivers and oceans - the flow of water in every form.";
  return (
    <main>
      <HeadComponent
        title={"Water - Kieran Gunessee Astrophotography"}
        description={
          "Images of waterfalls, rivers, lakes, and everything related to water."
        }
        keywords={
          "photography, water, water photography, waterfalls, rivers, sea, ocean"
        }
      />
      <Header />
      <PageTemplate
        pageTitle={"WATER"}
        pageText={pageText}
        handleSearchTerm={handleSearchTerm}
        images={filteredImages}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
      />
    </main>
  );
}
