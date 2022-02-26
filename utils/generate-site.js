const fs= require('fs');


const writeFile = (managerMembers, engineerMembers, internMembers) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./index.html', generateHtml(managerMembers, engineerMembers, internMembers), err => {
            // if theres an error, reject the promise and send the error to the Promise's catch() method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt ccidentally execute the resolve() function as well
                return;
            }
            // if everything went well, resolve the PRomise and send the successful data to the `.then()` method
       resolve({
        ok: true,
        message: 'File Created!'
       }); 
    });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };
  



function generateHtml(managerMembers, engineerMembers, internMembers) {
 var output = "";

output += generateCard(managerMembers)
output += generateCard(engineerMembers)
output += generateCard(internMembers)
return output;


  
}


function generateCard (employee) {
var card = "";

  for (var i = 0; i < employee.length; i++) {
console.log(employee[i].name, employee[i].employeeid, employee[i].email, employee[i].position)
   card += `<h1>${employee[i].name}</h1>
   
   <h2>${employee[i].employeeid}</h2>`

}
return card;

}




module.exports = { writeFile, copyFile };
