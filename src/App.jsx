import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
const App = () => {
  const [notes, setNotes] = useState([]);
  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDelete = (id) => {
    const filterdnotes = notes.filter((note) => note.id !== id);
    setNotes(filterdnotes);
  };

  return (
    <>
      <div className="container">
        <div className="note-header">note header</div>
        <div className="note-app">
          <AddNewNote onAddNote={handleNotes} />
          <div className="note-container">
            <NoteList notes={notes} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
