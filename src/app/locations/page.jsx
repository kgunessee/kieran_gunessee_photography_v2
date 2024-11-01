//Hooks & Plugins

//Components
import Header from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { GalleryCategoryCard } from "@/app/components/GalleryCategoryCard";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Locations",
  description: "The locations where I have taken my photos.",
  keywords: [
    "photography locations ,gallery locations, UK, Peak District, Iceland, Devon, astrophotography, fine art photography",
  ],
};

export default function locations() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-[calc(100dvh-65px)] flex-col justify-between border-t-[1px] border-white/20 bg-almostWhite lg:min-h-[calc(100dvh-80px)] dark:bg-almostBlack`}
      >
        <section
          className={`bg-almostWhite px-mobileXPadding py-4 lg:px-desktopXPadding dark:bg-almostBlack`}
        >
          <h2
            className={`mb-4 text-2xl font-semibold text-almostBlack dark:text-almostWhite`}
          >
            LOCATIONS
          </h2>
          <p className={`mb-4 text-almostBlack dark:text-almostWhite`}>
            Locations I have visited for my photography.
          </p>
          <div
            className={`grid grid-cols-2 gap-2 md:grid-cols-3 2xl:grid-cols-3`}
          >
            <GalleryCategoryCard
              category={"/iceland"}
              title={"ICELAND"}
              imageUrl={"/images/thumbnails/water/thumb_Iceland_5.webp"}
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

        <Footer />
      </main>
    </>
  );
}
