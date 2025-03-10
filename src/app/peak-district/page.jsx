//Components
// import {
//   waterImageInfo,
//   landscapeImageInfo,
//   woodlandImageInfo,
// } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";
import waterData from "@/app/image-data/waterData.json";
import landscapeData from "@/app/image-data/landscapeData.json";
import woodlandData from "@/app/image-data/woodlandData.json";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "The Peak District",
  description: "Images of the Peak District National Park in the UK.",
  keywords: [
    "photography",
    "the peak district",
    "peak district photography",
    "landscape",
    "waterfalls",
    "rivers",
    "hills",
    "nature",
    "outstanding beauty",
  ],
};

const peakDistrictImages = [
  ...waterData.waterImageInfo,
  ...landscapeData.landscapeImageInfo,
  ...woodlandData.woodlandImageInfo,
].filter((image) => {
  return image.keywords.includes("peak district".toLowerCase());
});

export default function PeakDistrict() {
  const pageText =
    "The Peak District is one of my favourite locations in the UK and is home to stunning scenery.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"THE PEAK DISTRICT"}
        pageText={pageText}
        images={peakDistrictImages}
        isLocationCategory={true}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-almostWhite"}
      />
    </main>
  );
}
