import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import Heroes from './Heroes'
import About from './About'


function Nav() {
    return (
        <header>
            <nav>
            <h3>Logo</h3>
            <ul className="navMenu">
                <li>
                    League Of Legends
                </li>
                <li>
                    <Link to='/heroes' style={{color: "#fff", textDecoration: "none"}} element={Heroes}>DOTA 2</Link>
                </li>
                <li>Heroes of Newerth</li>
                <li>
                <Link to='/about' style={{color: "#fff", textDecoration: "none"}} element={About}>About</Link>
                </li>
              </ul>
            </nav>
        </header>

    );

}

export default Nav;