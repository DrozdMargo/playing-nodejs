// var obj = {
// 	name: 'Margo'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Margo", "age": 25}';
// var person = JSON.parse(personString);

const fs = require('fs');

var originalNote = {
	title: 'Some title',
	body: 'Some body'
};
//originalNoteString
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
//note
 console.log(typeof note);
 console.log(note.title);