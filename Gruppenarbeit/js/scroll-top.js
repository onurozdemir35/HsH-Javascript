/**
 * SCROLL TO TOP BUTTON
 * 1. add the class "visible" to the element with the id "return-to-top", when the user scrolled at least the window height
 * 2. when the user clicks the button, scroll the page all the way up to the start
 * 
 */

//let height = window.innerHeight;  --> bu bir ekranin yuksekligini verir
const scrollTop = document.getElementById("return-to-top");

scrollTop.addEventListener("click", function() {
    window.scrollTo({top: 0 , behavior: "smooth"});
});

window.addEventListener("scroll", function() {

    // Sayfanın yüksekliği ve pencere yüksekliği farkını hesapla
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (window.scrollY >=scrollableHeight) {
        scrollTop.classList.add("visible");
    } else {
        scrollTop.classList.remove("visible");
    };
});