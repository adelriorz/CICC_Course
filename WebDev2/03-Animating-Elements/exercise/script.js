const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
  ];
  
  const img = document.querySelector("img");
  const prevButton = document.querySelector("#prev-button");
  const nextButton = document.querySelector("#next-button");
  let currentIndex = 0;
  
  function showImage(index) {
    img.src = images[index];
  }
  
  function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    showImage(currentIndex);
  
    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);
  });
  