/* jshint esversion: 11 */
/*
    Culinary Delight - Recipe Page Loader and Event Handler
    Dependencies:
        recipe-data.js
*/
// Globals
const CDShared = {
    weekNum: 0,
    course: "",
    numSteps: 0,
    stepNum: 1
};

/*
 * Set-up events
 */
document.addEventListener("DOMContentLoaded", function () {
    // Load and display recipe data
    loadRecipe();

    // Modal pop-up close button
    document.getElementById("modal-close").addEventListener("click", closeModal);

    // User Events
    // Next Recipe Step button
    let nextElem = document.getElementById("next-step-btn");
    nextElem.addEventListener("click", displayNextRecipeStep);

    // Previous Recipe Step button
    let prevElem = document.getElementById("prev-step-btn");
    prevElem.addEventListener("click", displayPreviousRecipeStep);

    // Previous Recipe Step button
    let sliderElem = document.getElementById("slider");
    sliderElem.addEventListener("input", displaySliderRecipeStep);

    // Print Recipe Button
    let PrintElem = document.getElementById("print-btn");
    PrintElem.addEventListener("click", printRecipe);
    
});

/**
 * Load and apply the recipe data for this page
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
    let ingredientsImgElem = document.getElementById("ingredients-img");
    // Derive the image file path
    let filePath = getRecipeImageFilePath(CDShared.weekNum, CDShared.course);
    filePath += "ingredients-512px.png";
    ingredientsImgElem.setAttribute("src", filePath);
    // Set the ingredients list
    setIngredientsList(CDShared.weekNum, CDShared.course);
    // Set the utensils list
    let gotUtensils = setUtensilsList(CDShared.weekNum, CDShared.course);
    if (!gotUtensils) {
        let utensilsHeadElem = document.getElementById("utensils-head");
        utensilsHeadElem.style.display = "none";
    }

    // Set the recipe first picture
    let recipeStepImgElem = document.getElementById("recipe-step-img");
    filePath = getRecipeImageFilePath(CDShared.weekNum, CDShared.course);
    filePath += "step-01-512px.png";
    recipeStepImgElem.setAttribute("src", filePath);

    // Set the first recipe step text
    setRecipeStepText(CDShared.weekNum, CDShared.course, 1);

    // Set the final picture
    let finalImgElem = document.getElementById("final-img");
    let weekString = "0" + CDShared.weekNum;
    if (weekString.length > 2) {
        weekString = weekString.slice(weekString.length - 2);
    }
    filePath = "assets/images/recipe-" + weekString + "-" + CDShared.course + "/summary-pic-512px.png";
    finalImgElem.setAttribute("src", filePath);

    // Set the slider range
    CDShared.numSteps = getNumRecipeSteps(CDShared.weekNum, CDShared.course);
    let sliderElem = document.getElementById("slider");
    sliderElem.value = 1;
    sliderElem.setAttribute("min", 1);
    sliderElem.setAttribute("max", CDShared.numSteps);
    document.getElementById("numSteps-span").innerText = CDShared.numSteps;
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
 * Get the path for the recipe images
 * @param {integer} weekNum 
 * @param {string} course 
 * @returns 
 */
function getRecipeImageFilePath(weekNum, course) {
    let weekString = "0" + weekNum;
    if (weekString.length > 2) {
        weekString = weekString.slice(weekString.length - 2);
    }
    let filePath = "assets/images/recipe-" + weekString + "-" + course + "/";
    return filePath;
}

/**
 * Derive the recipe image file name from the step number
 * @param {integer} stepNum 
 */
