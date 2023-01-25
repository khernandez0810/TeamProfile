const generateHTML = require('./src/htmlGenerator');
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: `what is the name of your team's Manager?`,
        validate: userInput => {
            if (userInput){
                return true
            }else{
                console.log("Enter your teams manager name")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `what is your Manager's Email?`,
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid){
                return true
            }else{
                console.log("Enter your teams manager's email")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your Manager's ID number?`,
        validate: userInput => {
            if (userInput){
                return true
            }else{
                console.log("Please enter Manager's ID number")
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `what is your Manager's office number?`,
        validate: userInput => {
            if (isNaN(userInput)){
                console.log("Please enter Office number")
                return false
            } else{
                return true
            }
        }
    },

])
.then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager (name, id, email, officeNumber);
    teamArray.push(manager);
    console.log(manager)
})
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is your Employee's role",
            choices: ['Intern', 'Engineer']

        },
        {
            type: "input",
            message: "What is your Employee's name?",
            name: 'name',
            validate: userInput => {
                if(userInput){
                    return true
                }else{
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your Employee's ID number?`,
            validate: userInput => {
                if (isNaN(userInput)){
                    console.log("Please enter Employee's ID number")
                    return false
                }else{
                    return true
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your Employee's Email?`,
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid){
                    return true
                }else{
                    console.log("Enter your teams Employee's email")
                    return false
                }
            }
        },
        {
            type: "input",
            message: "What is your Employee's Github Username?",
            name: 'github',
            when: (input) => input.role === "Engineer",
            validate: userInput => {
                if(userInput){
                    return true
                }else{
                    console.log("Please enter your employees Github Username!")
                    return false
                }
            }
        },
        {
            type: "input",
            message: "What school did your employee attend??",
            name: 'school',
            when: (input) => input.role === "Intern",
            validate: userInput => {
                if(userInput){
                    return true
                }else{
                    console.log("Please enter school your Intern attended")
                    return false
                }
            }
        },
        {
            type:'confirm',
            name:'confirmEmployeeAdd',
            message: "Would you like to add another Employee to your team?",
        
            
        }
        
    ])
    .then(employeeData => {
        let {name, id, email, role, github, school, confirmEmployeeAdd} = employeeData;
        let employee;

        if(role === "Engineer"){
            employee = new Engineer(name, id, name, github);
            console.log(employee)

        }else if(role === "Intern"){
            employee = new Intern(name, id, email, school)
            console.log(employee)
        }
        teamArray.push(employee);

        if(confirmEmployeeAdd){
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err){
            console.log(err);
            return
        }else{
            console.log("Your team page has been created successfully")
        }
    })
};


addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray)
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err =>{
    console.log(err)
});
