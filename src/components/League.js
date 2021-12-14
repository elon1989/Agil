import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { getGame} from './GameSlice'

function League(){
    const url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';
    const [hero, setHero] = useState(null);
    const [selectedHero, setSelectedHero] = useState(0);
    
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHero(response.data)
        })
    }, [url])
    
    

    const dispatch = useDispatch();

    const handlegetGame = () => {
        dispatch(getGame());
    };

    

    if(hero){
        const test = []
    const newArray = Object.entries(hero.data).map((item, i) => {
        test.push(item)
    });
    console.log(test[0])
        
        return (
            <>
                <div className="hero_wrapper">   
                    {test.length ? test.map((item, i) => {
                        console.log(item)
                        if(i == selectedHero) {
                            return (
                                <div className={'hero_item' + ' ' + item[0]}>
                                    <div className="heroleft">
                                        <div>Base attack: {item[1].info.attack}</div>
                                        <div>Base defense: {item[1].info.defense}</div>
                                        <div>Base difficultiy: {item[1].info.difficulty}</div>
                                        <div>Base magic: {item[1].info.magic}</div>
                                    </div>
                                    <div className="herocenter">
                                        <h1>{item[0]}</h1>
                                        <div className="heroImg"><img className="heroPic" src={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + item[0] + '_0.jpg'}/></div>
                                    </div>
                                    <div className="heroright">
                                        <div>{item[1].title}</div> 
                                    </div>
                                </div>)
                            }
                            else {
                                return (
                                <div className={'herodiv' + ' ' + item[0]} onClick={()=>setSelectedHero(i)}>
                                    <h1>{item[0]}</h1>
                                    <div>{item[1].title}</div> 
                                    <div><img className="champImg" src={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + item[0] + '_0.jpg'}/></div>
                                </div>)}
                            }) : ''}
                </div>
                
            </>
        )
    } else { 
        return (
            <div>
                hej
            </div>
        )
    }
}

export default League