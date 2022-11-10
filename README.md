![Culinary Delight Logo](/assets/images/logo.png "Culinary Delight Logo")
# Wonderful Weekly Dishes
## Contents
<ul style="list-style: none">
    <li>Introduction</li>
    <li>Site Features
        <ul>
        <li>Accessibility Features</li>
        <li>Branding</li>
        </ul>
    </li>
    <li>Technical Notes</li>
    <li>Development Information</li>
    <li>Site Images
        <ul>
        <li>Main Page
            <ul>
            <li>Top</li>
            <li>Middle</li>
            <li>Bottom</li>
            </ul>
        </li>
        <li>Recipe Main Course
            <ul>
            <li>Top</li>
            <li>Bottom</li>
            </ul>
        </li>
        <li>Recipe Dessert
            <ul>
            <li>Top</li>
            <li>Bottom</li>
            </ul>
        </li>
    </ul>
    </li>
    <li>Systems Testing
        <ul>
        <li>User Actions and Validation
            <ul>
            <li>Main Page - Registration Form</li>
            <li>Main Page - Comments</li>
            <li>Recipe Page - Recipe Step Controls</li>
            <li>Recipe Page - Recipe Print Button</li>
            </ul>
        </li>
        <li>Action Point and Link Accessibility Highlighting
            <ul>
            <li>Menu</li>
            <li>Footer</li>
            <li>Main Page</li>
            <li>Recipe Page</li>
            </ul>
        </li>
        <li>Media Adjustments
            <ul>
            <li>Main Page</li>
            <li>Recipe Page</li>
            </ul>
        </li>
        <li>Browser Tests</li>
        <li>Link Integrity Checks</li>
        </ul>
    </li>
</ul>
<br>
&emsp;Media Adjustments<br>
&emsp;&emsp;Main Page<br>
&emsp;&emsp;Recipe Page<br>
&emsp;Browser Tests<br>

## Introduction
The Culinary Delight Wonderful Weekly Dishes site provides weekly recipes
for anyone interested in preparing a tasty meal on an occasional or weekly
basis. All the meals presented are for three or four people and are chosen
for the simple home budget.

Note that currently only one meal is included for demonstration purposes.

## Site Features
The main page provides an overview of the site and an introduction to the
dishes of the week, along with registration form, for email updates, a
pad for reader comments, contact details and copyright credits.

The recipe page provides the user with an introduction to the dish, credits and 
an easy to use step-through images and text for each stage of the meal 
preparation and a list of ingredients and the utensils
required for the preparation. The dessert and main course are accessible
via the menu bar at the top of each page. In addition, the complete recipe
can be printed using the Print Recipe button on the recipe pages.

Images of the completed dishes are also provided, to whet the apetite of the
reader and to provide a view of the aim of the procedures.

### Accessibility Features
All fonts are in reasonable contrast to backgrounds and are of an 
easy-read style and size.

Images are provided with title and alt attributes describing the pictures.

Links are given a white background on hover and other action points a
yellow background.

### Branding
Strong site branding is provided by the use of a definitive logo, site
colours, consistent font and site introduction.

## Technical Notes
The information for the recipes is maintained in assets/js/recipe-data.js,
which is used to build the recipe pages using the module 
assets/js/recipe-page.js.

## Development Information
Project notes are contained in the doc directory, these include the
project analysis, skeleton designs, work flow notes etc.

## Site Images
These are all taken at display width 1200px or near.
### Main Page
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
### User Actions and Validation
#### Main Page - Registration Form
First Name Blank<br>
![Registration First Name Blank](/doc/readme-images/registration-first-name-blank-crop.png "Registration First Name Blank")

Last Name Blank<br>
![Registration Last Name Blank](/doc/readme-images/registration-last-name-blank-crop.png "Registration Last Name Blank")

Email Blank<br>
![Registration email Blank](/doc/readme-images/registration-email-blank-crop.png "Registration email Blank")

