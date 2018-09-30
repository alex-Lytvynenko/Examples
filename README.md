# Automation example on JS + WebdriverIO which will help you build your tests faster

There're some comments to explain a little bit some functions;

## To turn on linter and Prettier:

* Go to **Webstorm settings -> Languages & Frameworks -> JavaScript -> Code Quality Tool -> ESLint**;
* It should be turned on automatically
    - If not - turn it on
    - If needed - add **~\Documents\GitHub\MyTests\node_modules\eslint** to the ESLint package path
    - If needed - add **.editorconfig** as ESLinter configuration file
* Go to **Webstorm settings -> Languages & Frameworks -> JavaScript -> Prettier**;
* It should be turned on automatically
   - If not - turn it on
   - If needed - add **~\Documents\GitHub\MyTests\node_modules\Prettier** to the Prettier package path
* To apply Prettier to your code press **Ctrl+Shift+Alt+P** (Windows OS) or ~~probably~~ **Cmnd+Shift+Alt+P**(MacOS)

## About some packages I added:

* **dotenv** will help you to hide confidential data, e.g. credentials or testing host;
* **moment** will help you to work with time

## To make it work:

* Clone/download this to your computer
* Run **yarn install:deps** from your terminal to install all packages
* Run **yarn install:selenium** from your terminal to install selenium standalone
* Run **yarn test** to run tests
* Run **yarn allure-report** to generate and open report
* Run **yarn precommit** before making a commit to GitHub to pass you code through ESLint
