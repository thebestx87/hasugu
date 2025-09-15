// 서비스 항목 펼침메뉴
function toggleDetail(el) {
  const detail = el.querySelector(".detail");
  detail.style.display = detail.style.display === "block" ? "none" : "block";
}

// 슬라이드
let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slides img");
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}
setInterval(() => {
  moveSlide(1);
}, 3000);
window.addEventListener("scroll", () => {
  const footer = document.querySelector("footer");
  const cta = document.querySelector(".fixed-cta");
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    // 푸터가 화면에 보이면 CTA를 푸터 위로 올림
    cta.style.bottom = (windowHeight - footerTop) + 20 + "px";
  } else {
    // 평소에는 화면 하단에 고정
    cta.style.bottom = "20px";
  }
});
