const headerBanner = document.querySelector(".header-banner"),
  headerBannerCta = document.querySelector(".header-banner__cta"),
  headerBannerCloseBtn = document.querySelector(".header-banner__btn-close");

if (headerBanner) {
  const closeBanner = () => {
    headerBanner.classList.remove("show-banner");
    headerBanner.setAttribute("aria-hidden", true);
  };

  headerBannerCloseBtn.addEventListener("click", closeBanner);
  // headerBannerCta.addEventListener("click", closeBanner);

  setTimeout(() => {
    headerBanner.classList.add("show-banner");
  }, 4000);
}
