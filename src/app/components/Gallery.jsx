"use client";

// Hooks & Plugins
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

// Components
import { ImageInfoPanel } from "@/app/components/ImageInfoPanel";

export default function Gallery({ images, isAstroImage }) {
  const [isMobileScreen, setIsMobileScreen] = useState(null); // Boolean to state whether the screen size is mobile (< 768px)
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false); // Boolean to state whether the info panel is open on an image (Fancybox)
  const [imgIndex, setImgIndex] = useState(0); // The current opened Fancybox image

  // Sets the image index in order to open the correct info panel
  const openInfoPanel = (index) => {
    setImgIndex(index);
    setIsInfoPanelOpen(true);
    window.history.pushState(null, document.title, window.location.href); // Push state when opening info panel
  };

  // Disable scroll when info panel is open
  useEffect(() => {
    if (isInfoPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isInfoPanelOpen]);

  useEffect(() => {
    // Sets this state based on screen size in order to do things like change the logo or show/hide the mobile menu
    const handleScreenSizeChange = () => {
      setIsMobileScreen(window.innerWidth < 768);
    };

    // Call on load to set the initial screen size state
    handleScreenSizeChange();

    // Fancybox initialization and options
    Fancybox.bind("[data-fancybox]", {
      on: {
        "Carousel.ready Carousel.change": (fancybox) => {
          const currentIndex = fancybox.getSlide().index;
          const infoPanelButton = document.querySelector(
            ".f-button.info-button",
          );
          if (infoPanelButton) {
            infoPanelButton.onclick = (e) => {
              e.stopPropagation(); // Doesn't hide FB icons when clicked
              openInfoPanel(currentIndex);
            };
          }
        },
        init: () => {
          window.history.pushState(null, document.title, window.location.href); // Push state when Fancybox is opened
        },
      },

      Toolbar: {
        items: {
          infoPanel: {
            tpl: `<div class="f-button info-button" aria-label="Open info panel" data-title="Open info panel"> <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
         
              d="M12 11.5v5M12 7.51l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            ></path>
          </svg></div>`,
          },
        },
        display: {
          left: [],
          middle: [],
          right: ["infoPanel", "download", "fullscreen", "thumbs", "close"],
        },
      },
      Thumbs: {
        showOnStart: !isMobileScreen,
      },
      transitionEffect: "fade",
      transitionDuration: 300,
      backdropClick: false,
      Carousel: {
        friction: 0.3,
        swipe: {
          transitionEffect: "fade",
        },
      },
      Images: {
        content: (_ref, slide) => {
          let rez = "<picture>";
          const media = slide.media.split(";");

          slide.sources.split(";").map((source, index) => {
            rez += `<source
media="${media[index] || ""}"
srcset="${source}"
/>`;
          });

          rez += `<img src="${slide.src}" alt="${slide.alt}" />`;

          rez += "</picture>";

          return rez;
        },
      },
    });

    return () => {
      Fancybox.destroy();
    };
  }, [isMobileScreen]);

  // Handle back-swipe gesture with popstate
  useEffect(() => {
    const handleBackSwipe = (event) => {
      if (isInfoPanelOpen) {
        event.preventDefault();
        setIsInfoPanelOpen(false);
      } else if (Fancybox.getInstance()) {
        event.preventDefault();
        Fancybox.close();
      }
    };

    window.addEventListener("popstate", handleBackSwipe);

    return () => {
      window.removeEventListener("popstate", handleBackSwipe);
    };
  }, [isInfoPanelOpen]);

  return (
    <>
      <div className="gallery mt-2 grid grid-cols-3 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {images.map((image, index) => (
          <a
            key={`full res image ${index}`}
            href={image.fullRes}
            data-fancybox="gallery"
            data-media="(max-width: 800px);(max-width: 3840px)"
            data-sources={`${image["1400px"]};${image["2100px"]}`}
            data-alt={`${image.title}`}
            // ${image["400px"]};${image["800px"]} (max-width: 1400px);
            // href={image.fullRes}
            // key={`full res image ${index}`}
            // data-fancybox="gallery"
            // data-caption={`${image.title} ${
            //   image.title === ""
            //     ? ""
            //     : `<span class="text-blueBlack dark:text-lightBlue">//</span>`
            // } ${isAstroImage ? image.catalogue : image.location}`}
            // data-src-set={`${image["400px"]} 400px,${image["800px"]} 800px,${image["1440px"]} 1440px,${image["2000px"]} 2000px`}
            // data-sizes={`(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1440px) 1440px, `}
          >
            <div className="thumbnail relative aspect-square w-full overflow-hidden">
              <Image
                src={image.thumb}
                alt={`${image.title} thumbnail`}
                fill={true}
                sizes="(max-width: 640px) 200px, (max-width: 768px) 350px, (max-width: 1024px) 400px, (max-width: 1280px) 500px"
                className={`object-cover transition duration-300 hover:scale-105`}
                // style={{
                //   borderRadius: "0.5rem",
                //   objectFit: "cover",
                // }}
              />

              <div className="absolute top-0 grid h-full w-full place-items-center bg-almostBlack/80 from-transparent via-transparent via-10% to-almostBlack/80 px-4 opacity-0 transition duration-150 hover:opacity-100 sm:block sm:bg-transparent sm:bg-gradient-to-bl sm:px-0">
                <p className="text-wrap text-center text-sm text-almostWhite sm:absolute sm:bottom-0 sm:px-4 sm:py-4 sm:text-left sm:text-xl">
                  {image.title}
                </p>
              </div>
            </div>
          </a>
        ))}
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
    </>
  );
}
