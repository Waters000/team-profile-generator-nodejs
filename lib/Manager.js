const inquirer = require('inquirer');


const Manager = () => {
  
   
     return inquirer.prompt([
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
         name: 'employeeID',
         message: 'What is your Employee ID?',
         validate: githubInput => {
           if (githubInput) {
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
         name: 'Role',
         message: 'Select Manager, Engineer or Intern!',
         choices: ["Engineer", "Intern", "Manager"],
         validate: RoleInput => {
           if (RoleInput) {
             return true;
           } else {
             console.log('Please select an Egineer or Intern!');
             return false;
           }
         }
      },
      
     ])
     .then(responses => {
   
       if (responses.Role === "Engineer") {
         inquirer.prompt ([
           {
             type: 'input',
             name: 'github',
             message: 'What is your GitHub username?',
             validate: githubInput => {
               if (githubInput) {
                 return true;
               } else {
                 console.log("Please enter your GitHub username!");
                 return false;
               }
             }
           },
         ])
         .then(engineerResponse => {
           console.log(engineerResponse.github);
           const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, engineerResponse.github)
           allEmployees.push(EngineerTeam)
   
           addAnotherEmployee()
         })
        
       } else if (responses.Role === "Intern") {
         inquirer.prompt([
           {
             type: 'input',
             name: 'school',
             message: "What school do you attend?",
             validate: function (schoolInput) {
               if (schoolInput) {
                 return true;
               } else {
                 console.log("Please enter your School?")
                 return false;
               }
             }
           }
         ])
       }
       
     })
    };

module.exports = Manager; 