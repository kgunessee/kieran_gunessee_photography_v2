import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer
        className={`mt-4 flex h-20 items-center justify-between border-t-[1px] border-white/20 bg-transparent px-mobileXPadding`}
      >
        <p className={`text-almostBlack dark:text-almostWhite`}>
          © Kieran Gunessee {year}. Website designed and developed by me.
        </p>
        <div
          className={`flex items-center gap-4 rounded bg-almostBlack/50 p-1`}
        >
          <Link href={"#"}>
            <Image
              width={40}
              height={40}
              src={"/images/icons/astrobin_logo.webp"}
              alt={"astrobin logo"}
            />
          </Link>
          <Link href={"#"}>
            <Image
              width={30}
              height={30}
              src={"/images/icons/instagram_logo.webp"}
              alt={"astrobin logo"}
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
