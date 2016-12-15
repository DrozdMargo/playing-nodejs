const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');


console.log(_.isString(true));
console.log(_.isString('grty'));
var filterArray = _.uniq(['as', 1, 'as', 2, 3, 4]);
console.log(filterArray);
// var res = notes.addNote();
// console.log('Result:', notes.add(2, -7));

// var user = os.userInfo();


// fs.appendFile('greetings.txt', 'Hello'+ notes.age + ' ' + `hello ${user.username}`);