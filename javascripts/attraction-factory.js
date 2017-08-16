"use strict";
console.log('inside attraction-factory.js');


/*********** Empty Arractions Array SCRIPT  ***************/
// Initialize empty objct
// let attractionsArea = [];
let parkMethods = {};

// load data using ajax
parkMethods.getAreas = () => {
    return new Promise (function(resolve, reject){
        $.ajax({
            url:`https://themepark-85ce7.firebaseio.com/areas.json`
        })
        .done(function(data){
            // console.log('data', data);
            
            
            resolve(data);
        })
        .fail(reject);
    });

};

 module.exports = parkMethods;


