gsap.registerPlugin(ScrollTrigger);

let responsiveGsap = gsap.matchMedia();

responsiveGsap.add(
  {
    maxSm: "(max-width: 480px)",
    maxMd: "(max-width: 768px)",
    maxXl: "(max-width: 1200px)",
    maxXxl: "(max-width: 1512px)",
    minMd: "(min-width: 769px)",
  },
  (context) => {
    let { maxSm, maxMd, maxXl, maxXxl, minMd } = context.conditions;

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
    })();

    // Animating each word via 'word-split' utility class. Also add 'gsap-animate' to the element.
    const wordSplit = (() => {
      const spanWordsInParagraph = (paragraph) => {
        const text = paragraph.textContent || paragraph.innerText;
        const words = text.trim().split(/\s+/);

        const wrappedWords = words
          .map(
            (word) =>
              `<span class="outer-span">
                <span class="inner-span">${word}</span>
                <span class="inner-span">${word}</span>
              </span>`
          )
          .join(" ");

        paragraph.innerHTML = wrappedWords;
      };

      const applyWordWrappingToAll = (globalClass) => {
        const paragraphs = document.querySelectorAll(globalClass);
        paragraphs.forEach((paragraph) => spanWordsInParagraph(paragraph));
      };

      applyWordWrappingToAll(".word-split");
    })();

    // // GLOBAL - Hero Sliding Text
    // const mirageText = (() => {
    //   document.querySelectorAll(".outer-span").forEach((outer) => {
    //     const firstSpan = outer.querySelector(".inner-span:first-of-type");
    //     const secondSpan = outer.querySelector(".inner-span:last-of-type");

    //     gsap.to(firstSpan, {
    //       yPercent: 100,
    //       scrollTrigger: {
    //         trigger: secondSpan,
    //         scrub: 0.6,
    //         start: maxXxl ? "top 14%" : "top 20%",
    //         end: "top 5%",
    //         // markers: true,
    //       },
    //     });

    //     gsap.to(secondSpan, {
    //       yPercent: 100,
    //       scrollTrigger: {
    //         trigger: secondSpan,
    //         scrub: 0.6,
    //         start: maxXxl ? "top 14%" : "top 20%",
    //         end: "top 5%",
    //         // markers: true,
    //       },
    //     });
    //   });
    // })();

    // SCOPED - Hero Sliding Text - Animating per line (smoother)
    const mirageText = (() => {
      const lines = [
        {
          element: ".hero-h1__line-inner-1",
          trigger: ".hero-h1__line-1",
          start: "top 28%",
          end: "bottom 22%",
        },
        {
          element: ".hero-h1__line-inner-2",
          trigger: ".hero-h1__line-2",
          start: "top 34%",
          end: "bottom 28%",
        },
        {
          element: ".hero-h1__line-inner-3",
          trigger: ".hero-h1__line-3",
          start: "top 40%",
          end: "bottom 34%",
        },
        {
          element: ".hero-h1__line-inner-1b",
          trigger: ".hero-h1__line-1b",
          start: "top 26%",
          end: "bottom 26%",
        },
        {
          element: ".hero-h1__line-inner-2b",
          trigger: ".hero-h1__line-2b",
          start: "top 29%",
          end: "bottom 29%",
        },
        {
          element: ".hero-h1__line-inner-3b",
          trigger: ".hero-h1__line-3b",
          start: "top 32%",
          end: "bottom 32%",
        },
        {
          element: ".hero-h1__line-inner-4b",
          trigger: ".hero-h1__line-4b",
          start: "top 35%",
          end: "bottom 35%",
        },
        {
          element: ".footer-h2__line-inner-1",
          trigger: ".footer-h2__line-1",
          start: "top 46%",
          end: "50% 38%",
        },
        {
          element: ".footer-h2__line-inner-2",
          trigger: ".footer-h2__line-2",
          start: "top 52%",
          end: "50% 44%",
        },
        {
          element: ".footer-h2__line-inner-3",
          trigger: ".footer-h2__line-3",
          start: "top 58%",
          end: "50% 50%",
        },
        {
          element: ".footer-h2__line-inner-1b",
          trigger: ".footer-h2__line-1b",
          start: "top 42%",
          end: "bottom 42%",
        },
        {
          element: ".footer-h2__line-inner-2b",
          trigger: ".footer-h2__line-2b",
          start: "top 45%",
          end: "bottom 45%",
        },
        {
          element: ".footer-h2__line-inner-3b",
          trigger: ".footer-h2__line-3b",
          start: "top 48%",
          end: "bottom 48%",
        },
        {
          element: ".footer-h2__line-inner-4b",
          trigger: ".footer-h2__line-4b",
          start: "top 51%",
          end: "bottom 51%",
        },
      ];

      lines.forEach(({ element, trigger, start, end, markers }) => {
        gsap.to(element, {
          yPercent: 100,
          scrollTrigger: {
            trigger: trigger,
            scrub: 0.6,
            start: start,
            end: end,
            markers: markers,
          },
        });
      });
    })();

    // Refresh ScrollTrigger instances on page load and resize. Game Changer
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    // Greater than 520 so it doesn't loop refresh on mobile(dvh)
    if (window.innerWidth > 520) {
      window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
      });
    }
  }
);
