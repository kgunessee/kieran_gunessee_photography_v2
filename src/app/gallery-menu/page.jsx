//Hooks & Plugins
import { GalleryCategories } from "@/app/components/GalleryCategories";
import { GalleryCategoryCard } from "@/app/components/GalleryCategoryCard";

//Components
import Header from "@/app/components/Header";

export default function galleryMenu() {
  return (
    <>
      <Header />
      <main
        className={`h-dvh border-t-[1px] border-white/20 bg-almostWhite dark:bg-blueBlack`}
      >
        <GalleryCategories />

        <section className={`grid grid-cols-2 gap-2 px-mobileXPadding`}>
          <GalleryCategoryCard
            category={"/iceland"}
            title={"ICELAND"}
            imageUrl={"/images/thumbnails/landscape/thumb_Iceland_11.webp"}
            alt={"Iceland category image"}
          />
        </section>
      </main>
    </>
  );
}
