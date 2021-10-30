# IN PROGRESS


<div align="center">
<h1>Scrum Master Quiz</h1>
</div>
<h2 align="center"><img src="https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/psmi.png"></h2>

<br>

This is a responsive web application for Test the users knowledge about Scrum Master.
The objective is to help the users check if they are prepareted for the SCRUM MASTER Test Certification.

Link to the web-application available [HERE.](https://rodrigodadam.github.io/scrum-master-quiz/)

<br>

<h2 align="center"><img src="https://i.postimg.cc/NjtcNfX6/site-mockup.png"></h2>

<br>

# Table of Contents

- [UX]()
  * [Project Goals](#Project-Goals)
  * [Users Experience Plan](#Users-Experience-Plan)
  * [Player Strategy Plan](#Player-Strategy-Plan)
  * [Developer Strategy Plan](#Developer-Strategy-Plan)
  * [Structure Plan](#Structure-Plan)
  * [Front-End](#Front-end)
  * [Game Controllers](#Game-Controllers)
  * [Wireframes](#Wireframes)
  * [Design Plan](#Design-Plan)


- [Features](#Features)

- [Technologies Used](#Technologies-Used)

- [Resources](#Resources)

- [Project Barriers & Solutions](#Project-Barriers-&-Solutions)

- [Deployment](#Deployment)

- [Credits](#Credits)


## Project Goals

Every day a lot of IT companies and also non IT companies are starting using the Agile Principles and one of the greatest Agile framework is SCRUM. 
We can see in some recruiters web-site, like Indeed or LinkkedIN a increase a demand for these professionals and every day more people are looking for SCRUM MASTER Certification. This Project Main Goal is help these people who are looking for the SCRUM MASTER Certification giving them a small test to check their knowledge about the Scrum Master and how this works. As I'm a Certifield Scrum Master, I created the questions based in the [SCRUM GUIDE](https://www.scrum.org/resources/scrum-guide). 

The Second Goal of this project is help Web and Software Developers who are looking how build a simple quiz. This Web-Application was built in a way that anyone can only modify the questions and answers and thus have your quiz with a particular subject that suits your porpose.  


## Users Experience Plan


- ### Player Strategy Plan

The website is designed for the people who would like test the knowledge about SCRUM MASTER also could play with friends. It's a great tool for increase the user understanding about the certification test and what he can wait. The web-application was build to be ease to use, the Player just need go to [web-site](https://rodrigodadam.github.io/scrum-master-quiz/) and start to play. After finish the game or the time is out the player can Try Again, if do not pass or put you Name in the Best Scores History that will be storage on local storage.


- ### Developer Strategy Plan

To who would like to biuld a Quiz web-application, this project was build in the way that the Developer User can simple modify the questions on a JSON.file and use all the structure for his own objective. Also the project is structured in a way that is easy to access and understand to make the necessary changes in the Design and in the Game Controllers.

<div align="right"><a href="#top">🔝</a></div>

## Structure Plan

### Front-end

The website consists in a **Home** page with **03 other pages** and **01 Pop-up**

<br>

- **Welcome Pop Up**

<br>

![Home Page](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/popup.png)

<br>

- **Home Page** (`index.html`)

<br>

![Home Page](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/homepage.png)

<br>

The main page of the website. There is a game name, and 2 buttons. One is [Take a Quiz](https://rodrigodadam.github.io/scrum-master-quiz/game.html) that will start the quiz immediatly and the another one is [See Best Scores](https://rodrigodadam.github.io/scrum-master-quiz/best-scores.html) which will take the player to the page with the best scores played in that browser. Also there is a [Footer](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/footer.png) with the simple informations about me that will take the player to my personal webpage.

<br>

- **Game Page** (`game.html`)

<br>

![Game Page](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/gamepage.png)

<br>

This panel is an User Friendly interface and is simple to use. 
At the top the Player can see the [Game Display](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/gamedisplay.png) where easy the User can track their Score, the Time remaning and how many questions was answered/remaining.
At the midle the User can see the Properly Question follow below for 5 options to be answered and only one is correct.

When the player select an option that answer will change the color for a brief time to give time to player see if the options is correct or incorrect. To correct option the user will see the answer turn yo green to incorrect will turn to red. Also for each correct answer the player score will be increased.

To be User Friendly I've used the [Bootstrap Collor Pallete](https://colorswall.com/palette/3) to show the players whem they select Correct as answers and Incorrect Answers. More info about the colors in [Design Plan](#Design-Plan)

In all devices the game and the game display are positioned equal to avoid visual position problems. 

To avoid user copy and past the questions *onmousedown* was used.

<br>

- **Fail Page** (`fail.html`)

<br>

![Fail Page](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/failpage.png)

<br>

All players that did not reach a minimum 85% of score or more will be redirect to this page. Where they have 2 options. **Try Again** Will be redirect the user to a [Game Page](https://rodrigodadam.github.io/scrum-master-quiz/game.html) and restart a new game or **Go Home** that will redirect the player to [Home Page](https://rodrigodadam.github.io/scrum-master-quiz/index.html).

<br>

- **Pass Page** (`pass.html`)

<br>

![Pass Page](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/passpage.png)

<br>

All players that reach 85% of score or more  will be redirect to this page. This page has a objective to give the player a opportunity to Play with someone else on same Broswer and check who will bet more score or just challenge themselves and register the name in a Local Storage.
This page has an **input form** and 3 buttons:
The **input form** give the Player a chance to insert his/her name and Save it in the [Best Scores](https://rodrigodadam.github.io/scrum-master-quiz/best-scores.html). The **Save** button is blocked and only will be avaiable if the Player insert someting in the **input form**. Also the page has 2 more buttons **Play Again** that will redirect the user to a [Game Page](https://rodrigodadam.github.io/scrum-master-quiz/game.html) and restart a new game or **Home** that will redirect the player to [Home Page](https://rodrigodadam.github.io/scrum-master-quiz/index.html).


<br>

- **Best Scores Page** (`best-scores.html`)

<br>

![Best Scores Page](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/bestscores.png)

<br>

The page where users can see the Best Scores Payers played in that Broswer. This page also has 2 buttons **Challenge Youself** that will redirect the user to a [Game Page](https://rodrigodadam.github.io/scrum-master-quiz/game.html) and restart a new game or **Go Home** that will redirect the player to [Home Page](https://rodrigodadam.github.io/scrum-master-quiz/index.html). The same footer are used in Home Page was used in this page.

<br>

<div align="right"><a href="#top">🔝</a></div>

<br>

### Game Controllers

This part of the README is for those who intend to use this project for purpose use and who would like to make superficial modifications or improve the project.

<br>

- **Project Structure** 

<br>
<div align="center">

![Project Structure](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/game-controllers/projectstructure.png)

</div>
<br>

The Project Structure is singularly simple and easy to understand I have separated the folders in a way that is auto-directional and that users who need to make changes can easily identify where to find the ones they need.

- **Assets Folder**
  
  - **CSS Folder**

  **#game.css** => All the CSS for (`game.html`) are in this file. To avoid mixing information with the crucial style details I created this file separated. In this folder the user can change all style to game page without modify the others pages style by mistake.

  **#style.css** => The style of the other pages can be modified in this file.

  - **Images Folder**

  In this folder the user can insert all the images that he/she needs to implement to the project. 

  - **JS Folder**

  All the game controllers are here and can be modifield I'll present only the part of files that need be modifield by user to re-build the Quiz without broken the code.

  - **game.js** 

  - **Score Points =>**
    To modify the score gained for each correct answer you can just modify the *const score_points = XX* where the XX will be the value of "points/score" gained for ech correct answer.

    ```javascript
    const score_points = XX;

    ```

  - **Max Questions =>**
    If the user need change the maximum of question for each game go to the *const max_questions = X* and change the X for the number os maximum question that the game will have.

    ```javascript
    const max_questions = X;

    ```

  - **Timer =>**
    To modify the game timer go to the function below in this file and change the **XX** to a new number. This number is where the timer starts countdown. Like if you insert 20 the countdown will start in 20 minutes and so.

    ```javascript
    window.onload = function () {
    let gameTime = 60 * XX,
        display = document.querySelector('#timer');
    startTimer(gameTime, display);
    };

    ```

  - **Redirect =>**
    This function will redirect the Players to designed page (`fail.html`) or (`pass.html`) as per their score. In the Scrum Master Quiz was set the minimum score of 85% as the SCRUM MASTER OFFICIAL test request this score to pass. Here the Developer can modify the Pass score to a number of their choice and this number will determine which page the player will be redirected to according to their score. Change the **XX** for a number/score of your choice.

    ```javascript
    function redirect() {

    if (score > XX) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("./pass.html");
    } else if (score < XX) {
        return window.location.assign("./fail.html");
    }};

    ```

- **HTML Files**

  - **index.html =>**
    The user can modify the page **title** to a better choice for their porpose modifying the title as image below.  

  <br>

  <h2 align="center"><img src="https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/game-controllers/page-title.png"></h2>

  <br>

    Also the Hero Title (like Game Name) could be modifield as image below.

  <br>

  <h2 align="center"><img src="https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/game-controllers/game-name.png"></h2>

  <br>

- **JSON File / Questions**

  All the questions could be implemented in this file as example below.
  This is a **JSON file** and to follow the project gides the user need a Questions, 5 Options and insert the correct at the ("answer": X) the user need  to replace the X for the correct option. As the 1st example the correct answer is the option 4, so the answer number is 4.

  The User can Add as many question as need to this game. 

  ```json
  [
    {
        "question": "Who is responsible for all estimates in the Product Backlog?",
        "option1": "The Scrum Master",
        "option2": "The Product Owner",
        "option3": "The Scrum Team",
        "option4": "The Development Team",
        "option5": "The Product Owner and the Scrum Master",
        "answer": 4
    },

    {
        "question": "Who is responsible for the Product Backlog?",
        "option1": "The Product Owner",
        "option2": "The Scrum Master and The Development Team",
        "option3": "The Scrum Team",
        "option4": "The Development Team",
        "option5": "The Product Owner and the Scrum Master",
        "answer": 1
    }

  ]

  ```

<div align="right"><a href="#top">🔝</a></div>

### Wireframes


- **Full wireframes can be found [here](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/wireframes.md)**


### Design Plan


- **Colors**

Inspired in the [scrum.org](https://www.scrum.org/), The 3 Main colors are:

Catskill White (#EEF6F7) used as background color is nn all background pages to be clean and do not disturb the Player with High Tones. 
Dark Blue Grey (#1F3B4D) used in the moust of text the colors. 
Eastern Blue (#1E9AB0) used in all buttons.

This colors create an harmonic design and that has a great inspiration on the official website to make the official SCRUM MASTER certification.

<div align="center">

![Color Pallet](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/maincolors.png)

</div>

On the **Game Page** I used the [Bootstrap 4 Collor Pallete](https://colorswall.com/palette/3) to show the Player if the selected answer was correct or incorrect. The color used are (#5CB85C) to Correct answers used in Bootstrat 4 in a Sucess Buttons and (#D9534F) to Incorrect answers used in Bootstrap 4 to Danger Buttons. As example below.

<div align="center">

<br>

<h2 align="center"> Example Correct Answer</h2>

<br>

![Correct](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/correct.png)

<br>

<h2 align="center"> Example Incorrect Answer</h2>

<br>

![Incorrect](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/structure/design/incorrect.png)

<br>

</div>

<br>

- **Typography**

For the Game Name I used **Roboto Slab**, Designed by [Christian Robertson](https://fonts.google.com/?query=Christian+Robertson), also used for all (H1) and normal text.
For (H2) was used **Open Sans**.
[From Google Fonts](https://fonts.google.com/)

<div align="right"><a href="#top">🔝</a></div>


## FEATURES

### Existing Features

This project is well-structured to work efficiently and be modifield as needed.

- Create with **HTML5**, **CSS3** and **JavaScript**
- It consists of 1 base html file and 4 other html files
- Welcome Pop-Up
- For Players:
  1. Just OPEN AND PLAY, User Friendly designed to be easy to play the game
- For Developers Only:
  1. Well designed and structured to be easy to modify the game for new porposes
  1. All questions are in a JSON file

### Features Left To Implement

- Pop-up before Start the Game to insert the Player Name before game starts
- Block right click in all pages
- Use a Host DB to prevent players cheat the game score


<div align="right"><a href="#top">🔝</a></div>

## TECHNOLOGIES USED

- [HTML5](https://en.wikipedia.org/wiki/HTML) 
- [CSS3](https://en.wikipedia.org/wiki/CSS) 
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) 
- [Google Fonts](https://fonts.google.com/) 
- [Font Awesome](https://fontawesome.com/) 
- [Gitpod](https://www.gitpod.io/) 
- [Git](https://git-scm.com/) 
- [GitHub](https://github.com/) 
- [Jira Software](https://www.atlassian.com/software/jira) 
  - **You can see the Project Board below**

  <br>

  ![Jira](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/assets/images/jira.png)

  <br>

<div align="right"><a href="#top">🔝</a></div>

## RESOURCES

### General Resources

- Code Institute Course Materials
- [Stack Overflow](https://stackoverflow.com/)
- [YouTube](https://www.youtube.com/)
- [W3schools](https://www.w3schools.com/)
- [Google](https://www.google.com/)

### Tools

- [ImageResizer](https://imageresizer.com/)
- [PostImages](https://postimages.org/)
- [Canva](https://www.canva.com/)
- [Balsamiq](https://balsamiq.com/)
- [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp)
- [Arty Click](https://colors.artyclick.com/)
- [AMI Website Mockup Generator](http://ami.responsivedesign.is/)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [Jshint](https://jshint.com/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

<div align="right"><a href="#top">🔝</a></div>

## PROJECT BARRIERS & SOLUTIONS

- **Questions Storage**

This was defenitly the big issue that I had during the project. Initially I inserted the questions together in (`game.js`) file as a variable. However, as I would like to make the project cleaner and easier to understand, I had to find new solutions for storing the questions and not mixing it Questions with the Functions to avoid future problems. The first solutions that I try was create a new JS file named (`questions.js`) and I migrated all the questions from (`game.js`) to (`questions.js`) creating a unique place to store the questions. I used (`modules`) to import the questions from (`questions.js`) to (`game.js`) and work perfect. But I was not satisfied with another JS file. So I decided to implement a JSON file with all questions and create a (`questions.json`) and again transfering all questions from (`questions.js`) to (`questions.json`). 
I chose to use JSON because the syntax is very easy to use also JSON uses less data overall, so I reduce the cost and increase the parsing speed and the structure is straightforward and readable.

- **Minimal Security Against Cheating**

# TO DO

### Test Strategy

Testing is required on all features and user stories documented in this README. All clickable links must redirect to the correct pages. 

 - HTML Code must pass through the [W3C HTML Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Frodrigodadam.github.io%2Fscrum-master-quiz%2F)

 - CSS Code must pass through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Frodrigodadam.github.io%2Fscrum-master-quiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pt-BR)

 - JavaScript code must pass through the [JSHint Validator](https://jshint.com/)

- **Full test results can be found [here](https://github.com/rodrigodadam/scrum-master-quiz/blob/main/tests.md)**

## Deployment

### Project Creation
To create this project I used the CI Gitpod Full Template by navigating 
[here](https://github.com/Code-Institute-Org/gitpod-full-template) and clicking the 'Use this template' button.

I was then directed to the create new repository from template page and entered in my desired repo name, then 
clicked Create repository from template button.

Once created, I navigated to my new repository on GitHub and clicked the Gitpod button which built my workspace.

The following commands were used for version control throughout the project:

* git add *filename* - This command was used to add files to the staging area before committing.

* git commit -m "commit message explaining the updates" - This command was used to to commit changes to the local repository.

* git push - This command is used to push all committed changes to the GitHub repository.


### Deployment to GitHub


### Fork Project 

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point 
for your own idea. - Definition from [Github Docs](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo).

1. Navigate to the GitHub Repository you want to fork.
1. On the top right of the page under the header, click the fork button.

1. This will create a duplicate of the full project in your GitHub Repository.

  <div align="right"><a href="#top">🔝</a></div>

## CREDITS

— **Media** —

  - PSMI Logo used in this Readme file are owned by me from [srummaster.org](https://www.scrum.org/) on 12 August 2021. [see credencial here](https://www.credly.com/badges/9f29f9a5-1371-424b-8451-4cecca9cb1f3/linked_in) 
  - The other images presented in this readme are all owned by Rodrigo Dadam
  - All icons are used from [Font Awesome](https://fontawesome.com/)
  - Collor Pallete are inspired by [scrummaster.org](https://www.scrum.org/)

— **Researches** —

  - I used W3Shools and Devdocs to help me with some HTML and CSS informations/Documentation
  - Also to fix some bugs that I do not found inside documentation I used the Comunity Stackoverflow to help me with this bugs and Google.com

  <div align="right"><a href="#top">🔝</a></div>


## ACKNOWLEDGEMENTS


<div align="right"><a href="#top">🔝</a></div>
