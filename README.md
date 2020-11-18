# Application name "Your App Name Here"

#### Brief description of the project's purpose w/ date, e.g "Markdown.md Exercise for Epicodus, 10.18.20"

#### Names of contributors - "By Jane Doe & Anne Done"

## Description
_{This is where you'll give as much information about the project as possible. Include purpose, usage, as much detail as needed to explain what the application does, etc.}_

## (Optional) Technologies used
* _ES6 Javascript_
* _Bootstrap_
* _jQuery_
* _node.js_ 
* _npm_
* _webpack_
* _ES Lint_
* _Jest_
* _Babel_

_{Epicodus says: "Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out."}_

## Color theme
* _#2E3C8C (Med-dark blue)_
* _#CEF2F2 (Light blue)_
* _#F2600C (Orange)_
* _#590202 (Burnt red)_
* _#0D0D0D (Black)_

## Installation Requirements
###### For Mac Users
* _Access Terminal in your Finder, and open a new window. Install the package manager, (Homebrew) [https://brew.sh/], on your device by entering this line of code in Terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`._
* _Ensure Homebrew packages are run with this line of code: `echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`._
* _Once homebrew is installed, install Git, a version control system for code writers, with this line of code `brew install git`._
* _Now, install Node.js through Homebrew with the following command: `brew install node`._
* _Confirm that node and npm (Node's package manager that is automatically installed alongside Node) are on your working system with two command lines `node -v` & `npm -v`, respectively returning something resembling `v14.5.0` & `6.14.5` (or higher)._

###### For Windows Users
* _Open a new Command Prompt window by typing "Cmd" in your computer's search bar._
* _Determine whether you have 32-bit or 64-bit Windows by following these (instructions)[https://support.microsoft.com/en-us/help/13443/windows-which-version-am-i-running]._
* _Go to (Git Bash)[https://gitforwindows.org/], click on the "Download" button, and download the corresponding exe file from the Git for Windows site._
* _Follow the instructions in the set up menu._
* _Once you have Git installed on your computer, go to this (GitHub repository)[https://github.com/dani-t-codes/super-galactic], click the "Fork" button in the upper right hand corner of the page, and clone this application with the following command:`git clone https://github.com/dani-t-codes/super-galactic`._
* _Go to the (Node.js website)[https://nodejs.org/en/download/] and download the appropriate source code for your Windows operating system._ 

###### For Both Mac & Windows systems
* _Once the project has been cloned to your computer, run `npm run start` to open a live session of the application from your preferred code editor. ((Visual Code Studio)[https://code.visualstudio.com/] was used and is recommended by the application builder.)_

### Setup Instructions
_For template reuse & new project set up..._
* _Copy package.json & update 'name', and potentially license type._
* _Copy webpack.config.js & update entry pt, output, plugins, modules._
* _Copy .eslintrc._
* _Copy .gitignore._
* _(Optional) Copy .babelrc_
* _Mimic src folder layout w/index.html & main.js on top level & css/ inside._
* _*Note* Dist/ folder is not needed as it will autopopulate on npm._  

_{Q's to ask in setup: Do person using an app need to run a server? How should they set up my databases? Is there other code this app depends on? Etc.}_

*_For help building great READMEs, checkout the following articles..._
* _[Medium's Kickass READMEs](https://medium.com/@meakaakka/%20a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)._
* _[Make a README](https://www.makeareadme.com/)._
* _[Markdown Guide](https://www.markdownguide.org/cheat-sheet)._
* _[Awesome READMEs](https://github.com/matiassingers/awesome-readme)._

### Order of Operations for Building a Project: 
- Make folder & do a `Git init` in Terminal.
- Create project structure and/or copy over your template. 
- Make first `git commit -m "Begin X project"`.
- `npm init` or set up package.json if you haven't already.
- Package.lock.json does *not* need to be moved, as it will be generated on npm.  
- `npm install`
- `npm run build` will get node_modules & dist folders downloaded.
- Write specs out in README. 
- Pick a spec to focus on. 
- Build out test suite.
- Build out functionality for given spec.
- Purposefully fail test. 
- Purposefully pass test (may require some debugging).
- Refactor test and functionality as needed (purposefully fail, and purposefully pass as needed). 
- Move on to next spec.
- Build out the UI as a nice break, but contain it to the current backend functionality.

- P.S. `npm run start` will open a LiveShare session! 

_API Setup Instructions TODO_ 
_When pushing projects to GH that require API keys, make sure to include...
* instructions for other users to be able to clone your project & use their own API keys to see what's built. 
* including all steps for getting a key - from the link to sign up for an account...//Lsn 4
* to any steps to getting an API key... //also Lsn 4, maybe 5
* to using a personal key with a .env file. //Lsn 8 
* Adding a .env file with properly stored API variables
* instructions for adding an API key is a requirement for this section's independent project. TODO TODO TODO

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Homepage** | User accesses localhost:5500 | Homepage with user input form |
| **Program Gathers User Input** | User input: "hopes" | Output: "dreams" |
| **Program Removes Spaces from User Input**| User Input: "hope hope" | Output: "hopehope" |
| **Program Removes Punctuation from User Input**| Input: "h*o@pe  /h#o**p'e" | Output: "hopehope" |
| **Program Assigns Characters Numeric Values** | Input: "hope" | Output: "4 1 6 2" |
| **Program Sums Character Values**| Input: "4 1 6 2" | Page Displays: 13 |

### Tests
Describe: thisFxn() 
Test: thisFxn(doingThisAction)
Code: hereIsSome.pseudoCode(inaction);
Expect: thisFxn(w/this data).toEqual(this new data)

## (Optional) Known bugs

_{I am Danielle's *bug* that needs fixing. I might impact this app by doing xyz. But you can do abc to get around me. Can do future fix me plz!}_

### (Optional) Contact info

_{I am Danielle's contact info. Or naw.}_

#### (Optional) Support or contribution instructions

_{Issues? Questions? Ideas? Concerns? Don't we all. Contact Jane Doe at xyz, or make a contribution to the code!}_

### Legal, or License 

_{License info w/ copyright & date, license type (MIT, GPL, etc), list of contributors/company name}_

_MIT_ Copyright (c) 2020 **_{List of contributors or company name}_**