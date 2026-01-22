import React from "react";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, SetNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "20/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "25/04/2021",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
