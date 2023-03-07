const bookList = document.querySelector('.book__list');
const addButton = document.querySelector('.book__button');
const bookModal = document.querySelector('.book__modal');
const bookModalOverlay = document.querySelector('.book__modal-overlay');
const bookModalButton = document.querySelector('.book__modal-button');


addButton.addEventListener('click', () => {
    if (!bookModal.classList.contains('open')) {
        bookModal.classList.add('open');
        document.body.style.overflow = 'hidden'
    }
})

function createItem() {
    const bookItem = document.createElement('li');
    bookItem.classList.add('book__item');

    let text = document.querySelector('input[name="text"]').value;
    let subText = document.querySelector('input[name="subtext"]').value;

    bookItem.innerHTML = `
     <label class="book__item-label">
        <input class="book__item-checkbox" type="checkbox">
        <span class="book__item-text">
            ${text}
        </span>
        <span class="book__item-subtext">
            ${subText}
        </span>
        <span class="book__item-checkmark checkmark"></span>
    </label>`;
    bookList.append(bookItem)
    document.querySelector('input[name="text"]').value = '';
    document.querySelector('input[name="subtext"]').value = '';
}

bookModal.addEventListener('click', (e) => {
    if (e.target === bookModalOverlay) {
        bookModal.classList.remove('open');
        document.body.style.overflow = ''
    }
    if (e.target === bookModalButton) {
        createItem();
        bookModal.classList.remove('open');
        document.body.style.overflow = ''
    }
})






