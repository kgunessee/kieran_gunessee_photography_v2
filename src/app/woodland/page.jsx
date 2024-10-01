//Components
import Gallery from "@/app/components/Gallery";
import { woodlandImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";

export default function woodland() {
  return (
    <>
      <Header />
      <main>
        <h2
          className={`my-2 px-mobileXPadding text-2xl font-semibold text-blueBlack dark:text-almostWhite`}
        >
          WOODLAND
        </h2>
        <Gallery images={woodlandImageInfo} isAstroImage={false} />
      </main>
    </>
  );
}
