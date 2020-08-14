// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
const render = require("./lib/htmlRenderer");


let teamMembers = [];
 
function createManager() {
    const questions = [
        {
            type: "input",
            message: "What's the Manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Please proved the Manager's id",
            name: "id"
        },
        {
            type: "input",
            message: "Manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "and the Manager's office number? ",
            name: "officeNumber"
        }
    ];       

    inquirer.prompt(questions).then(function (response) {
        console.log(response);
         

         const manager = new Manager(response.name,response.id,response.email,response.officeNumber);
         teamMembers.push(manager);
         createEmployee();
    });
}

function createEmployee(){
    const createEmployee = [
        {
            type: "list",
            message: "What're you looking to employ? ",
            name: "employeeType",
            choices: ["Engineer", "Intern", "NONE"]
        }
    ];

    inquirer.prompt(createEmployee).then(function (response) {
        console.log(response);
        if (response.employeeType == "Engineer") {
            
           createEngineer();
        } else if (response.employeeType == "Intern") {
            
            createIntern();
        } else {
            console.log("Not looking to hire");
            console.log("-----------");
            
            render(teamMembers);


        }
    });
}

function createEngineer(){
    const questions = [
        {
            type: "input",
            message: "What's the Engineer's Name? ",
            name: "name"
        },
        {
            type: "input",
            message: "Please provide the Engineer's id ",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email? ",
            name: "email"
        },
        {
            type: "input",
            message: "and the Engineer's github? ",
            name: "github"
        }
    ];       
    inquirer.prompt(questions).then(function (resp) {
        console.log(resp);
        const engineer = new Engineer(resp.name,resp.id,resp.email,resp.github);
         teamMembers.push(engineer);
         createEmployee();
    });
}

function createIntern(){
    const questions = [
        {
            type: "input",
            message: "What's the Intern's Name?",
            name: "name"
        },
        {
            type: "input",
            message: "Please provide the Intern's id",
            name: "id"
        },
        {
            type: "input",
            message: "Intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "and what school does the Intern attend?",
            name: "school"
        }
    ];       
    inquirer.prompt(questions).then(function (resp) {
       
        const intern = new Intern(resp.name,resp.id,resp.email,resp.school);
         teamMembers.push(intern);
         createEmployee();
    });
}

createManager();