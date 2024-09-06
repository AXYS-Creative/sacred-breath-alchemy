import { maxXxl, maxSm } from "../utility.js";

const siteHeader = document.querySelector(".site-header"),
  headerBanner = document.querySelector(".header-banner");

if (headerBanner) {
  const closeBanner = () => {
    siteHeader.classList.remove("show-banner");
    siteHeader.setAttribute("aria-hidden", true);
  };

  headerBanner.addEventListener("click", closeBanner);

  setTimeout(() => {
    siteHeader.classList.add("show-banner");
  }, 4200);

  const handleMarquee = (() => {
    const marqueeSliders = document.querySelectorAll(".marquee-slider");

    marqueeSliders.forEach((marqueeSlider) => {
      const clonedContent = marqueeSlider.innerHTML;

      const repetitions = maxSm ? 0 : maxXxl ? 2 : 4; // Number of times to duplicate the content
      for (let i = 0; i < repetitions; i++) {
        marqueeSlider.innerHTML += clonedContent;
      }
    });
  })();
}
