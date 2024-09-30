//Components
import Gallery from "@/app/components/Gallery";
import { waterImageInfo } from "@/app/components/ImageInfo";
import Header from "@/app/components/Header";

export default function astrophotography() {
  return (
    <>
      <Header />
      <main>
        <h2
          className={`my-2 px-mobileXPadding text-2xl font-semibold text-blueBlack dark:text-almostWhite`}
        >
          WATER
        </h2>
        <Gallery images={waterImageInfo} isAstroImage={false} />
      </main>
    </>
  );
}
