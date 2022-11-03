/* Culinary Delight - Main Page Events and Functions */
/* Dependencies:
    recipe-data.js
*/

document.addEventListener("DOMContentLoaded", function() {

    // Load the data for this week
    // In live use the week number should be calculated
    let weekNum = 1;
    displayMenuArticle(weekNum);

    // User registration event (submit)
    document.getElementById("submit-registration").addEventListener("click", registrationSubmitted)
});

/**
 * Display the menu article for the given week number
 * @param {*} weekNum 
 */
function displayMenuArticle(weekNum) {
    let article = getMenuArticle(weekNum);
    // Display the article
    document.getElementById("menu-article").innerHTML = article;
    // Get the main course and dessert images
    let weekZeroPad = "0" + weekNum;
    if (weekZeroPad.length > 2) weekZeroPad = weekZeroPad.slice(weekZeroPad.length - 2);
    let mainImageName = `assets/images/recipe-${weekZeroPad}-main/summary-pic-512px.png`;
    document.getElementById("main-img").setAttribute("src", mainImageName);
    let dessertImageName = `assets/images/recipe-${weekZeroPad}-dessert/summary-pic-512px.png`;
    document.getElementById("dessert-img").setAttribute("src", dessertImageName);
}

/**
 * Get the recipe article for the given week number.
 * @param {*} weekNum 
 */
function getMenuArticle(weekNum) {
    let found = false;
    let menu;
    for (menu of weeklyRecipes) {
        if (menu.weekNumber === weekNum ) {
            found = true;
            break;
        }
    }
    if (!found) {
        alert(`Menu for week: ${weekNum} is missing`);
        return "";
    }
    return menu.article;
}

/**
 * When the registration form is submitted, check it and report status
 */
function registrationSubmitted(event) {
    // Suppress default actions
    event.preventDefault();

    // Check whether already submitted
    let submitStatus = document.getElementById("registration-status").textContent;
    if (submitStatus === "Registration Submitted") {
        alert("Registration already submitted");
        return;
    }
    // Check whether all input fields completed
    let inputElems = document.getElementsByTagName("input");
    let allDone = true;
    for (let inputElem of inputElems) {
        if (inputElem.value == "") {
            allDone = false;
            break;
        }
    }
    if (!allDone) {
        alert("You have not completed all fields in the form!");
        return;
    }

    // Set the completed status
    let status = document.getElementById("registration-status");
    status.style.display = "inline-block";
    status.innerText = "Registration Submitted";

    // For future use, restore the default call to the action (form.submit())

}