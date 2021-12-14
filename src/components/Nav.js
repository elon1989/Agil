import React, {useState} from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import Heroes from './Heroes'
import About from './About'
import Home from './Home'
import Logo from '../img/logo-v1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'





function Nav() {
    const [showMenu, setShowMenu] = useState(false)

    let mobileMenu 
    
    if(showMenu){
        mobileMenu = 
            <div className="full-mobile">
                <h2>Menu</h2>
                <nav className="navPosMobile">
                    <ul className="mobileNavMenu">
                        <li className="menuSpace">
                            <span className="mobile-menu-button">League Of Legends</span>
                        </li>
                        <li className="menuSpace">
                            <span className="mobile-menu-button"><Link to='/heroes' className="mobNavItem" element={Heroes} onClick={() => setShowMenu(false)}>DOTA 2</Link></span>
                        </li>
                        <li className="menuSpace">
                            <span className="mobile-menu-button"><Link to='/about' className="mobNavItem" element={About} onClick={() => setShowMenu(false)}>About</Link></span>
                        </li>
                    </ul>
                </nav>
            </div>
    }

    return (
        <header>
            <nav>
            <Link to='/' className="navItem" element={Home}><img src={Logo} alt="" onClick={() => setShowMenu(false)}></img></Link>
            <ul className="navMenu">
                <li>
                    <span className="menu-button">League Of Legends</span>
                </li>
                <li>
                    <span className="menu-button"><Link to='/heroes' className="navItem" element={Heroes}>DOTA 2</Link></span>
                </li>
                <li>
                    <span className="menu-button"><Link to='/about' className="navItem" element={About}>About</Link></span>
                </li>
              </ul>
            </nav>
            <span className="mobNav">
                  <FontAwesomeIcon icon={faBars}
                  onClick={() => setShowMenu(!showMenu)}
                  />
              </span>
              { mobileMenu }
        </header>

    );

}

export default Nav;