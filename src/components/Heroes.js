import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {changeURL, getGame} from './GameSlice'

function Heroes(){
    const url = 'https://api.opendota.com/api/heroStats';
    const [hero, setHero] = useState();
    const [selectedHero, setSelectedHero] = useState(1);
    const [updatedArray, setUpdatedArray] = useState([]);

    
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHero(response.data)
        })
    }, [url])
    


    
    const SortAlphabetically = () => {
        let newArray = hero.sort((a, b) => a.localized_name.localeCompare(b.localized_name));
            setHero(newArray);
            console.log(newArray)
    }


    
    function SortWinRate() {
        hero.sort((a, b) => b.winrate - a.winrate)
    }

    function logThing() {
        console.log(hero)
    }

     function winRate() {
         let winArray = hero.map((i) => Math.round(i.pro_win / i.pro_pick * 100));
         for (let i = 0; i < hero.length; i++) {
             hero[i].winrate = winArray[i];
            }
 }

    const dispatch = useDispatch();

    const handlegetGame = () => {
        dispatch(getGame());
    };

    

    if(hero){

       /* <button onClick={()=>handlegetGame()}></button>*/
<<<<<<< HEAD

        winRate();    
        // Kommer att lägga till knappar med onclick för funktionerna sen    
        SortAlphabetically();
=======
        winRate();    
        // Kommer att lägga till knappar med onclick för funktionerna sen    
      //  SortAlphabetically();
>>>>>>> 950a0a56b8ca8d727bfdd8f4eca0026aef7c152b
        SortWinRate();

        return (
            <>
<<<<<<< HEAD
=======
            <button className='sort_button' onClick={() => SortAlphabetically()}>Sort</button>
            <button className='sort_button' onClick={()=>logThing()}>Log</button>
>>>>>>> 950a0a56b8ca8d727bfdd8f4eca0026aef7c152b
                <div className="hero_wrapper">   
                    {hero.length ? hero.map((i) => {
                        if(selectedHero == i.id) {
                            return (
                            <div className={'hero_item' + ' ' + i.localized_name}>
                                <div className="heroleft">
                                    <div>Base agi: {i.base_agi}</div>
                                    <div>Base str: {i.base_str}</div>
                                    <div>Base int: {i.base_int}</div>
                                </div>
                                <div className="herocenter">
                                    <h1>{i.localized_name}</h1>
                                    <div className="heroImg"><img className="heroPic" src={'https://steamcdn-a.akamaihd.net/' + i.img}/></div>
                                </div>
                                <div className="heroright">
<<<<<<< HEAD
                                    <div>{Math.round(i.pro_win / i.pro_pick * 100)}% Win rate</div> 
=======
                                    <div>{i.winrate}% Win rate</div> 
>>>>>>> 950a0a56b8ca8d727bfdd8f4eca0026aef7c152b
                                </div>
                            </div>)
                        } else {
                            return (
                            <div className={'herodiv' + ' ' + i.localized_name} onClick={()=>setSelectedHero(i.id)}>
                                <h1>{i.localized_name}</h1>
                                <div>{i.winrate}% Win rate</div> 
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