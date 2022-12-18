const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
let managerArr = [];
let engineerArr = [];
let internArr = [];


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
            } fs.writeFile('./dist/team.html', memberAnswers, (err) =>
                err ? console.log(err) : console.log('We have successfully created profiles for your team members')
            ) 
        })
}

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
            let engineerInfo = new Intern(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
            engineerArr.push(engineerInfo)
            console.log(engineerArr)
            memberPrompt();
        });
}

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
            internArr.push(internInfo)
            console.log(internArr)
            memberPrompt();
        });
}

console.log('Welcome to your team profile generator!!')

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
        managerArr.push(managerInfo)
        console.log(managerArr)
        memberPrompt();

        // } else {

        // }

    })