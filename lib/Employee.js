// create an Employee Class that holds all the employee basic info
// such as name, email, ID, role
const inquirer = require('inquirer');
const Manager = require("./Manager")
//const Intern = require("./Intern")
//const Engineer = require("./Engineer")
class Employee {
    constructor(name, employeeid, email, position) {
        this.name = name;
        this.employeeid = employeeid;
        this.email = email;
        this.position = position;
    }
}


const employeeMembers = [];


function basicInfo() {
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
    .then(responses => {
      if (responses.position === "Manager") {
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
            // console.log(responses)
            //  console.log(response.officeNumber);
            const managerMember = new Manager(responses.name, responses.employeeid, responses.emailAddress, responses.position, response.officeNumber)
            employeeMembers.push(managerMember);
            console.log(managerMember)
            moreUsers()
          })
      } else if (responses.position === "Engineer") {
        inquirer.prompt([
          {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your Github username!');
                return false;
              }
            }
          }
        ])
          .then(response => {
            const engineerMember = new Engineer(responses.name, responses.employeeid, responses.emailAddress, responses.position, response.github)
            employeeMembers.push(engineerMember)
            console.log(engineerMember)
            moreUsers()
          }) // end of enginner member inquirier
      } else if (responses.position === "Intern") {
        inquirer.prompt([
          {
            type: 'input',
            name: 'school',
            message: "What school do you attend?",
            validate: schoolInput => {
              if (schoolInput) {
                return true;
              } else {
                console.log("Please enter your School Name")
                return false;
              }
            }
          }
        ])
          .then(response => {
            const internMember = new Intern(responses.name, responses.employeeid, responses.emailAddress, responses.position, response.school)
            employeeMembers.push(internMember)
            console.log(internMember)
            moreUsers()
          })
      }



    }); /// end of first inqurier with basic questions.

  };





module.exports = Employee;