Email Invalid<br>
This was originally omitted. Added the regular expression test in main-page.js

![Registration email Invalid](/doc/readme-images/registration-email-invalid-crop.png "Registration email Invalid")

Password Blank<br>
![Registration Password Blank](/doc/readme-images/registration-password-blank-crop.png "Registration Password Blank")

Registration Submitted<br>
![Registration Submitted](/doc/readme-images/registration-submitted-crop.png "Registration Submitted")

Registration Already Submitted<br>
![Registration Already Submitted](/doc/readme-images/registration-already-submitted-crop.png "Registration Already Submitted")

#### Main Page - Comments Area
Comments Left Blank<br>
![Comments Blank](/doc/readme-images/comments-blank-crop.png "Comments Blank")

Comments Submitted<br>
![Comments Submitted](/doc/readme-images/comments-submitted-crop.png "Comments Submitted")

Comments Already Submitted<br>
![Comments Already Submitted](/doc/readme-images/comments-already-submitted-crop.png "Comments Already Submitted")

#### Recipe Page - Recipe Step Controls
Next Button Valid<br>
![Recipe Next Step Click Valid](/doc/readme-images/recipe-next-step-valid-crop.png "Recipe Next Step Click Valid")

Next Button at End of List<br>
![Recipe Next Step Click at List End](/doc/readme-images/recipe-next-step-at-end-crop.png "Recipe Next Step Click At End")

Previous Button Valid<br>
![Recipe Previous Step Click Valid](/doc/readme-images/recipe-prev-step-valid-crop.png "Recipe Previous Step Click Valid")

Previous Button at Start of List<br>
![Recipe Previous Step Click at List Start](/doc/readme-images/recipe-prev-step-at-start-crop.png "Recipe Previous Step Click at List Start")

Slide to Second<br>
![Recipe Slider to Second Step](/doc/readme-images/recipe-slider-second-step-crop.png "Recipe Slider to Second Step")

Slide to End<br>
![Recipe Slider to End Step](/doc/readme-images/recipe-slider-to-end-crop.png "Recipe Slider to End Step")

#### Recipe Page - Recipe Print Button
![Recipe Print Page Output Window](/doc/readme-images/recipe-print-display.png "Recipe Print Page Output Window")

### Action Point and Link Accessibility Highlighting
#### Menu
![Menu Bar Highlights A](/doc/readme-images/menu-highlight-a-crop.png "Menu Bar Highlights A")

![Menu Bar Highlights B](/doc/readme-images/menu-highlight-b-crop.png "Menu Bar Highlights B")

![Menu Bar Highlights C](/doc/readme-images/menu-highlight-c-crop.png "Menu Bar Highlights C")

#### Footer
![To Top Link Highlight](/doc/readme-images/footer-totop-crop.png "To Top Link Highlight")

![Social Media Link Highlight A](/doc/readme-images/footer-social-media-a-crop.png "Social Media Link HighLight A")

![Social Media Link Highlight B](/doc/readme-images/footer-social-media-b-crop.png "Social Media Link HighLight B")

![Social Media Link Highlight C](/doc/readme-images/footer-social-media-c-crop.png "Social Media Link HighLight C")

![CSS Check Link Highlight](/doc/readme-images/footer-css-link-crop.png "CSS Check Link Highlight")

#### Main Page
![Registration Submit Button Highlight](/doc/readme-images/main-submit-a-crop.png "Registration Submit Button Highlight")

![Comments Submit Button Highlight](/doc/readme-images/main-submit-b-crop.png "Comments Submit Button Highlight")

![Credits Links Highlight A](/doc/readme-images/credits-links-a-crop.png "Credits Links Highlight A")

![Credits Links Highlight B](/doc/readme-images/credits-links-b-crop.png "Credits Links Highlight B")

#### Recipe Page
![Recipe Next Step Button Highlight](/doc/readme-images/recipe-next-step-crop.png "Recipe Next Step Button Highlight")

