const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const generateHtml= require('./utils/generate-site.js');



const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const managerMembers = [];
const internMembers = [];
const engineerMembers = [];



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
            managerMembers.push(managerMember);
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
            engineerMembers.push(engineerMember)
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
            internMembers.push(internMember)
            console.log(internMember)
            moreUsers()
          })
      }
    }); /// end of first inqurier with basic questions.

};



/// ask if user wants to add more employees or stop
function moreUsers() {
  inquirer.prompt([
    {
        type:'confirm',
        name: 'moreEmployees',
        message:'Do you want to add more Employees?',
        default: false
    }
])
  .then(moreResponse => {
    if (moreResponse.moreEmployees === true){
    basicInfo();
    } else {
           writeFile(managerMembers, engineerMembers, internMembers)
    }
  })
}




basicInfo()

