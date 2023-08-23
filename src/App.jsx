import './App.css'
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import {useState} from "react";
import PropTypes from "prop-types";

function App() {

    const [notes, setNotes] = useState([]);

    const onAddNote = () => {
        console.log("新しくノートが追加されました");
        const newNote = {
            id: "1",
            title: "新しいノート",
            content: "新しいノートの内容",
            modDate: Date.now()
        };
        setNotes([...notes,newNote]);
        console.log(notes);

    };

  return (
    <div className="App">
        <Sidebar onAddNote={onAddNote} notes={notes}></Sidebar>
        <Main></Main>
    </div>
  )
}

export default App
