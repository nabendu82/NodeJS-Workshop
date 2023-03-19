const fs = require('fs');

const newNote = function(title, body) {
    const notes = uploadNotes();
    notes.push({ title, body });
    fs.writeFileSync('notepad.json', JSON.stringify(notes))
}

const deleteNote = function(title) {
    const notes = uploadNotes();
    const remaining = notes.filter(note => note.title !== title);
    fs.writeFileSync('notepad.json', JSON.stringify(remaining))
}

const uploadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notepad.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = { newNote, deleteNote }