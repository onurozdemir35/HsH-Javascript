// listen to the submit of the form and prevent default
// then save the form data and send it to https://try.blnq.dev/javascript-basics/form-fetch.php
// log the response
document.getElementById("fetch-form").addEventListener("submit", function submitForm(event) {
	event.preventDefault();

	const formData = new FormData(this);
	//   this === document.getElementById('fetch-form') === form

	fetch("https://try.blnq.dev/javascript-basics/form-fetch.php", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: formData,
	})
		.then((response) => response.text())
		.then((data) => console.log(data))
		.catch((error) => {
			console.error("Error:", error);
		});

	// const request = new XMLHttpRequest();

	// request.open("POST", "https://try.blnq.dev/javascript-basics/form-fetch.php");

	// request.onreadystatechange = function () {
	// 	if (request.readyState == XMLHttpRequest.DONE) {
	// 		console.log(request);
	// 	}
	// };

	// request.send(formData);
});

// get data from public api https://openlibrary.org/books/OL7353617M.json
// and display the title, first sentence & isbn 13 in the #output element
// const request = new XMLHttpRequest();
// request.open("GET", "https://openlibrary.org/books/OL7353617M.json");
// request.onreadystatechange = function () {
// 	if (request.readyState == XMLHttpRequest.DONE) {
// 		const book = JSON.parse(request.responseText);
// 		const output = document.querySelector("#output");

// 		// console.log(book);

// 		output.innerHTML = `
//       <h2>${book.title}</h2>
//       <p>${book.first_sentence.value}</p>
//       <p>${book.isbn_13}</p>`;
// 	}
// };
// request.send();

fetch("https://openlibrary.org/books/OL7353617M.json", {
	method: "GET",
})
	.then((response) => response.text())
	.then((data) => {
		const book = JSON.parse(data);
		const output = document.querySelector("#output");

		// console.log(book);

		output.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.first_sentence.value}</p>
      <p>${book.isbn_13}</p>`;
	})
	.catch((error) => {
		console.error("Error:", error);
	});
