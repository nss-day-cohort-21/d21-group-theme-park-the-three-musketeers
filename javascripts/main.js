"use strict";
console.log("main.js active");
//******************** */
//standard handlebars tool reuired for templates
let Handlebars = require('hbsfy/runtime');

//******************** */
//varialbe thats pull in attraction factory
let parkAreas = require('./attraction-factory.js');

//******************** */
//this handlebars template each loop to get park grid data
let gridTemplate = require('../templates/parkGrid.hbs');

//******************** */
//this increments the handlebars index by one so it starts 1
Handlebars.registerHelper("incrementer", (value) => parseInt(value) + 1);

//******************** */
//a getAreas method that uses a promise to get the data from attraction factory
parkAreas.getAreas()
.then((data) => {
	console.log('from main.js data', data);

	//******************** */
	//calls the function inside this promise so that it executes when its needed
	gridData(data);
},
//******************** */
//reject message in promise to send if ajax callback fails
(reject) => {
	console.log('somthing went wrong in main.js');
});

//******************** */
//function that takes the object data and appends it in the DOM at the grid id
function gridData(data){
	let newDiv = document.createElement("div");
	newDiv.innerHTML = gridTemplate(data);
	$("#grid").append(newDiv);
}























