console.log('starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log('Result:', notes.add(2, -7));

var user = os.userInfo();


fs.appendFile('greetings.txt', 'Hello'+ notes.age + ' ' + `hello ${user.username}`);