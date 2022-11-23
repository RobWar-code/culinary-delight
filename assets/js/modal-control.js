/*
    Functions for activating and closing the modal pop-up
*/

/**
 * Display a message in the modal pop-up
 * @param {string} message 
 */
 function modalMessage (message) {
    // Open the modal element
    modalElem = document.getElementById("modal-item");
    modalElem.classList.add("open");
    // Insert the message
    messageElem = document.getElementById("modal-message");
    messageElem.innerText = message;
}

/**
 * Close the modal pop-up element
 */
function closeModal () {
    modalElem = document.getElementById("modal-item");
    modalElem.classList.remove("open");
}