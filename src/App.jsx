import './App.css'
import Sidebar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";

function App() {

    const onAddNote = () => {
        console.log("新しくノートが追加されました");
    };

  return (
    <div className="App">
        <Sidebar onAddNote={onAddNote}></Sidebar>
        <Main></Main>
    </div>
  )
}

export default App
