import React, {useState} from 'react';
import {Link} from "react-router-dom";

const activeMenu = {
    'text-shadow': '1px 1px 1px black, 0 0 1em rgb(214,224,62)',
};

const disabledMenu = {
    'opacity': '0.7',
}

const Header = () => {
    const [activeField, setActiveField] = useState('company');

    const handleActiveField = (menu) => setActiveField(menu);

    return (
       <div className="header">
           <ul className="menu">
               <Link to="/"><li onClick={() => handleActiveField('company')} style={activeField === 'company' ? activeMenu : null}>COMPANY</li></Link>
               <li style={disabledMenu}>BOSS</li>
               <li style={disabledMenu}>ME</li>
               <li style={disabledMenu}>FRIENDS</li>
           </ul>
       </div>
    );
};

export {Header};