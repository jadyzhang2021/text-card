import { LinearProgress } from "@mui/material";
const CreateNote = ({ inputText, addNote, handleText }) => {
  const charLimit = 100;
  const charleft = charLimit - inputText.length;

  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        value={inputText}
        placeholder="'Type.."
        maxLength={100}
        onChange={handleText}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charleft} left</span>
        <button className="note__save" onClick={addNote}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charleft}
      />
    </div>
  );
};

export default CreateNote;
//onClick={addNote}
