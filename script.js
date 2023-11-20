class Library {
    constructor() {
      this.books = [];
    }

    addBook(book) {
      this.books.push(book);
    }
}

class Book {
    constructor(title, author, numberPages) {
      this.title = title;
      this.author = author;
      this.numberPages = numberPages;
      this.isRead = false;
    }

    toggleReadStatus() {
      this.isRead = !this.isRead;
    }
}


const myLibrary = new Library();
const bookForm = document.getElementById('bookForm');
const table=document.getElementById('table-display');


bookForm.addEventListener('submit', function (e){
    
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const nombrepages = document.getElementById('nbpage').value;

    const newBook = new Book(title,author,nombrepages);
    myLibrary.addBook(newBook);
    
    const row=document.createElement('tr');
    const rowData = [newBook.title, newBook.author, newBook.numberPages];

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
    toggleButton.style.cssText='cursor: pointer;color:white ;background-color: red;border-radius: 6px;border-style: none;padding:3px;';
    toggleButton.addEventListener('click', function () {
        if(newBook.isRead===false)
        {
            newBook.toggleReadStatus(); // Basculez l'état de lecture du livre
            // Mettez à jour le texte du bouton en fonction du nouvel état
            toggleButton.style.cssText='cursor: pointer; color:white; background-color:green; border-radius:6px; border-style:none; padding:3px;';
            toggleButton.textContent = 'Mark as read';
        }
        else if(newBook.isRead===true)
        {
            newBook.toggleReadStatus();
            toggleButton.style.cssText='cursor: pointer;color:white ;background-color: red;border-radius: 6px;border-style: none;padding:3px;';
            toggleButton.textContent = 'Mark as unread';
        }
    });

    
    const validation = document.createElement('td');
    validation.appendChild(toggleButton);
    row.appendChild(validation);

    table.appendChild(row);
    
    bookForm.reset();
});


