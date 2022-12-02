![Culinary Delight Logo](/assets/images/logo.png "Culinary Delight Logo")
# Wonderful Weekly Dishes

## Introduction
The Culinary Delight Wonderful Weekly Dishes site provides weekly recipes
for anyone interested in preparing a tasty meal on an occasional or weekly
basis. All the meals presented are for three or four people and are chosen
for the simple home budget.

Note that currently only one meal is included for demonstration purposes.

![amiresponsive Media Size Overview](/doc/readme-images/cd-amiresponsive.png "amiresponsive Media Size Overview")

## Site Features
The main page provides an overview of the site and an introduction to the
dishes of the week, along with a registration form, for email updates, a
pad for reader comments, contact details and copyright credits.

The recipe page provides the user with an introduction to the dish, credits and 
an easy to use step-through using button or slider for images and text 
for each stage of the meal preparation and a list of ingredients and the utensils
required for the preparation. The dessert and main course are accessible
via the menu bar at the top of each page. In addition, the complete recipe
can be printed using the Print button on the recipe pages.

Images of the completed dishes are also provided, to whet the apetite of the
reader and to provide a view of the aim of the procedures.

### Main Page - Registration Form
![Main Page Registration Form](/doc/readme-images/registration-form-crop.png "Main Page Registration Form")

### Main Page - Comments Field
![Main Page Comments Field](/doc/readme-images/comments-field-crop.png "Main Page Comments Field")

### Recipe Page - Recipe Step Controls
![Recipe Page Step Controls Panel](/doc/readme-images/recipe-step-controls-crop.png "Recipe Page Step Controls Panel")

### Accessibility Features
All fonts are in reasonable contrast to backgrounds and are of an 
easy-read style and size. The font is google Amec, which is slightly
"arty" as well as easily readable.

Images are provided with title and alt attributes describing the pictures.

Links are given a white background on hover and other action points a
yellow background.

### Branding
Strong site branding is provided by the use of a definitive logo, site
colours, consistent font and site introduction.

## Technical Notes
The information for the recipes is maintained in assets/js/recipe-data.js:

[assets/js/recipe-data.js](/assets/js/recipe-data.js)

You can use the template doc/recipe-data-template.txt:

[doc/recipe-data-template.txt](/doc/recipe-data-template.txt)

which is used to build the recipe pages using the module 
assets/js/recipe-page.js.

[assets/js/recipe-page.js](/assets/js/recipe-page.js)

## Development Information
Project notes are contained in the doc directory, these include the
project analysis, skeleton designs, work flow notes etc.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
1. In the [GitHub repository](https://github.com/RobWar-code/culinary-delight), navigate to the Settings tab 
2. From the source section drop-down menu, select the **Main** Branch, then click "Save".
3. The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://robwar-code.github.io/culinary-delight)

### Local Deployment

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/RobWar-code/culinary-delight) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/RobWar-code/culinary-delight.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/RobWar-code/culinary-delight)

### Live Deployment
Recipes can be added to the recipe data in recipe-data.js.

Recipe step images should be 512px and should be placed in the directories
assets/images/recipe-NN-main and assets/images/recipe-NN-dessert, where NN
is the week number.

The summary picture for each recipe should be placed in the respective
directory and 512px and 1200px versions should be supplied.

The week number references can be updated in index.html

### Further Developments for Live Site
It is suggested that the recipe data could be moved to the server and
the pages built by php or python, rather than on the client, this would
allow for a larger range of recipes.

An "Other Weeks" menu option could be included, with a drop-down selector.

## Tools and Technologies
HTML - page content and context

[HTML Reference](https://en.wikipedia.org/wiki/HTML)

CSS - Content syling

[CSS Reference](https://en.wikipedia.org/wiki/CSS)

Javascript - Event control and page preparation

[Javascript Reference](https://en.wikipedia.org/wiki/JavaScript)

Gitpod Editor/Development Environment used as the cloud based IDE

[GitPod Environment](https://gitpod.io)

Gitpod Version Control (git)

[Git](https://git-scm.com)

GitHub - used as the repository for the project files

[GitHub](https://github.com)

GitHub Pages - used as the deployment platform for the site

[GitHub Pages](https://pages.github.com)

gimp - graphics application, used to edit, crop, scale and convert file formats

[gimp](https://www.gimp.org)

## Site Images
These are all taken at display width 1200px or near.
### Main Page
#### Media Size Overview
![amiresponsive Media Size Overview](/doc/readme-images/cd-amiresponsive.png "amiresponsive Media Size Overview")

#### Top
![Top of Main Page](/doc/readme-images/main-page-top-1200px.png "Top of Main Page")
#### Middle
![Middle of Main Page](/doc/readme-images/main-page-middle-1200px.png "Middle of Main Page")
#### Bottom
![Bottom of Main Page](/doc/readme-images/main-page-bottom-1200px.png "Bottom of Main Page")
### Recipe Main Course
#### Top
![Top of Recipe Main Course Page](/doc/readme-images/recipe-main-top-1200px.png "Top of Recipe Main Course Page")
#### Bottom
![Bottom of Recipe Main Course Page](/doc/readme-images/recipe-main-bottom-1200px.png "Bottom of Recipe Main Course Page")
### Recipe Dessert
#### Top
![Top of Recipe Dessert Page](/doc/readme-images/recipe-dessert-top-1200px.png "Top of Recipe Dessert Page")
#### Bottom
![Bottom of Recipe Dessert Page](/doc/readme-images/recipe-dessert-bottom-1200px.png "Bottom of Recipe Dessert Page")

## Systems Testing

Click Here to see [Systems Testing File](/SYSTEMS-TESTS.md)

## Credits
Sprig of parsley in logo - Wikimedia Commons

[Wikimedia commons - sprig of parsley](https://commons.wikimedia.org/wiki/File:Parsley_(49652566678).png)

Apple Tarte Tatin recipe - CLASSIC Mary Berry (BBC Books)

[CLASSIC Mary Berry Book](https://www.amazon.co.uk/Classic-Delicious-no-fuss-recipes-Marys/dp/1785943243/ref=sr_1_1?adgrpid=1181975898185769&hvadid=73873694057538&hvbmt=be&hvdev=c&hvlocphy=69213&hvnetw=o&hvqmt=e&hvtargid=kwd-73873627802310%3Aloc-188&hydadcr=12334_1886090&keywords=classic+mary+berry+cookbook&qid=1670001195&sr=8-1)

All images - work of the Author, Robin Warner

