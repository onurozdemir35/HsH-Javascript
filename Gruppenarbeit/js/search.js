/**
 * CSS-ANIMATIONS
 * 1. Toggle the class "hidden" from the searchbar element, when the user clicks search button
 * 2. Clear the input by clicking the "x" button
 * 
 */

document.querySelector(".search-btn").addEventListener("click", function (event) {
    
    event.preventDefault();
    const searchBar = document.querySelector("input[name='search']");
    const clearBtn = searchBar.parentElement.querySelector("button[type='submit']");
    
    searchBar.classList.toggle("hidden");
    clearBtn.classList.toggle("hidden");
});

const searchBar = document.querySelector("input[name='search']");
const clearBtn = searchBar.parentElement.querySelector("button[type='submit']");

clearBtn.addEventListener("click", function (event) {
    event.preventDefault();
    
    searchBar.value = "";
    
    //searchBar.classList.add("hidden");
    //clearBtn.classList.add("hidden");
});