import React, {useState} from 'react';
import {Link} from "react-router-dom";


const Friends = () => {
    return (
        <div className="friends">
            <div className="friends_left">
                <img className="my_tree" style={{marginLeft: "15px"}}
                     src="https://pngimg.com/uploads/tree/tree_PNG92769.png"/>
            </div>
            <div className="friends_right">
                <div className="tasks">
                    <h3 style={{marginLeft: "50px"}}>ОБЩИЕ ЗАДАЧИ</h3>
                    <div className="friend">
                        <img style={{padding: "15px 0"}} className="small_profile"
                             src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"/>
                        <div className="friends_tasks">
                            <ul className="friend_task">
                                <li style={{minWidth: "400px"}} className="list_idea none">придумать идею трекера задач
                                    для
                                    Сбербанка
                                </li>
                                <li style={{padding: "6px 25px"}}><strong>обсудить</strong></li>
                            </ul>
                            <ul className="friend_task">
                                <li style={{minWidth: "400px"}} className="list_idea">подготовить презентацию идеи</li>
                                <li style={{padding: "6px 25px"}}><strong>обсудить</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className="friend">
                        <img style={{padding: "15px 0"}} className="small_profile"
                             src="https://theskincareedit.com/.image/t_share/MTU2ODk4NTU2MTMyNDY4MzM2/how-to-take-a-great-profile-picture-chin-forward.jpg"/>
                        <div className="friends_tasks">
                            <ul className="friend_task">
                                <li style={{minWidth: "400px"}} className="list_idea none">придумать идею трекера задач
                                    для
                                    Сбербанка
                                </li>
                                <li style={{padding: "6px 25px"}}><strong>обсудить</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="friend_search">
                        <h3 style={{marginLeft: "50px"}}>НАЙТИ ДРУГА</h3>
                        <input className="friend_search_input" placeholder="поиск"/>
                        <p style={{marginLeft: "50px", fontSize: "14px", color: "rgb(179,216,140)"}}>поиск по ФИО, должности, отделу, по компетенциям</p>
                </div>
            </div>
        </div>
    );
};

export {Friends};