/* jshint esversion: es11 */
/*
    Functions for activating and closing the modal pop-up
*/

/**
 * Display a message in the modal pop-up
 * @param {string} message 
 */
 function modalMessage (message) {
    // Open the modal element
    let modalElem = document.getElementById("modal-item");
    modalElem.classList.add("open");
    // Insert the message
    let messageElem = document.getElementById("modal-message");
    messageElem.innerText = message;
    // Set the focus on the close button
    document.getElementById("modal-close").focus();
}

/**
 * Close the modal pop-up element
 */
function closeModal () {
    let modalElem = document.getElementById("modal-item");
    modalElem.classList.remove("open");
}