let currentSlide = 0;
let slides = document.querySelectorAll(".slide");

function showSlide(n){
  slides.forEach(s => s.classList.remove("active"));
  slides[n].classList.add("active");
}

function nextSlide(){
  if(currentSlide < slides.length - 1){
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide(){
  if(currentSlide > 0){
    currentSlide--;
    showSlide(currentSlide);
  }
}

// 🎁 Gift Open Function
function openGift() {
  document.querySelector(".gift-container").classList.add("gift-open");

  let popup = document.getElementById("lovePopup");
  popup.style.display = "flex";

  // Hide popup after 4 seconds
  setTimeout(() => {
    popup.style.display = "none";
  }, 4000);
}

