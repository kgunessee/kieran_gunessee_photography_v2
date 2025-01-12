//Components
// import { macroImageInfo } from "@/app/components/ImageInfo";
import imageData from "../imageData.json";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Macro",
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
        images={imageData.macroImageInfo}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-almostWhite"}
        locations={["Iceland", "UK", "Midlands", "Devon"]}
        nonAstroKeywords={["Fungi", "Plants"]}
      />
    </main>
  );
}
