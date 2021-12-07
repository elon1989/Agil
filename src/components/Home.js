import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import Heroes from './Heroes'
import Steam from '../img/steam.png'
import Dota from '../img/dota-logo.png'
import Hon from '../img/hon-logo.png'
import Lol from '../img/lol-logo.png'

function Home() {
    return (
        <div className="home">
            <div className="left-column">
                <div className="title">
                    <h1>LATEST NEWS FROM MOBA COMMUNITY</h1>
                </div>
                <div className="newsflow"> mi, commodo eget metus in, aliquet blandit dui. Nam iaculis diam hendrerit ultrices fermentum. Donec nunc orci, dapibus in ultricies id, pretium quis magna.</div>
            </div>
            <div className="center-column">
            <div className="title">
                    <h1>TOP STATS</h1>
                </div>
                <div className="stats">
                    <h3>DOTA STATS</h3>
                    <span className="small-button"><Link to='/heroes' className="navItem" element={Heroes}>Read more</Link></span>
                </div>
                <div className="stats">
                    <h3>LOL STATS</h3>
                    <span className="small-button"><Link to='/heroes' className="navItem" element={Heroes}>Read more</Link></span>
                </div>
                <div className="stats">
                    <h3>HoN STATS</h3>
                    <span className="small-button"><Link to='/heroes' className="navItem" element={Heroes}>Read more</Link></span>
                </div>
            </div>
            <div className="right-column">
            <div className="title">
                    <h1>LINKS</h1>
                </div>
                <img className="logos" src={Steam} alt=""></img><p>Steam</p>
                <img className="logos" src={Dota} alt=""></img><p>DOTA 2</p>
                <img className="logos" src={Hon} alt=""></img><p>Heroes of Newerth</p>
                <img className="logos" src={Lol} alt=""></img><p>League of Legends</p>
            </div>
        </div>
    )
}

export default Home
