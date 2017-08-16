"use strict";
console.log("main.js active");
let Handlebars = require('hbsfy/runtime');
let parkAreas = require('./attraction-factory.js');
let gridTemplate = require('../templates/parkGrid.hbs');


// Handlebars.regiserHelper("incrementAreas", (value) => parseInt(value) + 1);
//populate data
// function populateGrid(parkNames) {
// let newDiv = document.createElement("div");
// newDiv.innerHTML = funAreas(parkNames);
// $("#grid1").append(newDiv);
// }
// funAreas.getAreas = () => {
// } 

parkAreas.getAreas()
.then((data) => {
	console.log('from main.js data', data);
	gridData(data);
},
(reject) => {
	console.log('somthing went wrong in main.js');
});

function gridData(data){
	let newDiv = document.createElement("div");
	newDiv.innerHTML = gridTemplate(data);
	$("#grid").append(newDiv);
}























