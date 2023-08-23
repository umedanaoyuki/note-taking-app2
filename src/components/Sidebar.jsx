import "./Sidebar.css";
import PropTypes from "prop-types";

const Sidebar = ({onAddNote, notes}) => {

    Sidebar.propTypes = {
        onAddNote: PropTypes.func.isRequired,
        notes: PropTypes.func.isRequired
    };

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>ノート</h1>
                <button onClick={onAddNote}>追加</button>
            </div>

            <div className="app-sidebar-notes">
                {notes.map((note) => {
                    return(
                        <div className="app-sidebar-note">
                            <div className="sidebar-note-title">
                                <strong>{note.title}</strong>
                                <button>削除</button>
                            </div>
                            <p>{note.content}</p>
                            <small>最後の修正日: {note.modDate}</small>
                        </div>)})}
            </div>
        </div>
    );
};

export default Sidebar;