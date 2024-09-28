"use client";

//Hooks & Plugins
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

//Components
const Gallery = ({ images }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    // Clean up Fancybox instance on component unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="gallery grid grid-cols-4 gap-1">
      {images.map((image) => {
        return (
          <a
            href={image.fullRes}
            key={`key=${image.title}`}
            data-fancybox="gallery"
          >
            <Image
              src={image.thumb}
              alt={image.title}
              height={200}
              width={200}
              style={{
                borderRadius: "3px",
                width: "200px",
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />{" "}
          </a>
        );
      })}
    </div>
  );
};

export default Gallery;
