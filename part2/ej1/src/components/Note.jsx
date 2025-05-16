import React from "react";

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "make not important" : "make important";
  const style = {
    cursor: "pointer",
    color: note.important ? "green" : "black",
  };
  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
