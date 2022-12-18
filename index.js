const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const {generateHtml} = pageTemplate
// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
let employeeArr = [];

// creates html
function writeHtml() {
    const html = generateHtml(employeeArr);
    fs.writeFile('./dist/team.html', html, (err) =>
        err ? console.log(err) : console.log('We have successfully created profiles for your team members')
    )

}

// holds prompt that asks if you want to add another member
function memberPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which type of team member would you like to add?',
                name: 'teamMember',
                choices: ['Engineer', 'Intern', 'I do not want to add anymore team members'],
            }
        ])
        .then((answers) => {
            console.log(answers);
            if (answers.teamMember === 'Engineer') {
                engineerPrompts();
            } else if (answers.teamMember === 'Intern') {
                internPrompts();
            } else {
                console.log(employeeArr);
                writeHtml();
                return
            }
        })
}

// holds prompts for engineer employee
function engineerPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the team engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the team engineer's id?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the team engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the team engineer's office number?",
            },
        ])
        .then((answers) => {
            console.log(answers);
            let engineerInfo = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
            employeeArr.push(engineerInfo)
            console.log(employeeArr)
            memberPrompt();
        });
}

// holds prompts for intern employee
function internPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the team intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the team intern's id?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the team intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the team intern's school?",
            },
        ])
        .then((answers) => {
            console.log(answers);
            let internInfo = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
            employeeArr.push(internInfo)
            console.log(employeeArr)
            memberPrompt();
        });
}

// app starts here
console.log('Welcome to your team profile generator!!')
// prompts for manager
inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        },

    ])
    .then((answers) => {
        let managerInfo = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        employeeArr.push(managerInfo)
        console.log(employeeArr)
        memberPrompt();
    })