import "./Sidebar.css";
import PropTypes from "prop-types";

const Sidebar = ({onAddNote}) => {

    Sidebar.propTypes = {
        onAddNote: PropTypes.func.isRequired
    };

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>ノート</h1>
                <button onClick={onAddNote}>追加</button>
            </div>

            <div className="app-sidebar-notes">
                <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>タイトル</strong>
                        <button>削除</button>
                    </div>
                    <p>ノートの内容です</p>
                    <small>最後の修正日: xx/xx</small>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;