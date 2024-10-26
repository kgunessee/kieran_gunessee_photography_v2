//Components
import { waterImageInfo, landscapeImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";
import { PageTemplate } from "@/app/components/PageTemplate";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Iceland - Kieran Gunessee Astrophotography",
  description: "Images of my trip to Iceland, the land of Ice and Fire.",
  keywords: [
    "photography",
    "iceland",
    "iceland photography",
    "landscape",
    "waterfalls",
    "rivers",
  ],
};

const icelandImages = [...waterImageInfo, ...landscapeImageInfo].filter(
  (image) => {
    return image.location.toLowerCase().includes("iceland");
  },
);

export default function Water() {
  const pageText =
    "Iceland is an incredible country and was home to some amazing scenery. Here are my images from the land of ice and fire.";
  return (
    <main>
      <Header />
      <PageTemplate
        pageTitle={"ICELAND"}
        pageText={pageText}
        images={icelandImages}
        isLocationCategory={true}
        bgColourDark={"dark:to-blue-500/5"}
        bgColourLight={"to-blue-500/15"}
      />
    </main>
  );
}
