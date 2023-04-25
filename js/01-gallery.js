import { galleryItems } from "./gallery-items.js";
// Change code below this line

///////Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryList = document.querySelector(".gallery");

const itemsGallery = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/>
      </a>
    </li>
`
  )
  .join("");
galleryList.innerHTML = itemsGallery;
// console.log(itemsGallery);
// console.log(galleryItems);

// Реалізація делегування на ul.gallery і отримання url великого зображення.
galleryList.addEventListener("click", onImageClick);

function onImageClick(eve) {
  eve.preventDefault();

  const clickElem = eve.target;
  //   console.log(clickElem);

  if (clickElem.nodeName !== "IMG") {
    return;
  }

  const originImage = clickElem.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${originImage}" width="800" height=600">
`);

  instance.show();
  console.log(originImage);
}
