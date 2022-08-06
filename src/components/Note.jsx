import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Note;