function getRecipeImageFileName(stepNum) {
    let stepString = "0" + stepNum;
    if (stepString.length > 2) {
        stepString = stepString.slice(stepString.length - 2);
    }
    let fileName = "step-" + stepString + "-512px.png";
    return fileName;
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
 * Display the given recipe step text
 * @param {integer} weekNum
 * @param {string} course
 * @param {integer} stepNum 
 */
function setRecipeStepText(weekNum, course, stepNum) {
    let recipe = findRecipe(weekNum, course);
    let stepArray = recipe.steps[stepNum - 1];
    let recipeStepElem = document.getElementById("recipe-step-div");
    let paras="";
    let count = 0;
    for (let para of stepArray) {
        if (count === 0) para = stepNum + ". " + para;
        paras += `<p class="recipe-step-text">${para}</p>`;
        ++count;
    }
    recipeStepElem.innerHTML = paras;
}

/**
 * Set the ingredients list in the display
 * @param {integer} weekNum 
 * @param {string} course 
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
 * Get and display the list of utensils
 * @param {integer} weekNum 
 * @param {string} course 
 */
function setUtensilsList(weekNum, course) {
    let utensilsList = getUtensils(weekNum, course);
    if (!utensilsList) {
        return false;
    }
    let listElem = document.getElementById("utensils-list");
    let listHTML = "";
    for (let utensil of utensilsList) {
        listHTML += `<li>${utensil}</li>`;
    }
    listElem.innerHTML = listHTML;
    return true;
}

/**
 * Get the list of utensils from the recipe
 * @param {integer} weekNum 
 * @param {string} course 
 * @returns array of string
 */
function getUtensils(weekNum, course) {
    let recipe = findRecipe(weekNum, course);
    return recipe.utensils;
}

/**
 * Get the title of the page recipe
 * @returns string 
 */
function getRecipeTitle() {
    let weekMenu = weeklyRecipes[CDShared.weekNum - 1];
    // Scan list of recipes for course
    for (let course of weekMenu.courses) {
        if (course.course === CDShared.course) {
            return course.title;
        }
    }
    alert("getRecipeTitle - course not found");
    return "";
}

/**
 * Get the description of the page recipe for the given week and course
 */
function getRecipeDescription(weekNum, course) {
    // Find the recipe for the page
    let recipe = findRecipe(weekNum, course);
    return recipe.description;
}

/**
 * Get the credits for the recipe defined by the weekNum and course
 * @param {integer} weekNum 
 * @param {string} course 
 * @returns 
 */
function getRecipeCredits(weekNum, course) {
    // Find the recipe for the page
    let recipe = findRecipe(weekNum, course);
    return recipe.credits;
}

/**
 * Find the recipe entry for the given course and week number
 * @param {integer} weekNum 
 * @param {string} course 
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

/**
 * Get the number of recipe steps for given week and course
 * @param {integer} weekNum 
 * @param {string} course 
 * @returns 
 */
function getNumRecipeSteps(weekNum, course) {
    let recipe = findRecipe(weekNum, course);
    return recipe.steps.length;
}

/**
 * Display the next recipe step when the next button is clicked
 * @param {object} event 
 * @returns 
 */
function displayNextRecipeStep(event) {
    // Check whether already at last step
    if (CDShared.stepNum >= CDShared.numSteps) {
        modalMessage("You are on the final step already!");
        return;
    }
    ++CDShared.stepNum;
    displayRecipeStep(CDShared.weekNum, CDShared.course, CDShared.stepNum);
}

/**
 * Display the previous recipe step when the previous button is clicked
 * @param {object} event 
 * @returns 
 */
function displayPreviousRecipeStep(event) {
    // Check whether already at last step
    if (CDShared.stepNum <= 1) {
        modalMessage("You are on the first step already!");
        return;
    }
    --CDShared.stepNum;
    displayRecipeStep(CDShared.weekNum, CDShared.course, CDShared.stepNum);
}

/**
 * Update the recipe display based on the slider position
 * @param {object} event 
 * @returns 
 */
function displaySliderRecipeStep(event) {
    // Get the slider value
    let stepNum = this.value;
    // Check whether this is already on display
    if (stepNum === CDShared.stepNum) {
        // A user message here would be annoying
        return;
    }
    CDShared.stepNum = stepNum;
    // Update the display
    displayRecipeStep(CDShared.weekNum, CDShared.course, CDShared.stepNum);
}

/**
 * Display the recipe step for the week, course abd step number.
 * @param {integer} weekNum 
 * @param {string} course 
 * @param {integer} stepNum 
 */
function displayRecipeStep(weekNum, course, stepNum) {
   // Display the image
   let filePath = getRecipeImageFilePath(weekNum, course);
   filePath += getRecipeImageFileName(stepNum);
   document.getElementById("recipe-step-img").setAttribute("src", filePath);
   // Display the step text
   // Remove existing text
   removeRecipeStepText();
   setRecipeStepText(weekNum, course, stepNum);
   // Update the slider
   document.getElementById("slider").value = stepNum;
}

/**
 * Remove all of the recipe step text
 */
function removeRecipeStepText() {
    let recipeParas = document.getElementsByClassName("recipe-step-text");
    for (let para of recipeParas) {
        para.remove();
    }
}

/**
 * Open a pop-up window to receive recipe data and to be printed by the user
 */
function printRecipe() {
    // Prepare the window
    let win = window.open("", "", "width=350px, height=450px");
    // Prepare HTML
    let recipeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
    `;
    // Add the title 
    let title = getRecipeTitle();
    recipeHTML += `
        <h2>${title}</h2>
    `;
    // Add in ingredients
    let ingredients = getIngredients(CDShared.weekNum, CDShared.course);
    recipeHTML += `
        <h2>Ingredients</h2>
    `;
    for (let ingredient of ingredients) {
        recipeHTML += `
            <p>${ingredient}</p>
        `;
    }
    // Add utensils
    let utensils = getUtensils(CDShared.weekNum, CDShared.course);
    if (utensils) {
        recipeHTML += `
            <h2>Utensils</h2>
        `;
        for (let utensil of utensils) {
            recipeHTML += `
                <p>${utensil}</p>
            `;
        }
    }
    // Add recipe steps
    let recipeData = findRecipe(CDShared.weekNum, CDShared.course);
    let recipeSteps = recipeData.steps;
    recipeHTML += `
        <h2>Recipe Steps</h2>
    `;
    let count = 1;
    for (let recipeStep of recipeSteps) {
        recipeHTML += `
            <p>${count}. ${recipeStep[0]}</p>
        `;
        if (recipeStep.length > 1) {
            for (let i = 1; i < recipeStep.length; i++) {
                recipeHTML += `
                    <p>${recipeStep[i]}</p>
                `; 
            }
        }
        ++count;
    }

    // Finalise HTML
    recipeHTML += `
        </body>
        </html>
    `;
    win.document.write(recipeHTML);
    win.focus();
}