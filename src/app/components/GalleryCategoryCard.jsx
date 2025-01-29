import Link from "next/link";
import Image from "next/image";

export function GalleryCategoryCard({ category, title, imageUrl, alt }) {
  return (
    <>
      <Link href={category}>
        <div className={`group relative flex w-full flex-col drop-shadow-sm`}>
          <div className={`relative w-fit overflow-hidden`}>
            <div
              className={`h-32 transition duration-300 hover:brightness-105 group-hover:scale-[1.025] md:h-40 2xl:h-52`}
            >
              <Image
                className={`h-full object-cover object-center brightness-90`}
                width={800}
                height={400}
                src={imageUrl}
                alt={alt}
              ></Image>
            </div>
            <div
              className={`absolute top-0 h-full w-full bg-gradient-to-bl from-transparent via-transparent to-almostBlack`}
            ></div>
            <div className="absolute bottom-0 left-0 p-2 text-almostWhite transition md:px-4">
              <h3
                className={`text-xl font-light md:text-base lg:font-normal 2xl:text-xl`}
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
// left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
