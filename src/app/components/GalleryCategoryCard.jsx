import Link from "next/link";
import Image from "next/image";

export function GalleryCategoryCard({ category, title, imageUrl, alt }) {
  return (
    <>
      <Link href={category}>
        <div className={`group relative flex w-full flex-col`}>
          <div className={`w-fit overflow-hidden rounded-t-lg`}>
            <div
              className={`h-32 transition duration-300 hover:brightness-105 group-hover:scale-105 md:h-40 2xl:h-52`}
            >
              <Image
                className={`h-full rounded-t-lg object-cover object-center`}
                width={800}
                height={400}
                src={imageUrl}
                alt={alt}
              ></Image>
            </div>
          </div>
          <div className="rounded-b-lg bg-blueBlack px-2 py-1 text-almostWhite">
            <h3 className={`text-sm md:text-base 2xl:text-xl`}>{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
