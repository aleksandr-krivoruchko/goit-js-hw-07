import { galleryItems } from './gallery-items.js';



const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(item => 
	`<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src='${item.preview}'
      data-source='${item.original}'
      alt='${item.description}'
    />
  </a>
</div>`).join('');

galleryEl.innerHTML = markup;

galleryEl.addEventListener('click', onOpenModal);

let image = '';
function createImgInModal(e) {
	image = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">`);
}


function onOpenModal(e) {
	e.preventDefault();
window.addEventListener('keydown', onEscCloseModal);

createImgInModal(e);
image.show()
}


function onEscCloseModal(e) {
	e.preventDefault();
	window.removeEventListener('keydown', onEscCloseModal);

	if(e.code === 'Escape'){
    image.close()
	}
}




