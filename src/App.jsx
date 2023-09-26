import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteHeader from "./components/NoteHeader";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
const App = () => {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDelete = (id) => {
    const filterdnotes = notes.filter((note) => note.id !== id);
    setNotes(filterdnotes);
  };
  const handleCompletedNote = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, completed: !note.completed } : note
    );
    setNotes(newNotes);
  };
  let sortedNotes = notes;
  const handleChange = (e) => {
    setSortBy(e.target.value);
    setNotes(sortedNotes);
  };


  return (
    <>
      <div className="container">
        <NoteHeader notes={notes} sortBy={sortBy} onSort={handleChange} />
        <div className="note-app">
          <AddNewNote onAddNote={handleNotes} />
          <div className="note-container">
            <NoteStatus notes={notes} />
            <NoteList
              notes={sortedNotes}
              sortBy={sortBy}
              sortedNotes={sortedNotes}
              onDelete={handleDelete}
              onComplete={handleCompletedNote}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