![Recipe Previous Step Button Highlight](/doc/readme-images/recipe-prev-step-crop.png "Recipe Prev Step Button Highlight")

![Recipe Print Button Highlight](/doc/readme-images/recipe-print-crop.png "Recipe Print Button Highlight")

### Media Adjustments
#### Main Page
##### 1600px A
![Main Page Screen Shot 1600px A](/doc/readme-images/main-page-1600-a-crop.png "Main Page Screen Shot 1600px A")
##### 1600px B
![Main Page Screen Shot 1600px B](/doc/readme-images/main-page-1600-b-crop.png "Main Page Screen Shot 1600px B")
##### 1600px C
![Main Page Screen Shot 1600px C](/doc/readme-images/main-page-1600-c-crop.png "Main Page Screen Shot 1600px C")
##### 1001px A
![Main Page Screen Shot 1001px A](/doc/readme-images/main-page-1001-a-crop.png "Main Page Screen Shot 1001px A")
##### 1001px B
![Main Page Screen Shot 1001px B](/doc/readme-images/main-page-1001-b-crop.png "Main Page Screen Shot 1001px B")
##### 1001px C
![Main Page Screen Shot 1001px C](/doc/readme-images/main-page-1001-c-crop.png "Main Page Screen Shot 1001px C")
##### 1000px A
![Main Page Screen Shot 1000px A](/doc/readme-images/main-page-1000-a-crop.png "Main Page Screen Shot 1000px A")
##### 1000px B
![Main Page Screen Shot 1000px B](/doc/readme-images/main-page-1000-b-crop.png "Main Page Screen Shot 1000px B")
##### 1000px C
![Main Page Screen Shot 1000px C](/doc/readme-images/main-page-1000-c-crop.png "Main Page Screen Shot 1000px C")
##### 1000px D
![Main Page Screen Shot 1000px D](/doc/readme-images/main-page-1000-d-crop.png "Main Page Screen Shot 1000px D")
##### 1000px E
![Main Page Screen Shot 1000px E](/doc/readme-images/main-page-1000-e-crop.png "Main Page Screen Shot 1000px E")
##### 581px A
![Main Page Screen Shot 581px A](/doc/readme-images/main-page-581-a-crop.png "Main Page Screen Shot 581px A")
##### 581px B
![Main Page Screen Shot 581px B](/doc/readme-images/main-page-581-b-crop.png "Main Page Screen Shot 581px B")
##### 581px C
![Main Page Screen Shot 581px C](/doc/readme-images/main-page-581-c-crop.png "Main Page Screen Shot 581px C")
##### 581px D
![Main Page Screen Shot 581px D](/doc/readme-images/main-page-581-d-crop.png "Main Page Screen Shot 581px D")
##### 580px A
![Main Page Screen Shot 580px A](/doc/readme-images/main-page-580-a-crop.png "Main Page Screen Shot 580px A")
##### 580px B
![Main Page Screen Shot 580px B](/doc/readme-images/main-page-580-b-crop.png "Main Page Screen Shot 580px B")
##### 580px C
![Main Page Screen Shot 580px C](/doc/readme-images/main-page-580-a-crop.png "Main Page Screen Shot 580px C")
##### 580px D
![Main Page Screen Shot 580px D](/doc/readme-images/main-page-580-d-crop.png "Main Page Screen Shot 580px D")
##### 350px A
![Main Page Screen Shot 350px A](/doc/readme-images/main-page-350-a-crop.png "Main Page Screen Shot 350px A")
##### 350px B
![Main Page Screen Shot 350px B](/doc/readme-images/main-page-350-b-crop.png "Main Page Screen Shot 350px B")
##### 350px C
![Main Page Screen Shot 350px C](/doc/readme-images/main-page-350-c-crop.png "Main Page Screen Shot 350px C")
##### 350px D
![Main Page Screen Shot 350px D](/doc/readme-images/main-page-350-d-crop.png "Main Page Screen Shot 350px D")
#### Recipe Page
##### 1600px A
![Recipe Page Screen Shot 1600px A](/doc/readme-images/recipe-page-1600-a-crop.png "Recipe Page Screen Shot 1600px A")
##### 1600px B
![Recipe Page Screen Shot 1600px B](/doc/readme-images/recipe-page-1600-b-crop.png "Recipe Page Screen Shot 1600px B")
##### 1001px A
![Recipe Page Screen Shot 1001px A](/doc/readme-images/recipe-page-1001-a-crop.png "Recipe Page Screen Shot 1001px A")
##### 1001px B
Bug: Overflow On Print Button Div

