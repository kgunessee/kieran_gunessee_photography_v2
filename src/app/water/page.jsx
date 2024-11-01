//Components
import { waterImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Water",
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
    "Waterfalls, rivers and oceans - the flow of water in every form.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"WATER"}
        pageText={pageText}
        images={waterImageInfo}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
        locations={["Iceland", "UK", "Midlands", "Devon"]}
        nonAstroKeywords={["Waterfall", "River", "Wide angle", "Mountain"]}
      />
    </main>
  );
}
