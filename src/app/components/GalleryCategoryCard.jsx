import Link from "next/link";
import Image from "next/image";

export function GalleryCategoryCard({ category, title, imageUrl, alt }) {
  return (
    <>
      <Link href={category}>
        <div className={`relative h-32 w-full`}>
          <Image
            width={800}
            height={100}
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
          <div className="absolute inset-x-0 bottom-0 rounded-b bg-almostBlack px-2 py-1 text-almostWhite">
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}
