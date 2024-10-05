//Hooks & Plugins
import { GalleryCategories } from "@/app/components/GalleryCategories";

//Components
import Header from "@/app/components/Header";

export default function galleryMenu() {
  return (
    <>
      <Header />
      <main className={`h-dvh bg-almostWhite dark:bg-blueBlack`}>
        <GalleryCategories></GalleryCategories>
      </main>
    </>
  );
}
