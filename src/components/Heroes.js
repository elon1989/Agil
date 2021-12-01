import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Heroes(){
    const url = 'https://api.opendota.com/api/heroStats';
    const [hero, setHero] = useState(null);
    const [selectedHero, setSelectedHero] = useState(1);



    /* function selectHero(){
    } */

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHero(response.data)
            
        })
    }, [url])
    


    function SortAlphabetically() {
        hero.sort((a, b) => a.localized_name.localeCompare(b.localized_name))
    }

    // function winRate() {
    //     for (let i = 0; i < hero.length;  i++) {
    //     let winrate = Math.round(hero[i].pro_win / hero[i].pro_pick * 100) + '% Win Rate';
    //     hero.forEach(function (element) {
    //         element.winrate = winrate;
    //     })   
    //     console.log(winrate)
    // }
    // }

    if(hero){

        SortAlphabetically();
        // winRate();      
        
        console.log(hero)

        return (
            <>
                <div className="hero_wrapper">
                    
                    {hero.length ? hero.map((i) => {
                        if(selectedHero == i.id) {
                            return (
                            <div className={'hero_item' + ' ' + i.localized_name}>
                                <h1>{i.localized_name}</h1>
                                <div>{Math.round(i.pro_win / i.pro_pick * 100)}% Win rate</div> 
                                <div className="heroImg"><img src={'https://steamcdn-a.akamaihd.net/' + i.img}/></div>
                            </div>)
                        } else {
                            return (
                            <div className={'herodiv' + ' ' + i.localized_name} onClick={()=>setSelectedHero(i.id)}>
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