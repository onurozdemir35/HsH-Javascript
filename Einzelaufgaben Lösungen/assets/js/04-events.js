// log the value of the input on every input
const input = document.getElementById("input");

// input.addEventListener('change', function inputChange() {
input.addEventListener("input", function inputChange(event) {
	// console.log(event.target.value);
	console.log(input.value);
});

// prevent default on button #submit click
// and change text of #output to „Der Button wurde geklickt!“
// document.querySelector("#submit").addEventListener("click", function submit(event) {
// 	event.preventDefault();

// 	document.getElementById("output").textContent = "Der Button wurde geklickt!";
// });

// log the message „500px erreicht“, when the user scrolls more than 500px
window.addEventListener("scroll", function windowScroll(event) {
	if (window.scrollY >= 500) {
		console.log("500px erreicht");
	}
});

// add the value of the input to a bullet point list in the #output element
// every time the user clicks on the button #submit
// and empty the input value afterwards
// add a delete button to the bullet point list items
// so the user can delete every single list item
// BEWARE THE PREVENT DEFAULT ON THE BUTTON
const output = document.querySelector("#output");
const bulletPointList = document.createElement("ul");
output.appendChild(bulletPointList);

document.querySelector("#submit").addEventListener("click", function addListItem(event) {
	event.preventDefault();
	let bulletPointListItem = document.createElement("li");
	bulletPointListItem.textContent = input.value;
	bulletPointListItem.style.margin = "10px 0";

	let deleteButton = document.createElement("span");
	deleteButton.textContent = "Löschen";
	deleteButton.style.marginLeft = "10px";
	deleteButton.style.border = "1px solid red";
	deleteButton.style.padding = "5px";
	deleteButton.style.cursor = "pointer";
	deleteButton.style.fontSize = "0.75rem";

	deleteButton.addEventListener("click", function deleteBulletPointListItem(event) {
		event.preventDefault();
		deleteButton.parentElement.remove();
	});
	bulletPointListItem.appendChild(deleteButton);
	bulletPointList.appendChild(bulletPointListItem);
	input.value = "";
});
