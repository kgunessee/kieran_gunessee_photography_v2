//Components
import { woodlandImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Woodland",
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
  const pageText =
    "Trees, leaves, orange and green - the chaos and calm of the woods.";
  return (
    <main>
      <Header />

      <PageTemplate
        pageTitle={"WOODLAND"}
        pageText={pageText}
        images={woodlandImageInfo}
        bgColourDark={"dark:to-emerald-700/10"}
        bgColourLight={"to-emerald-700/20"}
        locations={["UK", "Midlands", "Devon", "Peak District"]}
        nonAstroKeywords={[
          "Spring",
          "Summer",
          "Autumn",
          "Winter",
          "Wide angle",
          "Focused subject",
        ]}
      />
    </main>
  );
}
