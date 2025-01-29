//Components
// import { landscapeImageInfo } from "@/app/components/ImageInfo";
import landscapeData from "../image-data/landscapeData.json";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Landscape Photography UK",
  description:
    "My photos of hills, mountains, vistas and interesting landmarks.",
  keywords: [
    "photography",
    "landscape",
    "landscape photography",
    "hills",
    "mountains",
    "scenic views",
  ],
};

export default function Landscape() {
  const pageText =
    "My photos of hills, mountains, vistas and interesting landmarks.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"LANDSCAPE"}
        pageText={pageText}
        images={landscapeData.landscapeImageInfo}
        bgColourDark={"dark:to-orange-300/5"}
        bgColourLight={"to-almostWhite"}
        locations={[
          "Iceland",
          "UK",
          "Lanzarote",
          "Midlands",
          "Devon",
          "Peak District",
        ]}
        nonAstroKeywords={[
          "Wide angle",
          "Minimalist",
          "Mountains",
          "Hills",
          "Atmospheric",
          "Black & white",
        ]}
        imageDate={["< 2022", "2023", "2024", "2025"]}
      />
    </main>
  );
}
