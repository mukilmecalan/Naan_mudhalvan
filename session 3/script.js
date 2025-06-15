const images = [
  "ironman.webp",
  "captainamerica.webp",
  "superman.webp",
  "spiderman.webp",
  "batman.webp"
];

let index = 0;
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail-img");

function setImage(i) {
  index = i;
  mainImage.src = images[index];
  updateThumbnails();
}

function nextSlide() {
  index = (index + 1) % images.length;
  setImage(index);
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  setImage(index);
}

function updateThumbnails() {
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === index);
  });
}