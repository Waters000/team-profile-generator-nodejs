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
 var output =`<!DOCTYPE html>
 <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Team Profile</title>
         <link rel="stylesheet"
             href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
             <link rel="stylesheet"
             href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
             <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
         <link rel="stylesheet"
             href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
         <link rel="stylesheet" href="./assets/style.css" />
     
     
     </head>

<body>
<header>
<div class="page-header bg-info">
  <h1>Team Profile Generator <small>My Team</small></h1>
</div>
</header>
     
<div class="m-0 bg-warning container-fluid"><div class="justify-content-center row">
   
  ${generateManager(managerMembers)} </div></div>
  
  <div class="bg-success container-fluid"><div class="justify-content-center row"> 
  ${generateEngineer(engineerMembers)} </div></div>

  <div class="bg-primary container-fluid"><div class="justify-content-center row">
  ${generateIntern(internMembers)} </div></div>
   

 
     
   </header>

</body>



`

//output += generateManager(managerMembers)
//output += generateEngineer(engineerMembers)
//output += generateIntern(internMembers)
return output;


  
}


function generateManager (managerMembers) {
var card = "";

  for (var i = 0; i < managerMembers.length; i++) {
     
   

console.log(managerMembers[i].name, managerMembers[i].employeeid, managerMembers[i].email, managerMembers[i].position, managerMembers[i].officeNumber)

card += `
   
 
       
   <div class=" rounded-3 m-2 p-2  card style=width: 18rem;">
  
   <div class=" card-body bg-success">
     <ul><h4 class="card-title">${managerMembers[i].name}</h4>
     <li><span class="oi oi-compass"></span> ${managerMembers[i].position}</span></li>
     </ul>

   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item"><span class="font-weight-bold">Employee ID :</span> ${managerMembers[i].employeeid}</li>
     <li class="list-group-item">Email: <a href="mailto:${managerMembers[i].email}">${managerMembers[i].email}</a></li>
     <li class="list-group-item"><span class="font-weight-bold">Office Number:</span> ${managerMembers[i].officeNumber}</li>
   </ul> 
 </div>
   
   `

}
return card;

}



function generateEngineer (engineerMembers) {
  var card = "";
  
    for (var i = 0; i < engineerMembers.length; i++) {
       
     
  
  console.log(engineerMembers[i].name, engineerMembers[i].employeeid, engineerMembers[i].email, engineerMembers[i].position, engineerMembers[i].github)
  
  card += `

         
     <div class=" rounded-3 m-2 p-2 row card style=width: 18rem;">
     
     <div class=" card-body bg-secondary">
       <h4 class=" card-title">${engineerMembers[i].name}</h4><br>
       <span class="oi oi-beaker"> ${engineerMembers[i].position}</span>
  
     </div>
     <ul class="list-group list-group-flush">
       <li class="list-group-item"><span class="font-weight-bold">Employee ID: </span>${engineerMembers[i].employeeid}</li>
       <li class="list-group-item">Email: <a href="mailto:${engineerMembers[i].email}">${engineerMembers[i].email}</a></li>
       <li class="list-group-item"><span class="font-weight-bold">Github: </span><a href="https://github.com/${engineerMembers[i].github}/" target="_blank">${engineerMembers[i].github}</a></li>
     </ul>
    
   </div>
     
     `
  
  }
  return card;
  
  }

  function generateIntern (internMembers) {
    var card = "";
    
      for (var i = 0; i < internMembers.length; i++) {
         
       
    
    console.log(internMembers[i].name, internMembers[i].employeeid, internMembers[i].email, internMembers[i].position, internMembers[i].school)
    
    card += `
       
     
           
       <div class=" rounded-3 m-2 p-2  card style=width: 18rem;">
       
       <div class=" card-body bg-primary">
         <h2 class=" card-title">${internMembers[i].name}</h2>
         <span class="oi oi-book"></span> ${internMembers[i].position} </span>
    
       </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item"><span class="font-weight-bold">Employee ID: </span> ${internMembers[i].employeeid}</li>
         <li class="list-group-item">Email: <a href="mailto:${internMembers[i].email}">${internMembers[i].email}</a></li>
         <li class="list-group-item"><span class="font-weight-bold">School: </span> ${internMembers[i].school}</li>
       </ul>
      
     </div>
       
       `
    
    }
    return card;
    
    }



module.exports = { writeFile, copyFile };
