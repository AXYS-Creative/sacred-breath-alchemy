const headerBanner = document.querySelector(".header-banner");

if (headerBanner) {
  const closeBanner = () => {
    headerBanner.classList.remove("show-banner");
    headerBanner.setAttribute("aria-hidden", true);
  };

  headerBanner.addEventListener("click", closeBanner);

  setTimeout(() => {
    headerBanner.classList.add("show-banner");
  }, 2500);
}