Fix: change width to calc(100% - 10px) to allow for padding

![Recipe Page Screen Shot 1001px B](/doc/readme-images/recipe-page-1001-b-crop.png "Recipe Page Screen Shot 1001px B")
##### 1000px A
![Recipe Page Screen Shot 1000px A](/doc/readme-images/recipe-page-1000-a-crop.png "Recipe Page Screen Shot 1000px A")
##### 1000px B
![Recipe Page Screen Shot 1000px B](/doc/readme-images/recipe-page-1000-b-crop.png "Recipe Page Screen Shot 1000px B")
##### 1000px C
![Recipe Page Screen Shot 1000px C](/doc/readme-images/recipe-page-1000-c-crop.png "Recipe Page Screen Shot 1000px C")
##### 581px A
![Recipe Page Screen Shot 581px A](/doc/readme-images/recipe-page-581-a-crop.png "Recipe Page Screen Shot 581px A")
##### 581px B
![Recipe Page Screen Shot 581px B](/doc/readme-images/recipe-page-581-b-crop.png "Recipe Page Screen Shot 581px B")
##### 581px C
![Recipe Page Screen Shot 581px C](/doc/readme-images/recipe-page-581-c-crop.png "Recipe Page Screen Shot 581px C")
##### 580px A
![Recipe Page Screen Shot 580px A](/doc/readme-images/recipe-page-580-a-crop.png "Recipe Page Screen Shot 580px A")
##### 580px B
![Recipe Page Screen Shot 580px B](/doc/readme-images/recipe-page-580-b-crop.png "Recipe Page Screen Shot 580px B")
##### 580px C
![Recipe Page Screen Shot 580px C](/doc/readme-images/recipe-page-580-c-crop.png "Recipe Page Screen Shot 580px C")
##### 580px D
![Recipe Page Screen Shot 580px D](/doc/readme-images/recipe-page-580-d-crop.png "Recipe Page Screen Shot 580px D")
##### 350px A
![Recipe Page Screen Shot 350px A](/doc/readme-images/recipe-page-350-a-crop.png "Recipe Page Screen Shot 350px A")
##### 350px B
![Recipe Page Screen Shot 350px B](/doc/readme-images/recipe-page-350-b-crop.png "Recipe Page Screen Shot 350px B")
##### 350px C
![Recipe Page Screen Shot 350px C](/doc/readme-images/recipe-page-350-c-crop.png "Recipe Page Screen Shot 350px C")
##### 350px D
Bug: Overflow on footer w3C logo div

Fix: change widths of the footer divs to 30%, 40%, 30% - check other widths OK

![Recipe Page Screen Shot 350px D](/doc/readme-images/recipe-page-350-d-crop.png "Recipe Page Screen Shot 350px D")

## Browser Tests

The browsers tested are:
Chrome
Firefox
Opera
Edge

The Following tests were performed on each:
Main Page Display 1600px
Main Page Display 1200px
Recipe Page Display 1600px
Recipe Page Display 1200px

Logic Tests:
Recipe Page Next
Recipe Page Previous
Recipe Page Scroll
Recipe Page Print
Main Page Registration Submit
Main Page Comments Submit

## Link Integrity Checks
Both the recipe page and main page links were tested
    Bug: Omission of open on new tab for credits link - fixed