"use client";

//Hooks & Plugins
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

//Components
import { ImageInfoPanel } from "@/app/components/ImageInfoPanel";

const Gallery = ({ images, isAstroImage }) => {
  const [isMobileScreen, setIsMobileScreen] = useState(null);
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const openInfoPanel = (i) => {
    setImgIndex(i);
    setIsInfoPanelOpen(true);
  };

  useEffect(() => {
    if (isInfoPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isInfoPanelOpen]);

  useEffect(() => {
    const handleScreenSizeChange = () => {
      if (window.innerWidth < 768) {
        setIsMobileScreen(true);
      } else {
        setIsMobileScreen(false);
      }
    };

    // Add the resize event listener when the component is mounted
    window.addEventListener("resize", handleScreenSizeChange);

    // Call on load to set the initial screen size state
    handleScreenSizeChange();

    Fancybox.bind("[data-fancybox]", {
      on: {
        "Carousel.ready Carousel.change": (fancybox) => {
          const currentIndex = fancybox.getSlide().index;
          const infoPanelButton = document.querySelector(
            ".f-button.info-button",
          );
          if (infoPanelButton) {
            infoPanelButton.onclick = (e) => {
              e.stopPropagation(); //Doesn't hide icons when clicked

              // console.log(images[currentIndex]?.description);
              openInfoPanel(currentIndex);
            };
          }
        },
      },

      Toolbar: {
        items: {
          infoPanel: {
            tpl: `<button class="f-button info-button"> <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm-1 5v2h2v-2zm0 4v8h2v-8z"></path>
    </svg></button>`,
          },
        },
        display: {
          left: [], //"infobar" - show number of images and current index
          middle: [],
          right: [
            "infoPanel",
            "download",
            "toggle1to1",
            "fullscreen",
            "thumbs",
            "close",
          ],
        },
      },
      Thumbs: {
        showOnStart: !isMobileScreen,
      },
    });

    return () => {
      Fancybox.destroy();
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, [isMobileScreen]);

  return (
    <div className="gallery grid grid-cols-3 gap-1 px-mobileXPadding sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {images.map((image) => {
        return (
          <a
            href={image.fullRes}
            key={`key=${image.title}`}
            data-fancybox="gallery"
            data-caption={""}
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
      <AnimatePresence>
        {isInfoPanelOpen && (
          <ImageInfoPanel
            imageInfo={images[imgIndex]}
            setIsInfoPanelOpen={setIsInfoPanelOpen}
            isAstroImage={isAstroImage}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
