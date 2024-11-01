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
  const [isBlockingBack, setIsBlockingBack] = useState(false); // Flag to manage back navigation

  // Sets the image index in order to open the correct info panel
  const openInfoPanel = (index) => {
    setImgIndex(index);
    setIsInfoPanelOpen(true);
    window.history.pushState(null, document.title, window.location.href); // Push state when opening info panel
    setIsBlockingBack(true);
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
          setIsBlockingBack(true);
        },
        close: () => {
          setIsBlockingBack(false); // Reset blocking back state when Fancybox is closed
        },
      },

      Toolbar: {
        items: {
          infoPanel: {
            tpl: `<div class="f-button info-button"> <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
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
        transition: "fade",
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
      } else {
        setIsBlockingBack(false); // Allow back navigation if neither is open
      }
    };

    window.addEventListener("popstate", handleBackSwipe);

    return () => {
      window.removeEventListener("popstate", handleBackSwipe);
    };
  }, [isInfoPanelOpen]);

  return (
    <>
      <div className="gallery grid grid-cols-3 gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {images.map((image) => (
          <a
            href={image.fullRes}
            key={`key=${image.title}`}
            data-fancybox="gallery"
            data-caption={`${image.title} <span class="dark:text-lightBlue text-blueBlack">//</span> ${
              isAstroImage ? image.catalogue : image.location
            }`}
          >
            <div className="thumbnail relative aspect-square w-full">
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
              <div className="absolute top-0 grid h-full w-full place-items-center bg-almostBlack/90 opacity-0 transition-opacity duration-150 hover:opacity-100">
                <p className="text-wrap text-center text-xs text-almostWhite lg:text-base">
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
