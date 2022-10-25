let myLibrary = [];



/* CONSTRUCTOR */
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author ? author : 'hi';
    this.pages = pages ? pages : 'hi';
    this.read = read ? 'read yet' : 'not read yet';
    this.index = 0;
}



/* CREATE A NEW CARD FUNCTION */
function createCard(book) {
    const cardContent = document.createElement("div");
    cardContent.className = 'book-card';

    for(const prop in book) {
        const info = document.createElement('p');
        const property = document.createTextNode(book[prop]);
        info.appendChild(property);
        cardContent.appendChild(info);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.className = 'deleteBtnCard';
    deleteBtn.setAttribute('onclick',`deleteCard(${book.index})`);
    cardContent.appendChild(deleteBtn);
    document.getElementById('library-grid').appendChild(cardContent);
}



/* ADD CARD TO LIBRARY */
function addBookToLibrary(library, title, author, pages, read) {
    library.push(new Book(title, author, pages, read));
}



/* SHOW BOOKS ON THE PAGE */
function showBooks(library) {
    document.getElementById('library-grid').textContent = '';
    for(let i = 0; i < library.length; i++) {
        library[i].index = i;
        createCard(library[i]);
    }
}



/* REMOVE A CARD */
function deleteCard(index) {
    myLibrary.splice(index, 1);
    showBooks(myLibrary);
}

/* BUTTONS EVENTS */
const newBookBtn = document.getElementById('newBook-btn');
newBookBtn.addEventListener('click', () => {
    document.getElementById("background-blur").removeAttribute('hidden');
});


const confirmBookBtn = document.getElementById('confirmBook-btn');
confirmBookBtn.addEventListener('click', () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    if (!(title.value == '')) {
        addBookToLibrary(myLibrary, title.value, author.value, pages.value, true);
    }
    title.value = '';
    author.value = '';
    pages.value = '';
    showBooks(myLibrary);
})

const closeBtn = document.getElementById('close-btn');
closeBtn.addEventListener('click', () => {
    document.getElementById("background-blur").setAttribute('hidden','');
})



addBookToLibrary(myLibrary, 'The Five Dysfunctions of a Team: Team Assessment', 'Patrick M. Lencioni', 8, false);
addBookToLibrary(myLibrary, 'The Education of the Will, the Theory and Practice of Self-Culture', 'Jules Payot Litt', 450, true);
showBooks(myLibrary);