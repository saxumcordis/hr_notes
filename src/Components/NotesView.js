import React from 'react';
import {ProgressBar} from "./ProgressBar";
import {GlobalNotes} from "../Notes/GlobalNotes"
import {Link} from "react-router-dom";

const NoteFull = ({id, setActiveNote}) => {
    const note = GlobalNotes.filter(e => e.id === id)[0];
    return (
        <div className="note_full">
            <h3 className="note_header" style={{textAlign: 'left', marginTop: "15px", marginLeft: "15px"}}>{note.header}</h3>
            <p><span className="note_field">ОПИСАНИЕ:</span> Придумать, описать и визуализировать продуктовое решение для трекинга целей и задач сотрудников.</p>
            <p><span className="note_field">ОЖИДАЕМЫЙ РЕЗУЛЬТАТ:</span> От команды ожидается проработанная концепцию, формирование видения и основной ценности продукта, а также визуализацию в виде интерфейсов или любых других визуальных элементов, раскрывающих идею.</p>
            <p><span className="note_field">УЧАСТНИКОВ: </span> 3/5</p>
            <p onClick={() => setActiveNote(null)} style={{cursor: "pointer"}}><span className="note_field">back</span></p>
        </div>
    )
};

const Note = ({note, setActiveNote}) => {
    return (
        <div className="note">
            <ProgressBar id={note.id}/>
            <div className="note_info">
                <h3 className="note_header" onClick={() => setActiveNote(note.id)}>{note.header}</h3>
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


const Notes = ({setActiveNote}) => {
    const notes = GlobalNotes;
    return (
        <div className="notes_box">
            {notes.map(note => <Note note={note} setActiveNote={setActiveNote}/>)}
        </div>
    );
};

export {Notes, NoteFull}