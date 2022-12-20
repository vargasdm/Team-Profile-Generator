# Team Profile Generator

## Description

The motivation for this project was to assist managers keep track of the professional information of their supervised staff. The user wil be able to create a webpage that has information on all of their staff in one place. This way they will have quick access to thier GitHub profiles and emails.

During this project I learned: 
- how to plan, write, and use tests
- how to import/export functions between js files
- how to use inquirer to ask the user prompts in the command line
- using constructer statements to create classes
- using and creating classes and subclasses
- how to use "this" key reference word
- how to install dependecies for necessary packages
- using back ticks and string literals

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

First, you will need to clone this repository to your local machine. The repository should already contain the package.json file as well as the package-lock.json file. This application requires you to have node.js version 16.18 and you can read how to install the correct version at https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs. THis application also requires the thrid-party package inquirer version 8.2.4 and the fs module that is built into node.js. fs does not need to be installed but inquirer does. It can be installed by opening the index.js terminal and entering npm i inquirer@8.2.4. You will be able to check the package.jason file and find the inquirer dependency. After teh required packages are installed, the user can open the terminal in the index.js file, and enter node index.js. They will be presented with a series of prompts where they will enter information about their project that will be used to generate their README file.

## Usage

This application can be used to generate an html that contains professional team information. The user will be prompted about the name, id, email, office number of the manager. Then the user will be asked if they want to add another employee and if they choose either an intern or engineer, they will be prompted for information about that employee. If the user does not want to add another employee, the app will create an html with all of the prompted information.

The demo video can be viewed here: https://drive.google.com/file/d/1o_TfimaheCjgS3zZrf05BJo7DflnTO6t/view.

## Credits

I followed these links and tutorials in the completion of this project:

- https://www.npmjs.com/package/inquirer
- https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
- https://www.geeksforgeeks.org/node-js-fs-writefile-method/
- https://jestjs.io/docs/getting-started

## License

No licenses were used during this project.
