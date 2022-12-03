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

Browser Screen Prints

Chrome

![Chrome Screenshot](/doc/readme-images/browser-chrome-1600px.png "Chrome Screenshot")

Edge

![Edge Screenshot](/doc/readme-images/browser-edge-1600px.jpeg "Edge Screenshot")

Firefox

![Firefox Screenshot](/doc/readme-images/browser-firefox-1600px.png "Firefox Screenshot")

Opera

![Opera Screenshot](/doc/readme-images/browser-opera-1600px.png "Opera Screenshot")

## Link Integrity Checks
Both the recipe page and main page links were tested

Bug: Omission of open on new tab for credits link - fixed

## Code Checks
Javascript is written to ES6 compliance.

Note that javascript undeclared variables are in the file
recipe-data.js

Bugs: 

Sections without heading elements in html - fixed

Images without src attribute - fixed

Missing "let" in some declarations - fixed

HTML - Main Page

![W3C Check HTML Main Page](/doc/readme-images/cd-main-page-html.png "W3C Check HTML Main Page")

HTML - Recipe Page

![W3C Check HTML Recipe Page](/doc/readme-images/cd-recipe-html.png "W3C Check HTML Recipe Page")

CSS

![W3C Check CSS](/doc/readme-images/cd-css-check.png "W3C Check CSS")

Javascript - Main Page

![JShint Check Main Page JS](/doc/readme-images/cd-js-check-main-page.png "JShint Check Main Page JS")

Javascript - Recipe Page

![JShint Check Recipe Page JS](/doc/readme-images/cd-js-check-recipe.png "JShint Check Recipe Page JS")

Javascript - Modal Functions File

![JShint Check Modal Functions JS](/doc/readme-images/cd-js-check-modal.png "JShint Check Modal Functions JS")

Javascript - Data Objects File

![JShint Check Data JS](/doc/readme-images/cd-js-check-data.png "JShint Check Data JS")

## Lighthouse Site Checks
One thing to notice here is that the performance is down. 
This may be due to the two large background images used.

The colour contrast pulls the accessibility score down a bit. This is a slight trade-off
for the use of site colours as backgrounds.

Main Page

![Google Chrome Lighthouse Report](/doc/readme-images/cd-lighthouse-report-crop.png "Google Chrome Lighthouse Report")

Recipe Page - Main Course

![Google Chrome Lighthouse Report - Main Course](/doc/readme-images/cd-lighthouse-main-course-crop.png "Google Chrome Lighthouse Report - Main Course")

Recipe Page - Dessert

![Google Chrome Lighthouse Report - Main Course](/doc/readme-images/cd-lighthouse-dessert-crop.png "Google Chrome Lighthouse Report - Dessert")

## Systems Testing
### User Actions and Validation
#### Main Page - Registration Form
First Name Blank<br>
![Registration First Name Blank](/doc/readme-images/registration-first-name-blank-crop.png "Registration First Name Blank")

Last Name Blank<br>
![Registration Last Name Blank](/doc/readme-images/registration-last-name-blank-crop.png "Registration Last Name Blank")

Email Blank<br>
![Registration email Blank](/doc/readme-images/registration-email-invalid-crop.png "Registration email Blank")

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
Note that these tests were performed BEFORE the button labels were added - no impact.

Next Button Valid<br>
![Recipe Next Step Click Valid](/doc/readme-images/recipe-next-step-valid-crop.png "Recipe Next Step Click Valid")

Next Button at End of List<br>
![Recipe Next Step Click at List End](/doc/readme-images/recipe-step-already-at-end-crop.png "Recipe Next Step Click At End")

Previous Button Valid<br>
![Recipe Previous Step Click Valid](/doc/readme-images/recipe-prev-step-valid-crop.png "Recipe Previous Step Click Valid")

Previous Button at Start of List<br>
![Recipe Previous Step Click at List Start](/doc/readme-images/recipe-step-already-at-start-crop.png "Recipe Previous Step Click at List Start")

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

