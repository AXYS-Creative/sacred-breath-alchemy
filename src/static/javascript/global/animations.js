gsap.registerPlugin(ScrollTrigger);

let responsiveGsap = gsap.matchMedia();

responsiveGsap.add(
  {
    maxSm: "(max-width: 480px)",
    maxMd: "(max-width: 768px)",
    maxXl: "(max-width: 1200px)",
    minMd: "(min-width: 769px)",
  },
  (context) => {
    let { maxSm, maxMd, maxXl, minMd } = context.conditions;

    // SCOPED - Slider Tween
    gsap.fromTo(
      ".slider__inner",
      { x: maxSm ? "-8%" : maxXl ? "-4%" : "-2%" },
      {
        x: maxSm ? "-72%" : maxXl ? "-42%" : "-32%",
        ease: "none",
        scrollTrigger: {
          trigger: ".slider",
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
          // markers: true,
        },
      }
    );

    // GLOBAL - Easily toggle an 'animate' class on any element with '.gsap-animate' class
    const globalGenerateAnimate = (() => {
      const targetElements = document.querySelectorAll(".gsap-animate");

      targetElements.forEach((targetElem) => {
        gsap.to(targetElem, {
          scrollTrigger: {
            trigger: targetElem,
            start: "top 98%",
            end: "bottom top",
            onEnter: () => targetElem.classList.add("animate"),
            onLeave: () => targetElem.classList.remove("animate"),
            onEnterBack: () => targetElem.classList.add("animate"),
            onLeaveBack: () => targetElem.classList.remove("animate"),
          },
        });
      });

      // GAME CHANGER!!!
      // Refresh ScrollTrigger instances on page load and resize
      window.addEventListener("load", () => {
        ScrollTrigger.refresh();
      });

      // Greater than 520 so it doesn't refresh on  mobile(dvh)
      if (window.innerWidth > 520) {
        window.addEventListener("resize", () => {
          ScrollTrigger.refresh();
        });
      }
    })();

    // // Animating each word via 'word-split' utility class. Also add 'gsap-animate' to the element.
    // const wordSplit = (() => {
    //   const spanWordsInParagraph = (paragraph) => {
    //     const text = paragraph.textContent || paragraph.innerText;
    //     const words = text.trim().split(/\s+/);

    //     const wrappedWords = words
    //       .map(
    //         (word) =>
    //           `<span class="outter-span"><span class="inner-span">${word}</span></span>`
    //       )
    //       .join(" ");

    //     paragraph.innerHTML = wrappedWords;
    //   };

    //   const applyWordWrappingToAll = (globalClass) => {
    //     const paragraphs = document.querySelectorAll(globalClass);
    //     paragraphs.forEach((paragraph) => spanWordsInParagraph(paragraph));
    //   };

    //   applyWordWrappingToAll(".word-split");
    // })();

    // Casino Slots Sliding Text - Rxk studio inspired
    const textBlockAnimation = (() => {
      const elements = document.querySelectorAll(
        ".text-block__line-inner, .text-block__line-inner-2, .text-block__line-inner-3, .text-block__line-inner-4"
      );

      elements.forEach((element) => {
        gsap.to(element, {
          yPercent: 100,
          scrollTrigger: {
            trigger: element,
            scrub: 0.2,
            start: "top 80%",
            end: "bottom 50%",
          },
        });
      });
    })();
  }
);
