import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notess from "../notesInfo";

function App() {
  return (
    <div>
      <Header />
      {notess.map((noteItem) => (
        <Note
          key={noteItem.key}
          heading={noteItem.title}
          paragraph={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
