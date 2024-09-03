// CMS Token - Any string element can use the token '[%br%]' to inject a <br> tag.
const lineBreakToken = (() => {
  const lineBreak = (inputString) => {
    return inputString.split("[%br%]").join(`<br aria-hidden="true">`);
  };

  const elements = document.querySelectorAll(`
        p,
        span,
        h1, 
        h2, 
        h3, 
        h4, 
        h5, 
        h6
    `);

  elements.forEach((element) => {
    const content = element.innerHTML;

    if (content.includes("[%br%]")) {
      const wrappedContent = lineBreak(content);
      element.innerHTML = wrappedContent;
    }
  });
})();
