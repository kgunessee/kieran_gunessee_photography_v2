//Components
import Gallery from "@/app/components/Gallery";
import { astroImageInfo } from "@/app/components/ImageInfo";

export default function astrophotography() {
  return <Gallery images={astroImageInfo} />;
}
