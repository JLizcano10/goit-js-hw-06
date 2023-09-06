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

const galleryList = document.querySelector(".gallery");
// Añada un diseño mínimo a la galería con flexboxes o Computación en malla mediante las clases CSS.
galleryList.style.display = "flex";
galleryList.style.flexDirection = "column-reverse";
galleryList.style.alignItems = "center";
galleryList.style.gap = "20px";

const galleryImages = images
  .map(image => `<img src= "${image.url}" alt = "${image.alt}" width = "400" >`)
  .join("");
// console.log(galleryImages);

galleryList.insertAdjacentHTML("beforeend", galleryImages);
