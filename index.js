let books;

const fetchBooks = () => {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((bookList) => renderBooks(bookList))
  .catch((err) => console.log(err));
  //  books = json.data
  //  renderBooks(books)
  }
  


fetchBooks()
//console.log(books)

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
