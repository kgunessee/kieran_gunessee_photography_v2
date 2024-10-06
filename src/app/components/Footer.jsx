import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer
        className={`mt-4 flex h-20 items-center justify-between border-t-[1px] border-black/20 bg-transparent px-mobileXPadding lg:px-desktopXPadding dark:border-white/20`}
      >
        <p className={`text-almostBlack/70 dark:text-almostWhite/70`}>
          © Kieran Gunessee {year}. Website designed and developed by me.
        </p>
        <div
          className={`relative flex items-center gap-4 rounded p-1 opacity-80`}
        >
          <Link
            href={"https://www.astrobin.com/users/Kieran_Gunessee/"}
            target="_blank"
            className="group relative"
          >
            <Image
              width={45}
              height={45}
              src={"/images/icons/astrobin_logo.webp"}
              alt={"link to astrobin logo"}
              className="transition duration-300 group-hover:opacity-70"
            />
            <div className="pointer-events-none absolute inset-0">
              <Image
                width={45}
                height={45}
                src={"/images/icons/astrobin_logo.webp"}
                alt={"astrobin overlay"}
                className="absolute inset-0 opacity-80 mix-blend-multiply invert filter transition duration-300 group-hover:opacity-70 dark:invert-0"
              />
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/kieran_gunessee_photography/"}
            target="_blank"
            className="group relative"
          >
            <Image
              width={30}
              height={30}
              src={"/images/icons/instagram_logo.webp"}
              alt={"link to instagram logo"}
              className="transition duration-300 group-hover:opacity-70"
            />
            <div className="pointer-events-none absolute inset-0">
              <Image
                width={30}
                height={30}
                src={"/images/icons/instagram_logo.webp"}
                alt={"instagram overlay"}
                className="absolute inset-0 opacity-80 mix-blend-multiply invert filter transition duration-300 group-hover:opacity-70 dark:invert-0"
              />
            </div>
          </Link>
        </div>
      </footer>
    </>
  );
}
