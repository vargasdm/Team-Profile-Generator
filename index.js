const inquirer = require('inquirer');
const fs = require('fs');

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
    // uses answers, passes them into generateMarkdwn function and and returns the results
    .then((answers) => {
        const memberAnswers = []
        memberAnswers.push(answers)
        console.log(memberAnswers)

        if (answers.teamMember === 'Engineer') {
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
                    }
                ])
                .then(callback(teamMember))
                memberAnswers.push(answers)
                console.log(memberAnswers)

        } else if (answers.teamMember === 'Intern') {
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
                    }
                ])
                .then(callback(teamMember))
                memberAnswers.push(answers)
                console.log(memberAnswers)
        } else {
            fs.writeFile('./dist/team.html', memberAnswers, (err) =>
            err ? console.log(err) : console.log('We have successfully created profiles for your team members')
        )
        }
        
    })