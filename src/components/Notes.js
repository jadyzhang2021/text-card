import { useEffect, useState } from "react";
import Note from "./Note";
import "../style/Note.css";
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(true);

  const handleText = (e) => {
    setInputText(e.target.value);
  };

  const addNote = () => {
    //如果需要在更新state时参考之前的state
    // 可以在调用setstate 时传入一个回掉函数，该函数接受之前的state作为参数，返回新的state
    setNotes((prevState) => [...prevState, { id: uuid(), text: inputText }]);

    setInputText("");
  };
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (Array.isArray(data) && data.length > 0) {
      setNotes(data);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("Notes", JSON.stringify(notes));
    }
  }, [notes, loading]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          text={note.text}
          deleteNote={deleteNote}
          id={note.id}
        />
      ))}
      <CreateNote
        handleText={handleText}
        addNote={addNote}
        inputText={inputText}
      />
    </div>
  );
};

export default Notes;
