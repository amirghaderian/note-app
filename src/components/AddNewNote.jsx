import { useState } from "react";

const AddNewNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmite = (e) => {
    e.preventDefault();
    const newNote = {
      title,
      description,
      id: Date.now(),
      complited: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("")
    setDescription("")
    console.log(newNote);
  };
  const handleChange = (e) => setTitle(e.target.value);
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmite}>
        <input
          value={title}
          onChange={handleChange}
          type="text"
          className="text-field"
          placeholder="Note title ..."
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note description ..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
