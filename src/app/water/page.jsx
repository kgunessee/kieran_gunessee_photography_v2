"use client";
//Components
import Head from "next/head";
import { waterImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import { useState } from "react";

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
    <>
      <Head>
        <title>Water - Kieran Gunessee Astrophotography</title>
        <meta
          name="description"
          content="Images of waterfalls, rivers, lakes, and everything related to water."
        />
      </Head>
      <Header />
      <PageTemplate
        pageTitle={"WATER"}
        pageText={pageText}
        handleSearchTerm={handleSearchTerm}
        images={filteredImages}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
      />
    </>
  );
}
