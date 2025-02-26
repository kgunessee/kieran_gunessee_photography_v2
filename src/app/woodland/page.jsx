//Components
// import { woodlandImageInfo } from "@/app/components/ImageInfo";
import woodlandData from "../image-data/woodlandData.json";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Woodland Photography UK",
  description: "My photos of woodlands, forests and trees.",
  keywords: [
    "photography",
    "woodland",
    "woodland photography",
    "trees",
    "autumn scenes",
    "scenic views",
  ],
};

export default function Woodland() {
  const pageText = "My photos of woodlands, forests and trees.";
  return (
    <main>
      <Header />

      <PageTemplate
        pageTitle={"WOODLAND"}
        pageText={pageText}
        images={woodlandData.woodlandImageInfo}
        bgColourDark={"dark:to-emerald-700/10"}
        bgColourLight={"to-almostWhite"}
        locations={[
          "UK",
          "Midlands",
          "Devon",
          "Peak District",
          "Cannock Chase",
        ]}
        nonAstroKeywords={[
          "Spring",
          "Summer",
          "Autumn",
          "Winter",
          "Wide angle",
          "Focused subject",
        ]}
        focalLength={["11-24mm", "24-70mm", "70-300mm"]}
        imageDate={["< 2022", "2023", "2024", "2025"]}
      />
    </main>
  );
}
