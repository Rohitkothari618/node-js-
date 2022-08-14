// modules
const names = require('./first_modules')
console.log(names)
const name = require('./third_modules')
console.log(name)
// function type(name){
//     console.log("hy your name is ",`${name}`);
// }
const type = require('./utils')
type('susan')
type(names.john)
type(names.riya)
require('./add')

 
