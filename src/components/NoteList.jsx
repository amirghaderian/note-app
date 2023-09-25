const NoteList = ({ notes ,onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} note={note} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default NoteList;

const NoteItem = ({ note , onDelete }) => {

    
    const option = {year:"numeric",month:"long" , day:"numeric"}
    return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={()=> onDelete(note.id)}>❌</button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-item__foter">
        {new Date(note.createdAt).toLocaleDateString("en-US",option )}
      </div>
    </div>
  );
};
