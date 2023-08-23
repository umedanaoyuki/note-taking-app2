import "./Sidebar.css";
import PropTypes from "prop-types";


const Sidebar = ({onAddNote, notes}) => {

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>ノート</h1>
                <button onClick={onAddNote}>追加</button>
            </div>

            <div className="app-sidebar-notes">
                {notes.map((note) => {
                    return(
                        <div className="app-sidebar-note" key={note.id}>
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button>削除</button>
                            </div>
                            <p>{note.content}</p>
                            <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}</small>
                        </div>)})}
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    onAddNote: PropTypes.func.isRequired,
    notes: PropTypes.func.isRequired
};

export default Sidebar;