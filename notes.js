const fs = require("fs");
const highlight = require("./highlighter.js");
const chalk = require("chalk")

const getNotes = () => {
  return highlight.greenBold("Fetching notes...");
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    highlight.blueBold(`Your note titled ['${title}'] has been added to the list`);
  } else {
    highlight.yellowBold("Note title already taken!");
  }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes'))
    notes.forEach(note => {
        console.log(note.title);        
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        highlight.greenBold(`Title: ${note.title}`);
        highlight.green(`Body:\n${note.body}`);
    } else {
        highlight.redBold('Note not found!');
    }
    
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];  
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title != title);
    if (notes.length > notesToKeep.length) {
        highlight.red(`Your notes titled: ['${title}'] have been removed!`);
        saveNotes(notesToKeep);
    } else {
        highlight.redBold('No note to delete');
    }
}   

module.exports = 
{
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote  
};
