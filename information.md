///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Installation steps:- 
## Overview
The enterprise test automation framework is designed to provide a robust, scalable, and feature-rich solution for automated testing of the Salesforce application (AUT). The framework encompasses various features, including data-driven testing, logging, retry mechanism, self-healing, cross-browser testing, multiple environments, password encryption, code quality, CI/CD integration, reusable utilities, data generation, parallel testing, and API mocking/testing.

## Requirements 
1. Node JS : A JavaScript runtime environment used to run Playwright tests on our system. Type node in terminal to verify its present
2. VS Code
3. ES Lint :- Static code analyzer , which will give a quality, readable , good formating and maintainable code.
4. Playwright Module : Install Playwright
5. Playwright runner Extension : A runner to execute our test cases.
6. GIT : Push your code to git repository.

## Install Playwright commands and steps
npm : Default comes with the NodeJS. Open source developers from every continent use npm(Node Package Manager) to share and borrow packages 
npx : Node Package Excecute install
1. Install : npm init playwright@latest / npm install @playwright/test@1.40.0 (for macos12 old version)
2. Install ES Lint from vs code extenstion
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
1. This is where we mention where should our framework find the tests cases "testDir"

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# install browser engines
npx playwright install

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

## export class LoginPage:-
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
-dotenv is used to manage the different env in the test.
-It loads environments variables from a .env file into process.env.
-Using process.env you can access programmatically any variable from the .env file

1. Install:- 

   - npm install dotenv --save

