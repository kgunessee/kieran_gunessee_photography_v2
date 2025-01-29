//Components
// import { macroImageInfo } from "@/app/components/ImageInfo";
import macroData from "../image-data/macroData.json";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Macro Photography UK",
  description: "Close up detailed images of various subjects.",
  keywords: [
    "photography",
    "macro",
    "macro photography",
    "fungi",
    "mushrooms",
    "close up",
    "details",
  ],
};

export default function Water() {
  const pageText = "Close up detailed images of various subjects.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"MACRO"}
        pageText={pageText}
        images={macroData.macroImageInfo}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-almostWhite"}
        locations={["UK", "Midlands"]}
        nonAstroKeywords={["Fungi", "Plants"]}
        imageDate={["< 2022", "2023", "2024", "2025"]}
      />
    </main>
  );
}
