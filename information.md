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
