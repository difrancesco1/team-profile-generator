const inquirer = require("inquirer");
const fs= require("fs");
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateHTML = require('./src/generateHTML.js');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message:  'What is your team managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter the team manager name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the work ID of your team manager?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('Please enter the managers work ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the team managers email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is the team manager office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter the team managers Office number');
                    return false;
                }
            }
        }
    ])

    .then(managerInput => {
        const { name, id, email, number } = managerInput;
        const manager = new Manager (name, id, email, number);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    -------------------------------
    Add New Employees to your Team
    -------------------------------
    `);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'Choose your employees role (use your arrow keys)',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the name of the employee to continue");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the ID of the employee?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the employeer email to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employees github username?',
            when: (input) => input.role === 'Engineer',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('Please enter the employee github username');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern school to continue")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another memeber to your team?',
            default: false
        }
    ])

    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            console.log(employee);
        } else if (role === 'Intern') {
            employee =new Intern (name, id, email, school);
            console.log(employee);
        }
        teamArray.push(employee);

        if(confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your Team Member page is now available in the index.html file')
        }
    })
};



addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });


