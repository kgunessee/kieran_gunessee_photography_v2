import Link from "next/link";
import Image from "next/image";

export function GalleryCategoryCard({ category, title, imageUrl, alt }) {
  return (
    <>
      <Link href={category}>
        <div
          className={`group relative h-32 w-full overflow-hidden md:h-40 2xl:h-52`}
        >
          <div
            className={`transition-transform duration-300 group-hover:scale-110`}
          >
            <Image
              width={800}
              height={400}
              // fill={true}
              style={{
                objectFit: "cover",
                objectPosition: "center 60%",
                borderRadius: "0.25rem",
                height: "100%",
              }}
              src={imageUrl}
              alt={alt}
            ></Image>
          </div>
          <div className="absolute inset-x-0 bottom-0 rounded-b bg-blueBlack px-2 py-1 text-almostWhite">
            <h3 className={`text-sm md:text-base 2xl:text-xl`}>{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
