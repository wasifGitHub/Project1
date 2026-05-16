///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Installation steps:- 
## Overview
The enterprise test automation framework is designed to provide a robust, scalable, and feature-rich solution for automated testing of the Salesforce application (AUT). The framework encompasses various features, including data-driven testing, logging, retry mechanism, self-healing, cross-browser testing, multiple environments, password encryption, code quality, CI/CD integration, reusable utilities, data generation, parallel testing, and API mocking/testing.

## Requirements 
1. Node JS : A JavaScript runtime environment used to run Playwright tests on our system. Type node in terminal to verify its present
2. VS Code
3. ES Lint :- Static code analyzer , which will give a quality, readable , good formating and maintainable code.
4. Playwright Module
5. Playwright runner Extension
6. GIT

## Install Playwright commands and steps
npm : Defailt comes with the NodeJS. Open source developers from every continent use npm(Node Package Manager) to share and borrow packages 
npx : Node Package Excecute install
1. Install : npm init playwright@latest / npm install @playwright/test@1.40.0 (for macos12 old version)
2. Install ES Lint
3. Install Playwright from extention for Playwright runner Extention
4. Install Browser Engine after creating project structure below:- 
   npx playwright install

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Organize the project structure :-
## Copy code and paste in termial to create the project struction folder and files
mkdir -p src/tests
mkdir -p src/pages
mkdir -p src/utils
mkdir -p src/config
mkdir -p src/api
mkdir -p src/reporting
mkdir -p src/logging
mkdir -p src/data

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# playwright.config.js or ts:-
1. This is where we mention where should our tests find the tests cases "testDir"

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Salesforce cred
// userid=wasifahmad899.d26d11120cda@agentforce.com
// password=Newuser135!

//or checkout flow
1. url :- https://www.saucedemo.com/
2. cred :- standard_user / secret_sauce

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Page Object Chaining:-
## constructor
-> constructor runs automatically when the object is created.
Example -> const loginPage = new LoginPage(page);
When this line runs, the constructor executes.

## export class LoginPage {
class -> creates a blueprint/object
LoginPage -> represents the Login Page of the website
export -> allows this class to be imported in other files

So this file is saying: I am defining a object for the login page.

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# GIT:-
1. Open terminal and type "git init" to create a empty git repository in the local repository folder in your system named .git
2. use .gitignore file to avoid uploading the file that you dont want to share with public
   node_modules/
   /test-results/
   /playwright-report/
   /blob-report/
   /playwright/.cache/
   /playwright/.auth/
3. Goto github.com/signup if you dont have an account.
4. Then create new repository
5. Push an existing repository from the command line
   git remote add origin https://github.com/wasifGitHub/Project1.git
   git branch -M main
   git push -u origin main
6. before pushing check with "git status" what are files where exculded or not tracked.
7. To track all foler add it
   git add .
8. Now do initial commit
   git commit -m "Initial commit"
9. Whatever we have done , we have done in local. Now push it to git repository
   git push
   git push --set-upstream origin main  // looking for the main branch when you push first time
10. Take Http share url from code and use it share it or if someone wants to clone it in their system then use below command
   First create a folder then open terminal from the folder and type below command in the terminal.
   git clone https://github.com/wasifGitHub/Project1.git

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# dotenv:- 
dotenv is used to manage the different env in the test
1. Install:- npm install dotenv --save

2. paste below code in playwright.config.js
   - NODE_ENV condition
   if(!process.env.NODE_ENV){
   require('dotenv').config({path:`${__dirname}//src//config//.env`});
   } else {
   require('dotenv').config({path:`${__dirname}//src//config//.env.${process.env.NODE_ENV}`});
   }

   - Use below code in test to print the env values
   test("Sample env test", async ({page}) => {
   console.log(process.env.NODE_ENV); // return undefined if NODE_ENV is not set
   console.log(process.env.userid);
   console.log(process.env.password);
   })

3. How to set NODE_ENV ?

   For window:
   - set NODE_ENV=qa
   - echo %NODE_ENV% // print value

   For Mac
   - export NODE_ENV=qa ||  NODE_ENV=qa
   - echo $NODE_ENV
   
