// Modules - Encapsulated Code (only share minimum)
//node uses common js library
//CommonJS, every file is module (by default)

const names = require('./name')
const sayHi = require('./function')
require('./sum')
// console.log(names)
// console.log(data)
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.david)

// Earlier app.js

/*
const amount=9
if(amount<10){
    console.log('small number')
}
else{
    console.log('large number')
}
console.log('hey its my first node app!!!')
console.log(__dirname)
setInterval(() => {
    console.log('hello world')
},1000)
*/
