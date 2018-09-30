# Automation example on JS + WebdriverIO which will help you build your tests faster

There're some comments to explain a little bit some functions;

######To turn on linter and Prettier:

1. Go to **Webstorm settings -> Languages & Frameworks -> JavaScript -> Code Quality Tool -> ESLint**;
2. It should be turned on automatically
   2.1. If not - turn it on
   2.2 If needed - add ~\Documents\GitHub\MyTests\node_modules\eslint to the ESLint package path
   2.3. If needed - add **.editorconfig** as ESLinter configuration file
3. Go to **Webstorm settings -> Languages & Frameworks -> JavaScript -> Prettier**;
4. It should be turned on automatically
   4.1. If not - turn it on
   4.2 If needed - add ~\Documents\GitHub\MyTests\node_modules\Prettier to the Prettier package path
5. To apply Prettier to your code press **Ctrl+Shift+Alt+P** (Windows OS) or ~~probably~~ **Cmnd+Shift+Alt+P**(MacOS)

######About some packages I added:

1. **dotenv** will help you to hide confidential data, e.g. credentials or testing host;
2. **moment** will help you to work with time

######To make it work:

1. Clone/download this to your computer
2. Run **yarn install:deps** from your terminal to install all packages
3. Run **yarn install:selenium** from your terminal to install selenium standalone
4. Run **yarn test** to run tests
5. Run **yarn allure-report** to generate and open report
6. Run **yarn precommit** before making a commit to GitHub to pass you code through ESLint
