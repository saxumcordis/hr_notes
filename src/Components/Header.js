import React, {useState} from 'react';
import {Link} from "react-router-dom";

const activeMenu = {
    'text-shadow': '1px 1px 1px black, 0 0 1em rgb(214,224,62)',
};

const disabledMenu = {
    'opacity': '0.7',
}

const Header = () => {
    const [activeField, setActiveField] = useState(window.location.pathname);
    const handleActiveField = (menu) => setActiveField(menu);

    return (
       <div className="header">
           <ul className="menu">
               <Link to="/"><li onClick={() => handleActiveField('/')} style={activeField === '/' ? activeMenu : null}>COMPANY</li></Link>
               <Link to="/bosstasks"><li onClick={() => handleActiveField('/bosstasks')} style={activeField === '/bosstasks' ? activeMenu : null}>BOSS</li></Link>
               <Link to="/mypage"><li onClick={() => handleActiveField('/mypage')} style={activeField === '/mypage' ? activeMenu : null}>ME</li></Link>
               <Link to="/friends"><li onClick={() => handleActiveField('/friends')} style={activeField === '/friends' ? activeMenu : null}>FRIENDS</li></Link>
               
           </ul>
       </div>
    );
};

export {Header};