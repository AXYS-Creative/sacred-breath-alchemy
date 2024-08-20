const faqList = document.querySelector(".faq-list");

faqList.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const isQuestionOrAnswer =
    clickedElement.closest(".question") || clickedElement.closest(".answer");

  if (isQuestionOrAnswer) {
    const faqItem = clickedElement.closest(".faq-item");
    toggleFAQItem(faqItem);
  }
});

const toggleFAQItem = (faqItem) => {
  faqItem.classList.toggle("active");

  // Toggle to allow/prevent multiple faq items open at the same time
  // document.querySelectorAll(".faq-item").forEach((item) => {
  //   if (item !== faqItem) {
  //     item.classList.remove("active");
  //   }
  // });
};
