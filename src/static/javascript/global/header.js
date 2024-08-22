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
  }, 2500);
}
