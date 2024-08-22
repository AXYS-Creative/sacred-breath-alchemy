gsap.registerPlugin(ScrollTrigger);

let responsiveGsap = gsap.matchMedia();

responsiveGsap.add(
  {
    maxSm: "(max-width: 480px)",
    maxMd: "(max-width: 768px)",
    maxXl: "(max-width: 1200px)",
    minMd: "(min-width: 769px)",
    minXxl: "(min-width: 1920px)",
  },
  (context) => {
    let { maxSm, maxMd, maxXl, minMd, minXxl } = context.conditions;

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

    // // GLOBAL - Mirage over split text - Rxk studio inspired
    // const mirageText = (() => {
    //   document.querySelectorAll(".inner-span").forEach((el) => {
    //     gsap.to(el, {
    //       yPercent: 100,
    //       scrollTrigger: {
    //         trigger: el,
    //         scrub: 0.6,
    //         start: "top 28%",
    //         end: "top 20%",
    //         markers: true,
    //       },
    //     });
    //   });
    // })();

    // SCOPED - Hero Sliding Text - Rxk studio inspired
    const mirageText = (() => {
      const lines = [
        {
          element: ".hero-heading__line-inner-1",
          trigger: ".hero-heading__line-1",
          start: "top 28%",
          end: "bottom 22%",
          startMinXxl: "top 18%",
          endMinXxl: "bottom 12%",
          markers: false,
        },
        {
          element: ".hero-heading__line-inner-2",
          trigger: ".hero-heading__line-2",
          start: "top 34%",
          end: "bottom 28%",
          startMinXxl: "top 24%",
          endMinXxl: "bottom 18%",
          markers: false,
        },
        {
          element: ".hero-heading__line-inner-3",
          trigger: ".hero-heading__line-3",
          start: "top 40%",
          end: "bottom 34%",
          startMinXxl: "top 30%",
          endMinXxl: "bottom 24%",
          markers: false,
        },
        {
          element: ".hero-heading__line-inner-1b",
          trigger: ".hero-heading__line-1b",
          start: "top 26%",
          end: "bottom 26%",
          undefined,
          undefined,
          markers: false,
        },
        {
          element: ".hero-heading__line-inner-2b",
          trigger: ".hero-heading__line-2b",
          start: "top 29%",
          end: "bottom 29%",
          undefined,
          undefined,
          markers: false,
        },
        {
          element: ".hero-heading__line-inner-3b",
          trigger: ".hero-heading__line-3b",
          start: "top 32%",
          end: "bottom 32%",
          undefined,
          undefined,
          markers: false,
        },
        {
          element: ".hero-heading__line-inner-4b",
          trigger: ".hero-heading__line-4b",
          start: "top 35%",
          end: "bottom 35%",
          undefined,
          undefined,
          markers: false,
        },
      ];

      lines.forEach(
        ({ element, trigger, start, end, startMinXxl, endMinXxl, markers }) => {
          gsap.to(element, {
            yPercent: 100,
            scrollTrigger: {
              trigger: trigger,
              scrub: 0.6,
              start: minXxl ? startMinXxl : start,
              end: minXxl ? endMinXxl : end,
              markers: markers,
            },
          });
        }
      );
    })();

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
  }
);
