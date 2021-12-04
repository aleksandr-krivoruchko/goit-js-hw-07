import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item =>
	`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`).join('');

galleryEl.innerHTML = markup;

new SimpleLightbox('.gallery a', { /* options */ });




