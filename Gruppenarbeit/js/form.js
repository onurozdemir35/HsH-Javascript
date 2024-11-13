/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to the URL "https://try.blnq.dev/javascript-basics/form-fetch.php"
    * https://github.com/axios/axios
 * 
 */


document.querySelector("#support-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    let isValid = true;
    const messageBox = document.getElementById("form-message");

    console.log("Form validation started...");

    ["fullname", "number", "email", "message"].forEach((id) => {
        const input = document.getElementById(`input-${id}`);

        console.log(`Checking field: ${id}, value: ${input.value}`);

        if (!input.value.trim()) {
            input.classList.add("border-red-500");
            isValid = false;
        } else { 
            input.classList.remove("border-red-500");
        }
    });

    if(!document.getElementById("input-privacy").checked) {
        isValid = false;
        showMessage("Please accept the privacy policy", "error");
        return;
    };

    if(!isValid) return;

    const formData = new FormData(); 
    formData.append("fullname", document.getElementById("input-fullname").value);
    formData.append("number", document.getElementById("input-number").value);
    formData.append("email", document.getElementById("input-email").value);
    formData.append("message", document.getElementById("input-message").value);


    console.log("Sending form data:", formData);

    try {
        const response = await axios.post("https://try.blnq.dev/javascript-basics/form-fetch.php", formData, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        console.log("Response:", response);

        if (response.status === 200) {
            showMessage("Form was sent successfully!", "success");
        }
    } catch (error) {
        console.error("An error occurred", error);
        showMessage("Form was not sent successfully. Please try again.", "error");
    }
});

// Gösterilecek mesaj ve mesaj türünü belirten bir fonksiyon
function showMessage(message, type) {
    const messageBox = document.getElementById("form-message");
    messageBox.textContent = message;
    
    // Mesaj türüne göre stil ekle
    if (type === "success") {
        messageBox.classList.remove("hidden", "bg-red-500", "text-white");
        messageBox.classList.add("bg-green-500", "text-white");
    } else {
        messageBox.classList.remove("hidden", "bg-green-500", "text-white");
        messageBox.classList.add("bg-red-500", "text-white");
    }
    
    // Mesajı 5 saniye sonra otomatik olarak gizle
    setTimeout(() => {
        messageBox.classList.add("hidden");
    }, 10000);
}
