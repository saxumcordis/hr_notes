import React from 'react';
import {ProgressBar} from "./ProgressBar";

const Note = () => {
    return (
        <div className="note">
            <ProgressBar/>
            <div className="note_info">
                dasdsa
            </div>
        </div>
    );
};


const Notes = () => {
    return (
        <div className="notes_box">
            <Note/>
        </div>
    );
};

export {Notes}