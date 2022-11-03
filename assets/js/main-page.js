/* Culinary Delight - Main Page Events and Functions */
/* Dependencies:
    recipe-data.js
*/

document.addEventListener("DOMContentLoaded", function() {

    // Load the data for this week
    // In live use the week number should be calculated
    let weekNum = 1;
    displayMenuArticle(weekNum);
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