2. paste below code in playwright.config.js
   - NODE_ENV condition (Its a system variable). 
   - When we set the NODE_ENV from the runTime or Terminal we can just see this inside our code and based on the value we can pick up the different env file.

   if(!process.env.NODE_ENV){
   // __dirname :- give you the current project folder
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
   
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# CryptoJS | Encryption of Credentials:- 
- Doc link: https://cryptojs.gitbook.io/docs
- For larger frameworks we will have different credentials and hardcoding every credential will be the risky thing and it will be against the security.
- CruptoJs is a JavaScript library and it can be used for encryption and decryption
- We will use the AES (Advance Encryption Standard) for encryp and dercpt value. However along with this we will be providing the secret passphrase or SALT value.
- SALT value will be added inside your encryption and when you want to decrpt the same value should be used.

1. Install cruptoJS
   - npm install crypto-js // for normal JS
   - npm install --save-dev @types/crypto-js // if you are using TypeScript

2. utils folder
   - set SALT Env in CryptojsUtil 
   - For multiple entries use EncruptEnvFile
   - From terminal
   echo %SALT%
   export $SALT=helloSalt

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Logging with Winston:- 
1. Helps in monitoring, debugging, and analysing the test execution process.
2. Logging Levels: To categorize the severity of log messages. The common logging levels, in increasing order of severity are:
- DEBUG: Detailed information during development and debugging.      Typically not included in production logs.
- INFO: Provide informational message about the progress of the application or test. Usefull for monitoring the overall execution flow.
- WARN (or WARNING): Indicates a Potential issue that does not necessarily stop the application or test. Alerts developers and testers to ptential problems.
- ERROR: Indicates a failure or error that needs attention. Critical issues are often logged at this level.
- FATAL(or CRITICAL): The most severe level, indicating a critical failure that might lead to application termination.
3. Install Winston and timezone:
- npm install winston
- npm i moment-timezone
4. logger.info(`Successfull`) or logger.error(`Error`)

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Data Driven Testing:- 
1. Data-driven testing in Playwright means running the same test with different sets of test data, such as multiple usernames, passwords, search terms, or form inputs.
2. In Playwright, we can store data in an array, JSON, CSV, or Excel file and loop through it to create multiple test cases automatically.

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Faker for Test Data Generation:- 
1. Its not very practical that you will be creating your own test data evertime and it should be looks like a real time data and at the same time we should not use any production data.
2. For that reason we are going to use utility called Faker from the JavaScript to generate the various types of data by using this module
3. Link: https://fakerjs.dev/api/
4. npm install --save-dev @Faker-js/faker
4. npm: to save faker data in csv and json
   - npm install csv-writter
   - npm install csvtojson
5. Now create faker data in testdata folder and store in csv and json files

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Retry for Flaky Tests:- 
1. Playwright has default mechanisum for a retry mechanism.
2. Retry mechanism happens at runTime. 
3. We need to make the configuration in the playwright configuration file.
   -   retries: process.env.CI ? 2 : 1,
4. control retires from the terminal itself:
   npx playwright test loginTest.spec.ts --headed --retries=2

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Cross Browser Testing:- 
1. Playwright has the prebuild/predefined support for the cross browser testing.
2. Multiple browsers configuration are configured in the playwright configure file.
3. The main moto of using cross browser Testing is the user should have the same experience no matter which browser they are using
4. In playwright.config file you can config the device type in project such as iphone or pixel5 or other.


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# CICD GitHub Actions:- 
1. In the longrun we should be running our test automation inside the cloude by using CICD pipelines.
2. CICD is a contineous Integration and contneous delivery.
3. There are different tools for CICD pipelines : GitHub Actions, Docker, Azure, Jenkins. "https://playwright.dev/docs/ci"
4. We are taking GitHub Actions: 
   - Its a CICD platform and automation platforms for running our test automation platforms.
   - In all of these CICD pipelines we will be given with virtual machines where we will be running out test automation suit.
   - Steps:
   https://playwright.dev/docs/ci#github-actions
   create .github\workflow folder and inside worflow create main.yml file and paste the code from above link
   go to your github repository and click on Action and run workflow

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# ES Lint Set up:- 
1. Its a static code analyser. It will help us to find and fix the problem.
2. Need to watch again


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Skip Login using Storage State:- 
1. While scripting everytime its not feasible to login to the window by providing the credentials. For that reason we are going to use the storage state from the playwright.
2. Once you login , your credential, cookie, sessions , every state will be saved into the files. Next time when you go to the new test case you dont need to login from the scratch.
3. Use sample code as below.

   - Define authFile at top outside the test.
      const authFile = "src/config/auth.json";
     Paste below code after login to save te auth file
      await page.context().storageState({path: authFile});
      logger.info(`Auth store is saved.`);
   - test('Login with auth file', ({ browser }) => {
      const context = await browser.newContext({ storageState: authFile});
      const page = await context.newPage();
      await page.goto(`https://www.saucedemo.com/inventory.html`)
      await page.getByRole('button',{name: 'Add to cart'})
   }) 
4. Codegen: https://playwright.dev/docs/codegen
   - Run below command it will open a recorder , login manually and then close the browser it will save the storage state into auth.json.
   - npx playwright codegen --save-storage=auth.json https://www.saucedemo.com/
   - to reuse it use:
      test.use({ storageState: 'auth.json' });
      or
      Use below command to reopen the page after login and continue recording.
      npx playwright codegen --load-storage=auth.json https://www.saucedemo.com/inventory.html

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Serial And Paralled mode execution:- 

   - Serial = one after another. Parallel = multiple tests at the same time.
   - test.describe.configure({ mode: 'serial' });
   - test.describe.configure({ mode: 'parallel' });
   - Define page at top to have access in all tests
      let page;

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
# Custom Fixtures:- 
1. Let say you want to check some senarios on the homepage which loads after login then all is need you to be on this page. So for that reason you need to write down the custom fixtures.
2. In above case you need to write down for login page so that this fixtures can be used in different tests cases
3. A simple way to create a custom fixtures :
   - test.use({ myFixture: async() => {
      // This code will be executed before each test that uses this fixture
   }})

   test('my test', async ({ page, myFixture }) => {
      // ...
   })
4. But , this way of creating fixture may not be usefull in other tests cases becuase everybody can write there own way of fixtures. To avoid this confusion and to have a centralized fixtures we create a sperate folder for fixtures and there we can write all our custom fixtures.
5. Whenever you try to call fixtures it will execute before the test execution.
5. More in details:
- Test fixtures is a kind of function in the playwright that can run some code for you beforeTest or afterTest hooks.
- Fixtires has some functionaillity that makes this functionality bit better than just before each hooks. 
   Example Hooks:
   test.beforeEach("Hello", async({}) => {
      console.log(`Hello`);
   })
   test("Where is my candy", async({}) => {
      console.log(`Where is my candy`);
   })
   test("I am alive", async({}) => {
      console.log(`I am alive`)
   })
   test.afterAll("Test end", async({}) => {
      console.log(`Test End`);
   })
- Lets refactor above code with Fixtures : Go to project2 fixture.



