//Components
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import waterData from "../image-data/waterData.json";
import landscapeData from "../image-data/landscapeData.json";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Norway",
  description: "Images of my trip to Norway & the Fjords.",
  keywords: [
    "photography",
    "norway",
    "norway photography",
    "landscape",
    "waterfalls",
    "rivers",
  ],
};

const norwayImages = [
  ...waterData.waterImageInfo,
  ...landscapeData.landscapeImageInfo,
].filter((image) => {
  return image.keywords.includes("norway".toLowerCase());
});

export default function Norway() {
  const pageText =
    "Norway is a beautiful country with everything you could want as a landscape photographer.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"NORWAY"}
        pageText={pageText}
        images={norwayImages}
        isLocationCategory={true}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-almostWhite"}
      />
    </main>
  );
}
