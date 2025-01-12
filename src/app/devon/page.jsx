//Components
import {
  waterImageInfo,
  landscapeImageInfo,
  woodlandImageInfo,
} from "@/app/components/ImageInfo";
import imageData from "../imageData.json";

import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Devon",
  description: "Images of Devon and it's moors.",
  keywords: [
    "photography",
    "devon",
    "devon photography",
    "dartmoor",
    "darmoor photography",
    "moorland",
    "landscape",
    "waterfalls",
    "rivers",
  ],
};

const devonImages = [
  ...imageData.waterImageInfo,
  ...imageData.landscapeImageInfo,
  ...imageData.woodlandImageInfo,
  // ...waterImageInfo,
  // ...landscapeImageInfo,
  // ...woodlandImageInfo,
].filter((image) => {
  return image.keywords.includes("devon".toLowerCase());
});

export default function Devon() {
  const pageText =
    "Devon is like my second home and somewhere I visit each year. I always make an effort to go for a hike on Dartmoor or somewhere similar, as the surroundings provide some great photo opportunities.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"DEVON"}
        pageText={pageText}
        images={devonImages}
        isLocationCategory={true}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-almostWhite"}
      />
    </main>
  );
}
