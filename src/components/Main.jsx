import React from 'react';
import "./Main.css";
import PropTypes from "prop-types";


const Main = ({getActiveNote}) => {

    if (!getActiveNote) {
        return <div className="no-active-note">ノートが選択されていません</div>
    }

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" value={getActiveNote.title}></input>
                <textarea id="" placeholder="ノート内容を記入" value={getActiveNote.content}></textarea>
            </div>
            <div className="app-name-note-preview">
                <h1 className="preview-title">タイトル</h1>
                <div className="markdown-preview">内容</div>
            </div>
        </div>
    );
};

Main.propTypes = {
    getActiveNote: PropTypes.object
}

export default Main;