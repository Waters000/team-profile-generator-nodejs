//const fs = require('fs');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const allEmployees = []


const runProgram = (responses) => {
 Manager()

  // return inquirer.prompt([
  //   {
  //     type: 'input',
  //     name: 'name',
  //     message: 'What is your name?',
  //     validate: nameInput => {
  //       if (nameInput) {
  //         return true;
  //       } else {
  //         console.log("Please enter your name!");
  //         return false;
  //       }
  //     }
  //   },
  //   {
  //     type: 'input',
  //     name: 'employeeID',
  //     message: 'What is your Employee ID?',
  //     validate: githubInput => {
  //       if (githubInput) {
  //         return true;
  //       } else {
  //         console.log('Please enter your employee ID!');
  //         return false;
  //       }
  //     }
  //   },
  //   {
  //     type: 'input',
  //     name: 'emailAddress',
  //     message: 'What is your manager email address?',
  //     validate: emailAddressInput => {
  //       if (emailAddressInput) {
  //         return true;
  //       } else {
  //         console.log('Please enter your email address!');
  //         return false;
  //       }
  //     }
  //   },
  //   {
  //     type: 'list',
  //     name: 'Role',
  //     message: 'Select Manager, Engineer or Intern!',
  //     choices: ["Engineer", "Intern", "Manager"],
  //     validate: RoleInput => {
  //       if (RoleInput) {
  //         return true;
  //       } else {
  //         console.log('Please select an Egineer or Intern!');
  //         return false;
  //       }
  //     }
  //  },
   
  // ])
  // .then(responses => {

  //   if (responses.Role === "Engineer") {
  //     inquirer.prompt ([
  //       {
  //         type: 'input',
  //         name: 'github',
  //         message: 'What is your GitHub username?',
  //         validate: githubInput => {
  //           if (githubInput) {
  //             return true;
  //           } else {
  //             console.log("Please enter your GitHub username!");
  //             return false;
  //           }
  //         }
  //       },
  //     ])
  //     .then(engineerResponse => {
  //       console.log(engineerResponse.github);
  //       const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, engineerResponse.github)
  //       allEmployees.push(EngineerTeam)

  //       addAnotherEmployee()
  //     })
     
  //   } else if (responses.Role === "Intern") {
  //     inquirer.prompt([
  //       {
  //         type: 'input',
  //         name: 'school',
  //         message: "What school do you attend?",
  //         validate: function (schoolInput) {
  //           if (schoolInput) {
  //             return true;
  //           } else {
  //             console.log("Please enter your School?")
  //             return false;
  //           }
  //         }
  //       }
  //     ])
  //   }
    
  // })
 };

// const promptProject = portfolioData => {
//   console.log(`
// =========================
// Add a Team Member Profile
// =========================
// `);

//   // If there's no 'projects' array property, create one
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
  // return inquirer
  //   .prompt([
  //     {
  //       type: 'list',
  //       name: 'Role',
  //       message: 'Select an Engineer or Intern!',
  //       choices: ["Engineer", "Intern"],
  //       validate: RoleInput => {
  //         if (RoleInput) {
  //           return true;
  //         } else {
  //           console.log('Please select an Egineer or Intern!');
  //           return false;
  //         }
  //       }
  //    },
//       // {
//       //   type: 'input',
//       //   name: 'description',
//       //   message: 'Provide a description of the project (Required)',
//       //   validate: descriptionInput => {
//       //     if (descriptionInput) {
//       //       return true;
//       //     } else {
//       //       console.log('You need to enter a project description!');
//       //       return false;
//       //     }
//       //   }
//       // },
//       // {
//       //   type: 'checkbox',
//       //   name: 'languages',
//       //   message: 'What did you this project with? (Check all that apply)',
//       //   choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       // },
//       // {
//       //   type: 'input',
//       //   name: 'link',
//       //   message: 'Enter the GitHub link to your project. (Required)',
//       //   validate: linkInput => {
//       //     if (linkInput) {
//       //       return true;
//       //     } else {
//       //       console.log('You need to enter a project GitHub link!');
//       //       return false;
//       //     }
//       //   }
//       // },
//       // {
//       //   type: 'confirm',
//       //   name: 'feature',
//       //   message: 'Would you like to feature this project?',
//       //   default: false
//       // },
//       // {
//       //   type: 'confirm',
//       //   name: 'confirmAddProject',
//       //   message: 'Would you like to enter another project?',
//       //   default: false
//       // }
//     ])


//     .then(projectData => {
//       portfolioData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
// };

runProgram()
 // .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData)
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
