// Globals
const CDShared = {
    weekNum: 0,
    course: "",
    numSteps: 0,
    stepNum: 1
}

document.addEventListener("DOMContentLoaded", function () {
    // Read the URL (week number and course)
    readURL();
    console.log(CDShared);
});

/**
 * Read the variables from the url and pass to global object
 */
function readURL(){
    let qString = window.location.search;
    let urlParams = new URLSearchParams(qString);
    console.log(urlParams);
    CDShared.weekNum = urlParams.get("week_num");
    CDShared.course = urlParams.get("course");
}

