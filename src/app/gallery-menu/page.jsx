//Hooks & Plugins
import { GalleryCategories } from "@/app/components/GalleryCategories";
import { GalleryCategoryCard } from "@/app/components/GalleryCategoryCard";

//Components
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function galleryMenu() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between border-t-[1px] border-white/20 bg-almostWhite lg:min-h-[calc(100dvh-80px)] dark:bg-almostBlack`}
      >
        <GalleryCategories />

        <Footer />
      </main>
    </>
  );
}
