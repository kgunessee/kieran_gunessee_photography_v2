//Components
// import { astroImageInfo } from "@/app/components/ImageInfo";
import astroData from "../image-data/astroData.json";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Astrophotography",
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
    "Deep sky images of galaxies, nebulae, stars and the universe.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"ASTROPHOTOGRAPHY"}
        pageText={pageText}
        images={astroData.astroImageInfo}
        isAstroImage={true}
        bgColourDark={"dark:to-indigo-500/5"}
        bgColourLight={"to-almostWhite"}
        astroObjectType={["Nebula", "Galaxy", "Stars & Clusters", "Comets"]}
        astroCameraType={["Mono", "OSC"]}
        astroPalette={[
          "SHO",
          "HOO",
          "LRGB",
          "HaRGB",
          "Narrowband",
          "Broadband",
        ]}
        astroFocalLength={["100mm - 400mm", "400mm - 700mm"]}
        imageDate={["< 2022", "2023", "2024", "2025"]}
      />
    </main>
  );
}
