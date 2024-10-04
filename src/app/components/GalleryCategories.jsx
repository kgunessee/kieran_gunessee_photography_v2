//Hooks & Plugins
import Link from "next/link";
import Image from "next/image";

//Components
import { GalleryCategoryCard } from "@/app/components/GalleryCategoryCard";

export function GalleryCategories() {
  return (
    <>
      <section
        className={`flex h-[200vh] flex-col gap-2 bg-almostWhite px-mobileXPadding py-4 dark:bg-blueBlack`}
      >
        <GalleryCategoryCard
          category={"/astrophotography"}
          title={"ASTROPHOTOGRAPHY"}
          imageUrl={
            "/images/thumbnails/astrophotography/thumb_AndromedaGalaxy.webp"
          }
          alt={"Astro category image"}
        />
        <GalleryCategoryCard
          category={"/water"}
          title={"WATER"}
          imageUrl={"/images/thumbnails/water/thumb_Iceland_5.webp"}
          alt={"Water category image"}
        />
        <GalleryCategoryCard
          category={"/landscape"}
          title={"LANDSCAPE"}
          imageUrl={
            "/images/thumbnails/landscape/thumb_Road_To_The_Mountain.webp"
          }
          alt={"Landscape category image"}
        />
        <GalleryCategoryCard
          category={"/woodland"}
          title={"WOODLAND"}
          imageUrl={"/images/thumbnails/woodland/thumb_Down_to_the_River.webp"}
          alt={"Woodland category image"}
        />
        {/*<GalleryCategoryCard*/}
        {/*  category={"/macro"}*/}
        {/*  title={"MACRO"}*/}
        {/*  imageUrl={"/images/thumbnails/water/thumb_Iceland_5.webp"}*/}
        {/*  alt={"Macro category image"}*/}
        {/*/>*/}
      </section>
    </>
  );
}
