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
	return fetchNotes();
};

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
};
var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length  !== filteredNotes.length;
};

var logNote = (note) => {
	debugger;
		console.log('--');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
};
module.exports = {
	addNote,
	getAll, // its equal addNote: addNote  (ES6)
	getNote,
	removeNote,
	logNote
}