const faqList = document.querySelector(".faq-list");

const faqQuestions = document.querySelectorAll(".faq-list .question"),
  faqAnswers = document.querySelectorAll(".faq-list .answer");

faqQuestions.forEach((el) => el.setAttribute("aria-expanded", false));
faqAnswers.forEach((el) => el.setAttribute("aria-hidden", true));

faqList?.addEventListener("click", (event) => {
  const clickedElement = event.target;
  const isQuestionOrAnswer =
    clickedElement.closest(".question") || clickedElement.closest(".answer");

  if (isQuestionOrAnswer) {
    const faqItem = clickedElement.closest(".faq-item");
    toggleFAQItem(faqItem);
  }
});

const toggleFAQItem = (faqItem) => {
  const answer = faqItem.querySelector(".answer");
  const question = faqItem.querySelector(".question");
  const isActive = faqItem.classList.contains("active");

  faqItem.classList.toggle("active");

  question.setAttribute("aria-expanded", !isActive);
  answer.setAttribute("aria-hidden", isActive);

  // CMS FAQ behavior toggle, only one open at a time.
  if (faqList.classList.contains("single-faq")) {
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove("active");
        item.querySelector(".question").setAttribute("aria-expanded", false);
        item.querySelector(".answer").setAttribute("aria-hidden", true);
      }
    });
  }
};
