const bookList = document.querySelector('.book__list');
const addButton = document.querySelector('.book__button');
const bookModal = document.querySelector('.book__modal');
const bookModalOverlay = document.querySelector('.book__modal-overlay');
const bookModalButton = document.querySelector('.book__modal-button');
const bookModalForm = document.querySelector('.book__modal-form');
const bookDeleteButton = document.querySelectorAll('.book__item-del');


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
    if (text === '') {
        alert('Введите текст!');
        return;
    }
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
    </label>
    <button class="book__item-del">
    <img src="trash.svg" alt="trash">
    </button>`;

    bookList.prepend(bookItem)
    document.querySelector('input[name="text"]').value = '';
    document.querySelector('input[name="subtext"]').value = '';
}

bookModal.addEventListener('click', (e) => {
    if (e.target === bookModalOverlay) {
        bookModal.classList.remove('open');
        document.body.style.overflow = '';
    }
    if (e.target === bookModalButton) {
        createItem();
        bookModal.classList.remove('open');
        document.body.style.overflow = '';
        const bookDeleteButton = document.querySelectorAll('.book__item-del');
        bookDeleteButton.forEach(btn => {
            btn.addEventListener('click', function () {
                btn.parentElement.remove();
            })
        })
    }
})

bookDeleteButton.forEach(btn => {
    btn.addEventListener('click', function () {
        btn.parentElement.remove();
    })
})





