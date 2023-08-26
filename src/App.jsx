import './App.css'
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import {useEffect, useState} from "react";
import uuid from "react-uuid";
function App() {

    //localStorageから値を持ってくる
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes") || []));
    const [activeNote, setActiveNote] = useState(false);

    useEffect(() => {
        //ローカルストレージにノートを保存する
        // "notes"はkeyの名前
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        console.log("新しくノートが追加されました");
        const newNote = {
            id: uuid(),
            title: "新しいノート",
            content: "",
            modDate: Date.now()
        };
        setNotes([...notes,newNote]);
        console.log(notes);
    };

    const onDeleteNote = (id) => {
        const filterNotes = notes.filter((note) => {
            return(
                note.id !== id
            );
        })
        setNotes(filterNotes);
    };

    const getActiveNote = () => {
        return notes.find((note) =>
            note.id === activeNote)
    };

    const onUpdatedNote = (updatedNote) => {
        //修正されたノートの配列を返す
        const updatedNotesArray = notes.map((note) => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            } else {
                return note;
            }
        })
        setNotes(updatedNotesArray);
    };



  return (
    <div className="App">
        <Sidebar
            onAddNote={onAddNote}
            notes={notes}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
            setActiveNote={setActiveNote}>
        </Sidebar>
        <Main getActiveNote={getActiveNote()} onUpdateNote={onUpdatedNote}></Main>
    </div>
  )
}


export default App


