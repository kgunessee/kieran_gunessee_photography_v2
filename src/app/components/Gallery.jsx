"use client";

//Hooks & Plugins
import { useEffect } from "react";
import { Fancybox, Toolbar, ToolbarItems } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

//Components

const options = {
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: [
        "zoomIn",
        "zoomOut",
        "toggle1to1",
        "rotateCCW",
        "rotateCW",
        "flipX",
        "flipY",
      ],
      right: ["slideshow", "thumbs", "close"],
    },
  },
};

const Gallery = ({ images }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: {
          left: [], //"infobar" - show number of images and current index
          middle: ["download"],
          right: ["toggle1to1", "fullscreen", "thumbs", "close"],
        },
      },
    });

    // Clean up Fancybox instance on component unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="gallery px-mobileXPadding grid grid-cols-3 gap-0.5">
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
