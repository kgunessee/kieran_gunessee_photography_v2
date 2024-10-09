//Components
import { astroImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Astrophotography - Kieran Gunessee Photography",
  description: "Images of galaxies, nebulae, stars and the universe.",
  keywords: [
    "photography",
    "astrophotography",
    "astro photography",
    "galaxy",
    "nebula",
    "nebulae",
    "stars",
  ],
};

export default function Astrophotography() {
  const pageText =
    "Galaxies, nebulae, comets and stars - the endless beauty of the universe.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"ASTROPHOTOGRAPHY"}
        pageText={pageText}
        images={astroImageInfo}
        isAstroImage={true}
        bgColourDark={"dark:to-indigo-500/5"}
        bgColourLight={"to-indigo-500/20"}
      />
    </main>
  );
}
