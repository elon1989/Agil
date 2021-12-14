import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import Heroes from './Heroes'
import League from './League'
import About from './About'
import Home from './Home'
import Logo from '../img/logo-v1.png'


function Nav() {
    return (
        <header>
            <nav>
            <Link to='/' className="navItem" element={Home}><img src={Logo} alt=""></img></Link>
            <ul className="navMenu">
                <li>
                    <span className="menu-button"><Link to='/League' className="navItem" element={League}>League of legends</Link></span>
                </li>
                <li>
                    <span className="menu-button"><Link to='/heroes' className="navItem" element={Heroes}>DOTA 2</Link></span>
                </li>
                <li>
                    <span className="menu-button">Heroes of Newerth</span>

                </li>
                <li>
                    <span className="menu-button"><Link to='/about' className="navItem" element={About}>About</Link></span>
                </li>
              </ul>
            </nav>
        </header>

    );

}

export default Nav;