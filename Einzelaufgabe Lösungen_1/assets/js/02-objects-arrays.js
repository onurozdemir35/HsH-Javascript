/**
 * OBJECTS
 */
let books = {
	book1: "1984",
	book2: "Faust",
	book3: "Fantastic Mr. Fox",
};

console.log(books);
// add a new book to the books object
// using dot notation
// using square bracket notation
books.book4 = "Harry Poter";
console.log(books);
// remove an book from the books object
delete books.book2;
console.log(books);
// log the third book
const third = Object.values(books)[2];
console.log(third);
// iterate over the books and log every single one
for(const key in books) {
	if (books.hasOwnProperty(key)) {
		console.log(key + ":" + books[key]);
	}
}
/**
 * ARRAYS
 */
let movies = ["Pulp Fiction", "Inception", "Call me by your name", "Batman"];

// add a new movie to the array
movies[4] = "Rocky";
console.log(movies);
const newElement = document.createElement("p");
newElement.innerHTML = movies.join(", ");
document.body.appendChild(newElement);

// remove the movie „Call me by your name“ from the movies object
delete movies[2];
newElement.innerHTML = movies;
document.body.appendChild(newElement);

// log the first movie
console.log(movies[0]);

// iterate over the movies and log every single one
for  (let index in movies) {
	console.log(movies[index]);
};