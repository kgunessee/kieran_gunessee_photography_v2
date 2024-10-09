"use client";
//Components

import { waterImageInfo, landscapeImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import { useState } from "react";
import { HeadComponent } from "@/app/components/HeadComponent";

export default function Water() {
  const filteredImages = [...waterImageInfo, ...landscapeImageInfo].filter(
    (image) => {
      const searchTerm = "iceland";
      return (
        image.location.replaceAll(" ", "").toLowerCase().includes(searchTerm) ||
        image.location.toLowerCase().includes(searchTerm)
      );
    },
  );

  const pageText =
    "Iceland is an incredible country and was home to some amazing scenery. Here are my images from the land of ice and fire.";
  return (
    <main>
      <HeadComponent
        title={"Iceland - Kieran Gunessee Astrophotography"}
        description={"Images of my trip to Iceland, the land of Ice and Fire."}
        keywords={
          "photography, iceland, iceland photography, landscape,waterfalls, rivers"
        }
      />
      <Header />
      <PageTemplate
        pageTitle={"ICELAND"}
        pageText={pageText}
        handleSearchTerm={null}
        images={filteredImages}
        isLocationCategory={true}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
      />
    </main>
  );
}
