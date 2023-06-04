// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const makeImage = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}"> 
    <img class="gallery__image"
     src="${preview}" 
     alt="${description}">
  </a>
</li>`;
};

const makeGallaryImage = galleryItems.map(makeImage).join('');

galleryRef.insertAdjacentHTML('afterbegin', makeGallaryImage);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
