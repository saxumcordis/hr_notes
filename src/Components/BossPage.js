import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {ProgressBar} from "./ProgressBar";

const workers = [{
    id: 0,
    name: "Alexander",
    photo: "https://photo-ideal.ru/upload/iblock/6b3/foto_na_rezyume_37.jpg",
},
    {
        id: 1,
        name: "Nikolay",
        photo: "https://photo-ideal.ru/upload/iblock/66a/foto_na_rezyume_50.jpg",
    },
    {
        id: 2,
        name: "Vladimir",
        photo: "https://photo-ideal.ru/upload/iblock/f01/foto_na_rezyume_16.jpg",
    },
    {
        id: 3,
        name: "Viktoria",
        photo: "https://photo-ideal.ru/upload/iblock/041/foto_na_rezyume_7.jpg"
    },
    {
        id: 4,
        name: "Marina",
        photo: "https://photo-ideal.ru/upload/iblock/f26/foto_na_rezyume_32.jpg"
    }];

const Worker = ({activeWorker, setActiveWorker, worker}) => {
    const activeWorkerStyle = {
        "border": "3px solid #12d37b"
    };

    return (
        <div className="worker" style={worker.id === activeWorker ? activeWorkerStyle : null}
             onClick={() => setActiveWorker(worker.id)}>
            <img className="worker_photo" src={worker.photo}/>
            <h3 className="worker_name">{worker.name}</h3>
        </div>
    );
};

const WorkersList = ({activeWorker, setActiveWorker}) => {

    return (
        <div className="workers_list">
            {workers.map(worker => <Worker worker={worker} activeWorker={activeWorker}
                                           setActiveWorker={setActiveWorker}/>)}
        </div>
    );
};

const BossMenu = () => {
    return (
        <div className="boss_menu">
            <li>Новое задание</li>
            <li>Текущих заданий: 5</li>
            <li>Ожидание фидбека: 1</li>
        </div>
    )
};

const WorkerFull = ({id}) => {
    const [currentTasks, setTask] = useState(0);
    const worker = workers.filter(e => e.id === id)[0];
    return (<div className="note_full">
        <img style={{width: "200px", marginLeft: "15px", marginTop: "15px", borderRadius: "5px"}} src={worker.photo}/>
        <ul>
            <p style={{marginTop: 0}}>{worker.name}</p>
            <li>Статистика</li>
            <li className="note_field" style={{cursor: "pointer"}} onClick={() => setTask(!currentTasks)}>Текущие задания</li>
        </ul>
        <div className="note">
            <ProgressBar id={1}/>
            <div className="note_info">
                <h3 className="note_header">Сдача проекта</h3>
                <div className="note_service">
                    <h3 className="note_func">Progress stat</h3>
                    <h3 className="note_func">Steps</h3>
                    <Link to={"/feedbacktree/" + 1}><h3 className="note_func">FeedbackTree</h3></Link>
                </div>
                <h3 className="note_deadline">02.08.20</h3>
            </div>
        </div>
    </div>)
};

const BossPage = () => {
    const [activeWorker, setActiveWorker] = useState(null);
    return (
        <div className="bosspage_box">
            <div className="bosspage_left">
                <WorkersList activeWorker={activeWorker} setActiveWorker={setActiveWorker}/>
                <BossMenu/>
            </div>
            <div className="bosspage_right">
                {activeWorker || activeWorker === 0 ? <WorkerFull id={activeWorker}/> : null}
            </div>
        </div>
    );
};

export {BossPage};