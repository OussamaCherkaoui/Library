const myLibrary={
    books: [],
    addBook: function (book) {
        this.books.push(book);
      },
};

Book.prototype.toggleReadStatus = function () {
    this.isread = !this.isread;
};


function Book(title,author,numberpages,read){
    this.title=title;
    this.author=author;
    this.numberpages=numberpages;
}

const bookForm = document.getElementById('bookForm');

function addBookToLibrary(){
    myLibrary.addBook(newBook);
}
    const table=document.getElementById('table-display');


bookForm.addEventListener('submit', function (e){
    e.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const nombrepages = document.getElementById('nbpage');

    const newBook = new Book(title.value, author.value, nombrepages.value);
    myLibrary.addBook(newBook);
    
    const row=document.createElement('tr');
    const rowData = [newBook.title, newBook.author, newBook.numberpages];
    rowData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data;
        row.appendChild(cell);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.style.cssText='cursor: pointer;color:black ;background-color: white;border-radius: 15px;border-style: none;padding:10px 8px';
    deleteButton.addEventListener('click', function () {
        row.remove();
    });
    const actionCell = document.createElement('td');
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Mark as unread';
    toggleButton.classList.add('toggle-button');
    toggleButton.style.cssText='cursor: pointer;color:white ;background-color: red;border-radius: 6px;border-style: none;padding:3px';
    toggleButton.addEventListener('click', function () {
        newBook.toggleReadStatus(); // Basculez l'état de lecture du livre
        // Mettez à jour le texte du bouton en fonction du nouvel état
        toggleButton.style.cssText='cursor: pointer;color:white ;background-color: green;border-radius: 6px;border-style: none;padding:3px';
        toggleButton.textContent = newBook.isRead ? 'Mark as unread' : 'Mark as read';
    });

    
    const validation = document.createElement('td');
    validation.appendChild(toggleButton);
    row.appendChild(validation);

    table.appendChild(row);
    
    bookForm.reset();
});


