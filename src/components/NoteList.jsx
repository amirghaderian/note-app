const NoteList = ({ notes, onDelete, onComplete, sortBy, sortedNotes }) => {
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else {
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }
  return (
    <div className="note-list">
      {sortedNotes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        );
      })}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note, onDelete, onComplete }) => {
  const option = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div className={`note-item ${note.completed && "completed"}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            onChange={() => onComplete(note.id)}
          />
        </div>
      </div>
      <div className="note-item__foter">
        {new Date(note.createdAt).toLocaleDateString("en-US", option)}
      </div>
    </div>
  );
};
