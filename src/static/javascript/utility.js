//
// Get Current Year for Copyright
const getCurrentYear = (() => {
  const yearText = document.querySelector(".year-text");
  const currentYear = new Date().getFullYear();

  yearText.innerHTML = currentYear;
  yearText.setAttribute("datetime", currentYear);
})();

//
// For any 'return to top' link
const handleReturnToTop = (() => {
  const returnToTop = document.querySelector(".return-to-top"),
    logo = document.querySelector(".header-logo");

  returnToTop.addEventListener("click", (e) => {
    logo.focus();
  });
})();

//
// Add 'aria-hidden' to each alchemy symbol
document
  .querySelectorAll(".alchemy-symbol")
  .forEach((el) => el.setAttribute("aria-hidden", true));

//
// Media Queries

//
// Media Queries

const declareMediaQueries = (() => {
  const mediaQueries = {
    maxXxl: "(max-width: 1512px)",
    maxMd: "(max-width: 768px)",
    maxSm: "(max-width: 480px)",
  };

  const states = {};

  const handleBreakpointChange = (query, key) => {
    states[key] = query.matches;
  };

  Object.keys(mediaQueries).forEach((key) => {
    const query = window.matchMedia(mediaQueries[key]);
    states[key] = query.matches; // Initial value
    query.addEventListener("change", (e) => handleBreakpointChange(e, key));
  });

  return states;
})();

const { maxXxl, maxMd, maxSm } = declareMediaQueries;

export { maxXxl, maxMd, maxSm };
