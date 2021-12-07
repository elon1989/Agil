import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {changeURL, getGame} from './GameSlice'

function Heroes(){
    const url = 'https://api.opendota.com/api/heroStats';
    const [hero, setHero] = useState(null);
    const [selectedHero, setSelectedHero] = useState(1);
    const [updatedArray, setUpdatedArray] = useState([]);

    
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
        /* console.log(hero) */
        newArray()
        return (
            <>
            <button onClick={()=>handlegetGame()}></button>
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
    } else {
        return (
            <div>
    
            </div>
        )
    }
}

export default Heroes