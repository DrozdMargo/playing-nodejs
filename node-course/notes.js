console.log('starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch (e) {

	}
	
	var duplicateNotes = notes.filter((note) => note.title === title);

	if( duplicateNotes.length === 0 ) { // checked if exist title or not, if not we write this note
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));  //it writes our new note into notes
	}	
};

var getAll = () => {
	console.log('Getting all  notes');
};

var readNote = (title) => {
	console.log('Reading note', title);
};
var removeNote = (title) => {
	console.log('removing note', title);
}

module.exports = {
	addNote,
	getAll, // its equal addNote: addNote  (ES6)
	readNote,
	removeNote
}