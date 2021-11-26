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
        console.log(hero.length)
        return (
            <>
                <ul>
                    
                    {hero.length ? hero.map((i) => {
                    console.log(i)
                    return (<>
                    <li><h1>{i.localized_name}</h1></li>
                    <li>{Math.round(i.pro_win / i.pro_pick * 100)}% Win rate </li>
                    <img src={'https://steamcdn-a.akamaihd.net/' + i.icon}/>
                    </>)
                    }): ''}
                </ul>
                
            </>
        )
    }
    return (
        <div>

        </div>
    )
}

export default Heroes