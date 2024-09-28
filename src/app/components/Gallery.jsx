"use client";

//Hooks & Plugins
import { useEffect, useState } from "react";
import { Fancybox, Toolbar, ToolbarItems } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

//Components

const Gallery = ({ images }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: {
          left: [], //"infobar" - show number of images and current index
          middle: [],
          right: ["download", "toggle1to1", "fullscreen", "thumbs", "close"],
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="gallery grid grid-cols-3 gap-1 px-mobileXPadding sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {images.map((image) => {
        return (
          <a
            href={image.fullRes}
            key={`key=${image.title}`}
            data-fancybox="gallery"
            data-caption={`${image.title}`}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={image.thumb}
                alt={image.title}
                fill={true}
                sizes="(max-width: 640px) 200px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 500px"
                style={{
                  borderRadius: "3px",
                  objectFit: "cover",
                }}
              />
              <div
                className={`absolute top-0 grid h-full w-full place-items-center bg-almostBlack/90 opacity-0 transition-opacity duration-150 hover:opacity-100`}
              >
                <p className={`text-wrap text-center text-xs text-almostWhite`}>
                  {image.title}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Gallery;
