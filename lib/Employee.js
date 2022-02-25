

// create an Employee Class that holds all the employee basic info
// such as name, email, ID, role
const inquirer = require('inquirer');


const Manager = require("./Manager")

//const Intern = require("./Intern")
//const Engineer = require("./Engineer")

const employeeMembers = [];

class Employee {
    constructor(name, employeeid, email, position) {
        this.name = name;
        this.employeeid = employeeid;
        this.email = email;
        this.position = position;
    }


    basicInfo() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter your name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'employeeid',
                message: 'What is your Employee ID?',
                validate: employeeidInput => {
                    if (employeeidInput) {
                        return true;
                    } else {
                        console.log('Please enter your employee ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: 'What is your manager email address?',
                validate: emailAddressInput => {
                    if (emailAddressInput) {
                        return true;
                    } else {
                        console.log('Please enter your email address!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'position',
                message: 'Select Manager, Engineer or Intern!',
                choices: ["Manager", "Engineer", "Intern"],
                validate: RoleInput => {
                    if (RoleInput) {
                        return true;
                    } else {
                        console.log('Please select a Position!');
                        return false;
                    }
                }
            },

        ])
            .then(repsonses => {
                if (repsonses.position === "Manager") {
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'officeNumber',
                            message: 'What is your office number?',
                            validate: officeNumberInput => {
                                if (officeNumberInput) {
                                    return true;
                                } else {
                                    console.log('Please enter your office Number!');
                                    return false;
                                }
                            }
                        }
                    ])
                    .then(response => {
                        console.log(response.officeNumber);
                        const managerMember =  Manager (repsonses.name, repsonses.employeeId, repsonses.email, repsonses.position, response.officeNumber)
                        employeeMembers.push(managerMember);
                        console.log(managerMember)
                    })
                }

            });
    };
};


//                .then (response => {
//                    const managerMember = new Manager (repsonses.name, repsonses.employeeid, repsonses.email, repsonses.position, response.officeNumber)
//                     console.log(managerMember);
//                    employeeMembers.push(managerMember)
//                })


// };
//         }
//         };    
// }

//else if  (repsonses.position === "Engineer") {
//     inquirer.prompt ({
//             type: 'input',
//             name: 'github',
//             message: 'What is your Github username?',
//             validate: githubInput => {
//                 if (githubInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your Github username!');
//                     return false;
//                 }

//         },


//     })
//     .then (response => {
// const engineerMember = new Engineer (repsonses.name, repsonses.employeeid, repsonses.email, repsonses.position, response.github)
//  console.log(engineerMember);
// employeeMembers.push(engineerMember)
// } else {
//     const employeeTeam = Employee (repsonses.name, repsonses.employeeid, repsonses.email, repsonses.position )
//     employeeMembers.push(employeeTeam);
// }





module.exports = Employee;
