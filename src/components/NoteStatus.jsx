const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const complitedNotes = notes.filter((n) => n.complited).length;
  const open = allNotes - complitedNotes;
  return (
    <>
      {allNotes ? (
        <ul className="note-status">
          <li>
            All <span>{allNotes}</span>
          </li>
          <li>
            Complited <span>{complitedNotes}</span>
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
