"use strict";

// ASSIGNMENT ONE ON ROBOT

// ASSIGNING VALUES WITH FUNCTIONS AND NESTED OBJECT
const robot = {};

robot.getTotal = function () { 
    return `${this.names} is a ${this.model} that ${this.tasks.task1}, ${this.tasks.task2} ${this.tasks.task3} and is ${robot.status}`
};
    robot.names = "Stellar robot";
    robot.id = 5587;
    robot.model = "AI Model";
    robot.batteryLevel = 10000;
    robot.status = "fully charged";
    

    robot.tasks = {
        task1: "Can cook",
        task2: "can deliver messages and",
        task3: "can wash, type and read",
    }

    // ACCESSING ITS PROPERTIES USING DOT NOTATION
console.log("Robot sentence:", robot.getTotal());
console.log(robot.tasks);
console.log(robot.id, robot.batteryLevel, robot.model, robot.status);
console.log("Main functions:", robot);


// ASSIGNMENT TWO ON RECIPE 
const recipe = {

    ingredients : {
       rice: "1. Two cups of rice",
       bellPeppers: "2. Fresh red pepper and green pepper",
       tomatoes: "3. Fresh or canned tomatoes",
       spices: "4. Thyme, curry powder, garlic, ginger, salt and seasoning cubes",
       otherThings: "5. Onions, Groundnut oil and Bay leaves"
    }
    };

    recipe["nameOfFood"] = "Jellof Rice and Chicken",
    recipe["type"] = "Nigerian food",
    recipe["prepTime"] = 40;
    recipe["category"] = "Dinner";


    recipe["totalJellofRice"] = function () { 
        return `This ${this.nameOfFood} is a ${this.type}, prepared in ${this.prepTime} minutes and it is a ${this.category}.
        The ingredients used are;
        ${this.ingredients.rice}, 
        ${this.ingredients.bellPeppers}, 
        ${this.ingredients.tomatoes},
        ${this.ingredients.spices}, 
        ${this.ingredients.otherThings}.`;    
    };


// ACCESSING ITS PROPERTIES USING SQUARE BRACKETS
console.log("The total recipe:", recipe);
console.log(recipe["nameOfFood"], recipe["type"], recipe["prepTime"], recipe["category"]);
console.log(recipe["totalJellofRice"]());



// ASSIGNMENT THREE ON PLANET USING MIXTURE OF DOT NOTATION AND SQUARE BRACKETS

let planet = {
    listOfPlanent : ["Earth ", "Mercury ", "Venus ", "Mars ", "Jupiter ", "Saturn ", "Uranus ", "Neptune"],

    allABoutPlanet : function () {
        return `There are eight planets in total. They are; ${this.listOfPlanent}.
        It is with a km of ${this.size} and ${this.hasLife} .
        It is ${this.position} in position and only has ${this.moons} moon.
        It is very far from sun with a ${this.DistanceFromSun}.`
          }
};

// USING DOT NOTATION
planet.size = "40,000";
planet.DistanceFromSun = "200 million km";
planet.hasLife = "Has life";

// USING SQUARE BRACKET
planet["moons"] = 1;
planet["position"] = "The first class world"
planet["atmosphere"] = {
    mainGases : "Oxygen and Nitrogen",
    temperature : 15,
    features : ["Mountains", "Valleys", "Craters", "Ice Caps"],
    nature : ["Water", "Ice", "Oceans"]
};

// ACCESSING THE PLANET PROPERTIES
console.log("Everything about planet:", planet);
console.log("A sentence about planet:", planet.allABoutPlanet());
console.log(planet["atmosphere"])
console.log(planet.atmosphere["features"]);
console.log(planet.atmosphere.nature);


const person = {

    names : {
       firstName: "Oluwatobiloba",
       lastName: "Stellar Heritage",
       department: "Law",
       },

    allAboutMe : function () {
        return `This girl called ${this.names.lastName} is a ${this.names.department} student.`
          },

};

console.log(person.allAboutMe());
console.log(person);

