const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');

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
            } return;
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
        {
            type: 'list',
            message: 'Which type of team member would you like to add?',
            name: 'teamMember',
            choices: ['Engineer', 'Intern', 'I do not want to add anymore team members'],
        },
    ])
    .then((answers) => {
        const managerInfo = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        // const memberAnswers = []
        // memberAnswers.push(answers)  
        console.log(managerInfo)
        memberPrompt();

        // if (answers.teamMember === 'Engineer') {
        //     engineerPrompts();
        // inquirer
        //     .prompt([
        //         {
        //             type: 'input',
        //             name: 'engineerName',
        //             message: "What is the team engineer's name?",
        //         },
        //         {
        //             type: 'input',
        //             name: 'engineerId',
        //             message: "What is the team engineer's id?",
        //         },
        //         {
        //             type: 'input',
        //             name: 'engineerEmail',
        //             message: "What is the team engineer's email?",
        //         },
        //         {
        //             type: 'input',
        //             name: 'github',
        //             message: "What is the team engineer's office number?",
        //         }
        //     ])
        //     .then(memberAnswers.push(answers))
        // console.log(memberAnswers)

        // } else if (answers.teamMember === 'Intern') {
        //     internPrompts();
        // inquirer
        //     .prompt([
        //         {
        //             type: 'input',
        //             name: 'internName',
        //             message: "What is the team intern's name?",
        //         },
        //         {
        //             type: 'input',
        //             name: 'internId',
        //             message: "What is the team intern's id?",
        //         },
        //         {
        //             type: 'input',
        //             name: 'internEmail',
        //             message: "What is the team intern's email?",
        //         },
        //         {
        //             type: 'input',
        //             name: 'school',
        //             message: "What is the team intern's school?",
        //         }
        //     ])
        //     .then(memberAnswers.push(answers))
        // console.log(memberAnswers)
        // } else {
        //     fs.writeFile('./dist/team.html', memberAnswers, (err) =>
        //         err ? console.log(err) : console.log('We have successfully created profiles for your team members')
        //     )
        // }

    })