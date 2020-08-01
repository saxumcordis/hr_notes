import React, {useState} from 'react';
import {Link} from "react-router-dom";


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

const WorkersList = () => {
    const [activeWorker, setActiveWorker] = useState(null);

    const workers = [{
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
}

const BossPage = () => {
    return (
        <div className="bosspage_box">
            <div className="bosspage_left">
                <WorkersList/>
                <BossMenu/>
            </div>
        </div>
    );
};

export {BossPage};