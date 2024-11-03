//Hooks & Plugins

//Components
import { GalleryCategoryCard } from "@/app/components/GalleryCategoryCard";

export function GalleryCategories({ galleryRef }) {
  return (
    <section
      ref={galleryRef}
      id={"gallery-section"}
      className={`bg-almostWhite px-mobileXPadding py-4 lg:px-desktopXPadding dark:bg-almostBlack`}
    >
      <h2
        className={`mb-4 text-2xl font-semibold text-almostBlack lg:text-3xl dark:text-almostWhite`}
      >
        GALLERY
      </h2>
      <div className={`grid grid-cols-2 gap-2 md:grid-cols-3 2xl:grid-cols-3`}>
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
        <GalleryCategoryCard
          category={"/macro"}
          title={"MACRO"}
          imageUrl={"/images/thumbnails/macro/thumb_Mushroom 01.webp"}
          alt={"Macro category image"}
        />
        <GalleryCategoryCard
          category={"/iceland"}
          title={"ICELAND"}
          imageUrl={"/images/thumbnails/landscape/thumb_Iceland_11.webp"}
          alt={"Iceland category image"}
        />
        <GalleryCategoryCard
          category={"/peak-district"}
          title={"THE PEAK DISTRICT"}
          imageUrl={"/images/thumbnails/water/thumb_Down and Under.webp"}
          alt={"The peak district category image"}
        />
        <GalleryCategoryCard
          category={"/devon"}
          title={"DEVON"}
          imageUrl={"/images/thumbnails/woodland/thumb_The_Log_Walk.webp"}
          alt={"Devon category image"}
        />
        <GalleryCategoryCard
          category={"/midlands"}
          title={"THE MIDLANDS"}
          imageUrl={
            "/images/thumbnails/landscape/thumb_Standing at the End.webp"
          }
          alt={"The Midlands category image"}
        />
      </div>
    </section>
  );
}
