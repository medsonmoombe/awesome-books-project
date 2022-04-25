// getting html elements
const bookList = document.querySelector('.book-list');
const removeBtn =document.querySelector('.remove-btn');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const addBtn = document.querySelector('.add-btn');

let books = [];
books = JSON.parse(localStorage.getItem('Awesome books')) !== null ? (books = JSON.parse(localStorage.getItem('books'))) : [];

let listBooks;
const getLocalData = () => {
    listBooks = JSON.parse(localStorage.getItem('books'));
};

// show books function

const showListBooks = () => {
    bookList.innerHTML = '';
    getLocalData();
    listBooks.forEach((element) => {
      const listTag = `
              <p>${element.title}</p>
              <p>${element.author}</p>
              <button type="button" class="remove" id="${element.id}">Remove</button>
              <hr>
          `;
          bookList.innerHTML += listTag;
    });
  };

//   Addding books

const addBook = () => {
    books = JSON.parse(localStorage.getItem('books')) !== null ? (books = JSON.parse(localStorage.getItem('books'))) : [];
    const book = {
      id: 0,
      title: '',
      author: '',
    };

   
  
         book.title = title.value;
    book.author = author.value;
    book.id = books.length + 1;
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    title.value = '';
    author.value = '';

    
    showListBooks();
}

addBtn.addEventListener('click', addBook);

// Add addEventListener to the displaylist container

bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
      const id = e.target.attributes.id.value;
      const filteredBooks = listBooks.filter((book) => book.id !== +id);
      localStorage.setItem(
        'books',
        JSON.stringify(filteredBooks),
      );
      showListBooks();
    }
  });
  document.addEventListener('DOMContentLoaded', showListBooks);