import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
const App = () => {
  const [notes, setNotes] = useState([]);
  const handleNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDelete = (id) => {
    const filterdnotes = notes.filter((note) => note.id !== id);
    setNotes(filterdnotes);
  };
  const handleCompletedNote = (id) => {
    const newNotes = notes.map((note) =>
      note.id === id ? { ...note, complited: !note.complited } : note
    );

   
    setNotes(newNotes);
  };

  return (
    <>
      <div className="container">
        <div className="note-header">note header</div>
        <div className="note-app">
          <AddNewNote onAddNote={handleNotes} />
          <div className="note-container">
            <NoteStatus notes={notes}/>
            <NoteList
              notes={notes}
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
