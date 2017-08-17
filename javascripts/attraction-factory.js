"use strict";
console.log('inside attraction-factory.js');


/*************************/
// Initialize an empty objct to hold park methods

let parkMethods = {};

/*************************/
// load data using ajax
parkMethods.getAreas = () => {
    return new Promise (function(resolve, reject){
        $.ajax({
            url:`https://themepark-85ce7.firebaseio.com/areas.json`
        })
        .done(function(data){
        //    console.log('thurs', data);
            
            
            resolve(data);
        })
        .fail(reject);
    });


    
};

/*************************/
//makes the this module available for export to the parkMethods object (see above line 8)
 module.exports = parkMethods;


