import React, {useState} from 'react';
import {Link} from "react-router-dom";

const BossTasks = () => {
    return (
        <div className="friends">
            <div className="friends_left">
                <img className="my_tree" src='https://psv4.userapi.com/c856224/u89830763/docs/d17/7b6e98204c9a/tree_5.png?extra=g1Ycn9hQzOT-Ufabgn1c-VurVhNmWPE7DWGn2et3BmW7IYczXFhYNat_4c1dcm-LT-tDxZCJDIWGVVYgbdGYi5UnfIdMtiIPGf_EPhbxYyhmRGCkzdC8o0yI5N0b5SzESN0XFWwzGR8q13nA-YGQ'/>
            </div>
            <div className="friends_right">
                <div className="first">
                    <img style={{width: "50px", height: "50px"}}src='https://cdn.iconscout.com/icon/free/png-512/mail-1138-827052.png'/>
                    <div className="first_text">
                        <h3 style={{marginTop: "0"}}>ВХОДЯЩИЕ</h3>
                        <h3 style={{marginTop: "3px"}}>Новая задача: прописать путь клиента</h3>
                        <h3 style={{marginTop: "5px", fontSize: "16px"}}>Беру в работу | нужны пояснения | переслать | пригласить в команду</h3>
                    </div>
                </div>
                <div className="second">
                    <h3>ОБСУЖДЕНИЯ</h3>
                    <li className="list_idea none">придумать идею трекера задач для Сбербанка</li>
                    <li className="list_idea"><strong>подготовить презентацию идеи</strong> <span style={{color: "rgb(214,224,62)"}}>есть новое сообщение</span></li>
                    <li className="list_idea">проработать MVP</li>
                </div>
                <div className="third">
                    <h1 style={{marginLeft: "65px", marginTop: "50px"}}>Развернуть список задач</h1>
                </div>
            </div>
        </div>
    );
};

export {BossTasks};