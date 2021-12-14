import React from 'react'
import '../App.css';
import Philip from '../img/philip.jpg'
import Elon from '../img/elon.jpg'
import Jonathan from '../img/jonathan.jpg'

function About() {
    return (
        <div className="about-wrapper">
            <h1>ABOUT US</h1>
                <div className="friends">
                    <div className="persons">
                       <img src={Elon}></img>
                        <h3>Elon Månsson</h3>
                        <p>Favorite hero: <p><span className="questionHighlight">Invoker - DOTA 2</span></p></p>
                        <p>First MOBA ever played: <p><span className="questionHighlight">Dota</span></p></p>
                        <p>Number of games: <p><span className="questionHighlight">200(?)</span></p></p>
                        <p>Best gaming memory: <p><span className="questionHighlight">Beating a semipro in dota 2</span></p></p>
                    </div>
                    <div className="persons">
                        <img src={Jonathan}></img>
                        <h3>Jonathan Vigren</h3>
                        <p>Favorite hero: <p><span className="questionHighlight">Enchantress - DOTA 2</span></p></p>
                        <p>First MOBA ever played: <p><span className="questionHighlight">League of Legends</span></p></p>
                        <p>Number of games: <p><span className="questionHighlight">3440</span></p></p>
                        <p>Best gaming memory: <p><span className="questionHighlight">Idk mitt minne suger</span></p></p>
                        </div>
                    
                    <div className="persons">
                        <img src={Philip}></img>
                        <h3>Philip Hjelmberg</h3>
                        <p>Favorite hero: <p><span className="questionHighlight">Lunara - Heroes of the Storm</span></p></p>
                        <p>First MOBA ever played: <p><span className="questionHighlight">DOTA</span></p></p>
                        <p>Number of games: <p><span className="questionHighlight">1200+</span></p></p>
                        <p>Best gaming memory: <p><span className="questionHighlight">When i spoke to HeatoN on DH</span></p></p>
                    </div>
                </div>
        </div>
    )
}

export default About
