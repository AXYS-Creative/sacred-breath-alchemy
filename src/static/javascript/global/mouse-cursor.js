if (window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
  const cursor = document.querySelector(".mouse-cursor");
  const serviceBlocks = document.querySelectorAll(".service-block");
  const serviceImages = document.querySelectorAll(".service-block__image");

  const imageSources = [];
  serviceImages.forEach((img) => imageSources.push(img.src));

  imageSources.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "";
    img.classList.add("mouse-cursor__image");
    cursor.appendChild(img);
  });

  let previousX = 0;
  let previousTime = Date.now();
  let inactivityTimeout;

  document.addEventListener("mousemove", (e) => {
    const currentTime = Date.now();
    const timeDelta = currentTime - previousTime;

    const deltaX = e.clientX - previousX;
    const velocity = deltaX / timeDelta;

    previousX = e.clientX;
    previousTime = currentTime;

    const maxRotation = 6; // Maximum rotation angle
    const rotationAngle =
      Math.min(maxRotation, Math.abs(velocity) * maxRotation) *
      Math.sign(velocity);

    cursor.querySelectorAll(".mouse-cursor__image").forEach((img) => {
      img.style.translate = `calc(${e.clientX}px - 50%) calc(${e.clientY}px - 50%)`;
      img.style.rotate = `0deg`; // Reset rotation to neutral by default
    });

    const activeImage = cursor.querySelector(
      ".mouse-cursor__image[style*='opacity: 1']"
    );
    if (activeImage) {
      activeImage.style.rotate = `${-rotationAngle}deg`;
    }

    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
      if (activeImage) {
        activeImage.style.rotate = `0deg`;
      }
    }, 100); // Adjust this delay if needed
  });

  serviceBlocks.forEach((el, index) => {
    el.addEventListener("mousemove", () => {
      cursor.classList.add("service-active");

      cursor.querySelectorAll(".mouse-cursor__image").forEach((img) => {
        img.style.opacity = 0;
      });

      // Show only the related image for the hovered service block
      const activeImage = cursor.querySelectorAll(".mouse-cursor__image")[
        index
      ];
      activeImage.style.opacity = 1;
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("service-active");
    });
  });

  serviceBlocks.forEach((block) => {
    // Add the class when entering any child element
    block.querySelectorAll("p, a").forEach((child) => {
      child.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-contrast");
      });

      // Remove the class when leaving any child element
      child.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-contrast");
      });
    });

    // Ensure the class is removed when leaving the entire service block
    block.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-contrast");
    });
  });

  // Hide Mouse cursor on Safari ... glitched the animation
  const isSafari = () => {
    let ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("safari") !== -1 && ua.indexOf("chrome") === -1;
  };

  if (isSafari()) {
    cursor.style.display = "none";
    // cursor.style.transition = "none"; // Not working

    // serviceImages.forEach((img) => (img.style.transition = "none"));
  }
}
