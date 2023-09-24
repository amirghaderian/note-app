const AddNewNote = () => {
  const handleSubmite = (e) => {
    e.preventDefault()
    console.log(e);
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmite}>
        <input type="text" className="text-field" placeholder="Note title ..." />
        <input type="text" className="text-field" placeholder="Note description ..."/>
        <button type="submit" className="btn btn--primary">Add New Note</button>
      </form>
      
    </div>
  );
};

export default AddNewNote;
