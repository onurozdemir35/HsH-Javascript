// log text content from #headline
const headlineElement = document.getElementById("headline");
console.log(headlineElement);
// change the text from the headline to:    
headlineElement.textContent = "Das ist das neue Headline!!";
// set value of the input element #input to:
const inputElement = document.getElementById("input");
inputElement.value = "Neuer Wert";

// set the value of the input element #input
// as the innerHtml of the div #output
document.getElementById("output").innerHTML = inputElement.value ;
// create a new paragraph element with some text
// place it right after the button #submit
const paragraphElement =  document.createElement("p");
paragraphElement.innerText = "Das ist ein Absatz Element."

const submitButton = document.getElementById("submit");
submitButton.insertAdjacentElement("afterend", paragraphElement);

// add the class bg-black to the body
// if it doesn't got it already
const body = document.body;
if (body.classList.contains("bg-black") === false) {
    body.classList.add("bg-black")
}
// toggle the class border-red on the input
inputElement.classList.toggle("border-red");

// multiply the data-number attribute by 3
// and update the value in the dom
const outputElement = document.querySelector("#output");
let currentValue = parseFloat(outputElement.getAttribute("data-number"));
let newValue = currentValue * 3;
outputElement.setAttribute("data-number", newValue);


outputElement.innerText = newValue;

// remove the paragraph that you added before
paragraphElement.remove();
document.getElementById("output").innerHTML = inputElement.value ;