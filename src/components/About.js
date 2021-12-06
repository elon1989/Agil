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
                    </div>
                    <div className="persons">
                        <img src={Jonathan}></img>
                        <h3>Jonathan Vigren</h3>
                        </div>
                    
                    <div className="persons">
                        <img src={Philip}></img>
                        <h3>Philip Hjelmberg</h3>
                    </div>
                </div>
        </div>
    )
}

export default About
