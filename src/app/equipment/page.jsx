//Hooks & Plugins
import Link from "next/link";
import Image from "next/image";

//Components
import Header from "@/app/components/Header";

export default function equipment() {
  return (
    <>
      <Header />
      <main>
        <h2
          className={`my-2 px-mobileXPadding text-2xl font-semibold text-blueBlack dark:text-almostWhite`}
        >
          GALLERY
        </h2>
        <Link href={"/astrophotography"}>
          {/*<Image src={"#"} alt={"#"}></Image>*/}
          <h3>ASTROPHOTOGRAPHY</h3>
        </Link>
      </main>
    </>
  );
}
