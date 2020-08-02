import React, {useState} from 'react';
import {Link} from "react-router-dom";


const MyPage = () => {
    return (
        <div className="mypage">
            <div className="mypage_left">
                <img className="my_tree"
                     src="https://i.pinimg.com/originals/0b/f6/33/0bf633533c2c5f01ddeb3b823727c5ea.png"/>
                <div className="mypage_stats">
                    <ul className="mystats_list boss_menu">
                        <li>Мой дневник</li>
                        <li>Всего задач: 8</li>
                        <li>Выполнено: 3</li>
                    </ul>
                    <ul className="mystats_list boss_menu">
                        <li>Моя статистика</li>
                        <Link to="/myhead"><li>Моё управление</li></Link>
                    </ul>
                </div>
            </div>
            <div className="mypage_right">
                <div className="mypage_first">
                    <table>
                        <tr>
                            <th style={{textAlign: "left", padding: "0 40px"}}><h2>В РАБОТЕ</h2></th>
                            <th>прогресс</th>
                            <th>время затрачено</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>
                                <li className="list_idea none">придумать идею трекера задач для Сбербанка</li>
                            </td>
                            <td className="table_margin success">100 %</td>
                            <td className="table_margin time">1 ч</td>
                            <td><img className="small_profile"
                                     src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"/>
                                <img className="small_profile"
                                     src="https://theskincareedit.com/.image/t_share/MTU2ODk4NTU2MTMyNDY4MzM2/how-to-take-a-great-profile-picture-chin-forward.jpg"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <li className="list_idea">подготовить презентацию идеи</li>
                            </td>
                            <td className="table_margin almost">50 %</td>
                            <td className="table_margin time">2 ч</td>
                        </tr>
                        <tr>
                            <td>
                                <li className="list_idea">проработать MVP</li>
                            </td>
                            <td className="table_margin quarter">25 %</td>
                            <td className="table_margin time">2 ч</td>
                        </tr>
                        <tr>
                            <td style={{padding: "0px 40px"}}><strong>больше задач >>></strong></td>
                        </tr>
                    </table>
                </div>
                <div className="mypage_second">
                    <h3 style={{marginLeft: "65px", marginTop: "50px"}}>МОИ ВСТРЕЧИ СЕГОДНЯ</h3>
                    <table>
                        <tr>
                            <td className="table_margin">Время</td>
                            <td className="table_margin">Тема</td>
                            <td className="table_margin">Длительность</td>
                        </tr>
                        <tr>
                            <td className="success">15:45</td>
                            <td>Придумать идею трекера задач для Сбербанка</td>
                            <td style={{textAlign: "center"}}>1 ч</td>
                            <td><img className="small_profile"
                                     src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"/>
                                <img className="small_profile"
                                     src="https://theskincareedit.com/.image/t_share/MTU2ODk4NTU2MTMyNDY4MzM2/how-to-take-a-great-profile-picture-chin-forward.jpg"/>
                            </td>
                        </tr>
                    </table>
                    <p style={{padding: "0px 65px"}}><strong>больше встреч >>></strong></p>
                </div>
            </div>
        </div>
    );
};

export {MyPage};