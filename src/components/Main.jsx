import React from 'react';
import "./Main.css";
import PropTypes from "prop-types";


const Main = ({activeNote}) => {

    if (!activeNote) {
        return (<div className="no-active-note">ノートが選択されていません</div>)
    }


    return (
        <>
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text"></input>
                <textarea id="" placeholder="ノート内容を記入"></textarea>
            </div>
            <div className="app-name-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">{activeNote.content}</div>
            </div>
        </div>
        </>
    );
};

Main.propTypes = {
    activeNote: PropTypes.func.isRequired
}

export default Main;