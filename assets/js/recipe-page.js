// Globals
const CDShared = {
    weekNum: 0,
    course: "",
    numSteps: 0,
    stepNum: 1
}

document.addEventListener("DOMContentLoaded", function () {
    // Load and display recipe data
    loadRecipe();
});

/**
 * Load an apply the recipe data for this page
 */
function loadRecipe() {
    // Read the URL (week number and course)
    readURL();
    // Set the menu underline for the current page
    setMenuHighlight();
    // Set the main title
    let titleElem = document.getElementById("course-title");
    let course = "DESSERT";
    if (CDShared.course === "main") course = "MAIN COURSE";
    titleElem.innerHTML = course + " - WEEK " + CDShared.weekNum;
    // Set the recipe title
    let recipeTitleElem = document.getElementById("recipe-title");
    let recipeTitle = getRecipeTitle();
    recipeTitleElem.innerHTML = recipeTitle;
    // Set the recipe description
    let descriptionElem = document.getElementById("description");
    let description = getRecipeDescription(CDShared.weekNum, CDShared.course);
    descriptionElem.innerHTML = description;
    // Set the credits
    let creditsElem = document.getElementById("credits");
    let credits = getRecipeCredits(CDShared.weekNum, CDShared.course);
    creditsElem.innerHTML = credits;

    // Recipe Details Section
    // Set the ingredients picture
    ingredientsImgElem = document.getElementById("ingredients-img");
    // Derive the image file path
    weekString = "0" + CDShared.weekNum;
    if (weekString.length > 2) {
        weekString = weekString.splice(weekString.length - 2);
    }
    let filePath = "assets/images/recipe-" + weekString + "-" + CDShared.course + "/ingredients-512px.png";
    ingredientsImgElem.setAttribute("src", filePath);
    // Set the ingredients list
    setIngredientsList(CDShared.weekNum, CDShared.course);

}
/**
 * Read the variables from the url and pass to global object
 */
function readURL(){
    let qString = window.location.search;
    let urlParams = new URLSearchParams(qString);
    CDShared.weekNum = urlParams.get("week_num");
    CDShared.course = urlParams.get("course");
}

/**
 * Set the highlight for the menu item for the current page
 */
function setMenuHighlight() {
    let menuItems = document.getElementsByClassName("menu-item");
    for (let menuItem of menuItems) {
        if (menuItem.innerText === "Main Course" && CDShared.course === "main") {
            menuItem.style.textDecoration = "underline";
            break;
        }
        else if (menuItem.innerText === "Dessert" && CDShared.course === "dessert") {
            menuItem.style.textDecoration = "underline";
            break;            
        }
    }
}

/**
 * Set the ingredients list in the display
 * @param {*} weekNum 
 * @param {*} course 
 */
function setIngredientsList(weekNum, course) {
    let ingredientsList = getIngredients(weekNum, course);
    let listElem = document.getElementById("ingredients-list");
    let listHTML = "";
    for (let ingredient of ingredientsList) {
        listHTML += `<li>${ingredient}</li>`;
    }
    listElem.innerHTML = listHTML;
}

/**
 * Get list of ingredients from the recipe
 */
function getIngredients(weekNum, course) {
    let recipe = findRecipe(weekNum, course);
    return recipe.ingredients;
}
/**
 * Get the title of the page recipe
 * @returns 
 */
function getRecipeTitle() {
    let weekMenu = weeklyRecipes[CDShared.weekNum - 1];
    // Scan list of recipes for course
    for (let course of weekMenu.courses) {
        if (course.course === CDShared.course) {
            return course.title;
        }
    }
    alert("getRecipeTitle - course not found")
    return "";
}

/**
 * Get the description of the page recipe for the given week and course
 */
function getRecipeDescription(weekNum, course) {
    // Find the recipe for the page
    recipe = findRecipe(weekNum, course);
    return recipe.description;
}

/**
 * Get the credits for the recipe defined by the weekNum and course
 * @param {} weekNum 
 * @param {*} course 
 * @returns 
 */
function getRecipeCredits(weekNum, course) {
    // Find the recipe for the page
    recipe = findRecipe(weekNum, course);
    return recipe.credits;
}

/**
 * Find the recipe entry for the given course and week number
 * @param {*} weekNum 
 * @param {*} course 
 * @returns 
 */
function findRecipe(weekNum, course) {
    // Get the week menu
    let weekMenu = weeklyRecipes[weekNum - 1];
    // Scan list of recipes for course
    let title = "";
    for (let courseItem of weekMenu.courses) {
        if (courseItem.course === course) {
            title = courseItem.title;
            break;
        }
    }
    if (!title) {
        alert("findRecipe - no recipe title found");
        return null;
    }
    // Find the recipe for the course
    for (let recipe of recipes) {
        if (recipe.title === title) {
            return recipe;
        }
    }
    alert("findRecipe -recipe not found matching: " + title);
}