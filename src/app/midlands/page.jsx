//Components
import {
  waterImageInfo,
  landscapeImageInfo,
  woodlandImageInfo,
} from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "The Midlands",
  description: "Images of the Midlands and surrounding areas.",
  keywords: [
    "photography",
    "the midlands",
    "midlands photography",
    "landscape",
    "woodland",
  ],
};

const midlandsImages = [
  ...waterImageInfo,
  ...landscapeImageInfo,
  ...woodlandImageInfo,
].filter((image) => {
  return image.keywords.includes("midlands".toLowerCase());
});

export default function Midlands() {
  const pageText =
    "The Midlands is where I live and has offers some great photo opportunities, most common of which is my local woodland where I have taken the majority of my woodland images.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"THE MIDLANDS"}
        pageText={pageText}
        images={midlandsImages}
        isLocationCategory={true}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
      />
    </main>
  );
}
