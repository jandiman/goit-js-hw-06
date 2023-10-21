const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElements = document.querySelector(".gallery");
galleryElements.style.display = "flex";
galleryElements.style.padding = 0;
galleryElements.style.listStyle = "none";

const imagesMarkup = images
  .map(
    (image) => `
  <li class="gallery-item" style="margin: 10px;">
    <img src="${image.url}" alt="${image.alt}" style="max-width: 100%; height: auto;"  class="gallery-image">
  </li>
`
  )
  .join("");

galleryElements.insertAdjacentHTML("beforeend", imagesMarkup);
