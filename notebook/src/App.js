import React, { useState } from "react";
import Input from "./Components/Input";
import Notes from "./Components/Notes";
function App() {
  const [noteList , setNoteList]= useState([]);

  function addNewNote(note){
    setNoteList((notes)=>{
      return ([...notes,note]);
    })
  }


  return (
    <div className="App">
      <Input
        addNote={addNewNote}
      />
      <Notes
      notes={noteList} 
      setNotes={setNoteList}
      />
    </div>
  );
}

export default App;
