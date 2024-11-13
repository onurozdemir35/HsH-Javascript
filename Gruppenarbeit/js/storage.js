/**
 * SAVE LIKED PRODUCTS
 * Select all of the like buttons, listen to the click element on every "like-btn" and the save the key of the "like-btn" to the localStorage.
 * Add the class "liked" if the button was clicked.
 * Check on reload if data is stored and add the liked class again
 * 
 * https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * https://developer.mozilla.org/de/docs/Web/API/Window/localStorage
 * 
 */

document.querySelectorAll(".like-btn").forEach((likeBtn, index) => {
    const likeKey = `like_${index}`;
    const liked = localStorage.getItem(likeKey) === "true";
    if (liked) {
        likeBtn.classList.add("liked");
    }

    likeBtn.addEventListener("click", function(event) {
        event.preventDefault();
        const isLiked = likeBtn.classList.toggle("liked");
        localStorage.setItem(likeKey, isLiked);
    })
})
   

