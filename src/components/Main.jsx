import "./Main.css";
import PropTypes from "prop-types";


// eslint-disable-next-line react/prop-types
const Main = ({getActiveNote, onUpdateNote}) => {

    const onEditNote = (key, value) => {
        onUpdateNote({
            ...getActiveNote,
            [key]: value,
            modDate: Date.now(),
        });
    };

    if (!getActiveNote) {
        return <div className="no-active-note">ノートが選択されていません</div>;
    }

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input id="title" type="text" value={getActiveNote.title}
                       onChange={(e) => {onEditNote("title", e.target.value)}}>
                </input>
                <textarea id="content" placeholder="ノート内容を記入" value={getActiveNote.content}
                          onChange={(e) => {onEditNote("content", e.target.value)}}></textarea>
            </div>
            <div className="app-name-note-preview">
                <h1 className="preview-title">{getActiveNote.title}</h1>
                <div className="markdown-preview">{getActiveNote.content}</div>
            </div>
        </div>
    );
};

Main.propTypes = {
    getActiveNote: PropTypes.object
}

export default Main;