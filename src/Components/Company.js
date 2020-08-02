import React, {useState} from 'react';
import {Notes,NoteFull} from "./NotesView";


const Company = () => {
    const [activeNote, setActiveNote] = useState(null);

    return (
        <div className="company_box">
            <Notes setActiveNote={setActiveNote}/>
            {!activeNote ?
            <div className="company_main">
                <div className="company_my_tasks">
                <h3>СТРАТЕГИЧЕСКИЕ ЗАДАЧИ НА <u>МЕСЯЦ</u>, В КОТОРЫХ ВЫ УЧАСТВУЕТЕ</h3>
                    <ul>
                        <li className="list_idea">доработать ID до внедрения для клиентов</li>
                        <li className="list_idea">Найти 5 новых идей HR-проектов для повышения эффективности сотрудников</li>
                    </ul>
                </div>
                <div className="company_search_task">
                    <h3 style={{marginTop: "50px"}}>НАЙТИ ЗАДАЧУ ИЛИ ПРОЕКТ</h3>
                    <input className="friend_search_input" placeholder="поиск"/>
                    <p style={{marginLeft: "50px"}}>Результаты поиска:</p>
                    <p style={{marginLeft: "55px"}}> <span className="avail_task" onClick={() => setActiveNote(1)}>Разработать концепцию продукта HR Sber</span> <button>Хочу в команду</button> <button>Предложить другу</button></p>
                </div>
            </div>
            : <NoteFull id={activeNote} setActiveNote={setActiveNote}/>}
        </div>
    );
};


export {Company};