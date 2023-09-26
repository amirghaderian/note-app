const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const open = allNotes - completedNotes;
  return (
    <>
      {allNotes ? (
        <ul className="note-status">
          <li>
            All <span>{allNotes}</span>
          </li>
          <li>
          completed <span>{completedNotes}</span>
          </li>
          <li>
            Open <span>{open}</span>
          </li>
        </ul>
      ) : (
        <h2>No Notes has already been added.</h2>
      )}
    </>
  );
};

export default NoteStatus;
