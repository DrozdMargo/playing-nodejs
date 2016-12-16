console.log('starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return  JSON.parse(notesString);
	} catch (e) {
		return []; 
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));  //it writes our new note into notes
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	var duplicateNotes = notes.filter((note) => note.title === title);

	if( duplicateNotes.length === 0 ) { // checked if exist title or not, if not we write this note
		notes.push(note);
		saveNotes(notes);
		return note;
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