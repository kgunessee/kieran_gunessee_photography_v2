//Components
import Gallery from "@/app/components/Gallery";
import { waterImageInfo } from "@/app/components/ImageInfo";

export default function astrophotography() {
  return (
    <section>
      <h2
        className={`px-mobileXPadding text-blueBlack dark:text-almostWhite my-2 text-2xl font-semibold`}
      >
        WATER
      </h2>
      <Gallery images={waterImageInfo} />
    </section>
  );
}
