import "../style/Note.css";
const Note = ({ text, deleteNote, id }) => {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__fotter" style={{ justifyContent: "flex-end" }}>
        <button onClick={() => deleteNote(id)} className="note__save">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
