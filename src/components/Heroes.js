import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Heroes(){
    const url = 'https://api.opendota.com/api/heroStats';
    const [hero, setHero] = useState(null);
    const [selectedHero, setSelectedHero] = useState(2);



    /* function selectHero(){
    } */

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHero(response.data)
            
        })
    }, [url])

    if(hero){
        console.log(hero)
        return (
            <>
                <div className="hero_wrapper">
                    
                    {hero.length ? hero.map((i) => {
                        if(i.id == 1) {
                            return (
                            <div className={'hero_item' + ' ' + i.localized_name}>
                                <h1>{i.localized_name}</h1>
                                <div>{Math.round(i.pro_win / i.pro_pick * 100)}% Win rate</div> 
                                <div className="heroImg"><img src={'https://steamcdn-a.akamaihd.net/' + i.img}/></div>
                            </div>)
                        } else {
                            return (
                            <div className={'herodiv' + ' ' + i.localized_name}>
                                <h1>{i.localized_name}</h1>
                                <div>{Math.round(i.pro_win / i.pro_pick * 100)}% Win rate</div> 
                                <div className="heroImg"><img src={'https://steamcdn-a.akamaihd.net/' + i.icon}/></div>
                            </div>)}
                        }): ''}
                </div>
                
            </>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Heroes