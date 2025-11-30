import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import "./index.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prev => [...prev, newNote]);
  }

  function deleteNote(id) {
    setNotes(prev =>
      prev.filter((note, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          color={note.color}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default App;
