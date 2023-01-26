

const generateIntern = (intern) => {
return `    <div class="col-4 mt-4">
<div class="card h-100">
    <div class="card-header cardHead">
        <h3>${intern.name}</h3>
        <h4><i class="fa-solid fa-glasses"></i>Intern</h4>
    </div>
    <div class="cardBody card-body">
        <p class="label">ID: ${intern.id}</p>
        <p class="label">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="label">School: ${intern.school}</p>
    </div>
</div>
</div>`
};
const generateEngineer = (engineer) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header cardHead">
                <h3>${engineer.name}</h3>
                <h4><i class="fa-solid fa-computer"></i>Engineer</h4>
            </div>
            <div class="card-body cardBody">
                <p class="label">ID: ${engineer.id}</p>
                <p class="label">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="label">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};
const generateManager = (manager) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header cardHead">
                <h3>${manager.name}</h3>
                <h4><i class="fa-solid fa-mug-hot"></i>Manager</h4>
            </div>
            <div class="card-body cardBody">
                <p class="label">ID: ${manager.id}</p>
                <p class="label">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="label">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
};

generateHTML = (data) => {
     pageArray = [];

    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();
        

        if(role === "Manager"){
            const managerCard = generateManager(employee)
            pageArray.push(managerCard)
        }
        if(role === "Intern"){
            const internCard = generateIntern(employee)
            pageArray.push(internCard)
        }
        if(role === "Engineer"){
            const engineerCard = generateEngineer(employee)
            pageArray.push(engineerCard)
        }
    }
    const employeeCards = pageArray.join('')
    const generateTeam = generatePage(employeeCards);
    return generateTeam;
}


const generatePage = (employeeCards) => {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
    <h1>Team Profile</h1>
</nav>
</header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
        
        </body>
        <script src="https://kit.fontawesome.com/8f82156273.js" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
        </html>`
  
;}

module.exports = generateHTML;

