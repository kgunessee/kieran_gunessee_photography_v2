//Components
// import { waterImageInfo } from "@/app/components/ImageInfo";
import waterData from "../image-data/waterData.json";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Water Photography UK",
  description:
    "Images of waterfalls, rivers, lakes, and everything related to water.",
  keywords: [
    "photography",
    "water",
    "water photography",
    "waterfalls",
    "rivers",
    "sea",
    "ocean",
  ],
};

export default function Water() {
  const pageText =
    "Images of waterfalls, rivers, lakes, and everything related to water.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"WATER"}
        pageText={pageText}
        images={waterData.waterImageInfo}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-almostWhite"}
        locations={["Iceland", "UK", "Midlands", "Devon", "Peak District"]}
        nonAstroKeywords={["Waterfall", "River", "Wide angle", "Mountain"]}
        imageDate={["< 2022", "2023", "2024", "2025"]}
      />
    </main>
  );
}
