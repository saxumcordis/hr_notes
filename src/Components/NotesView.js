import React from 'react';
import {ProgressBar} from "./ProgressBar";
import {GlobalNotes} from "../Notes/GlobalNotes"
import {Link} from "react-router-dom";

const Note = ({note}) => {
    return (
        <div className="note">
            <ProgressBar id={note.id}/>
            <div className="note_info">
                <h3 className="note_header">{note.header}</h3>
                <div className="note_service">
                    <h3 className="note_func">Progress stat</h3>
                    <h3 className="note_func">Steps</h3>
                    <Link to={"/feedbacktree/" + note.id}><h3 className="note_func">FeedbackTree</h3></Link>
                </div>
                <h3 className="note_deadline">{note.deadline}</h3>
            </div>
        </div>
    );
};


const Notes = () => {
    const notes = GlobalNotes;
    return (
        <div className="notes_box">
            {notes.map(note => <Note note={note}/>)}
        </div>
    );
};

export {Notes}