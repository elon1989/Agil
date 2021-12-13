import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import {changeURL, getGame} from './GameSlice'

function Heroes(){
    const url = 'https://api.opendota.com/api/heroStats';
    const [hero, setHero] = useState();
    const [legAmount, setLegAmount] = useState([]);
    const [selectedHero, setSelectedHero] = useState(1);
    const [updatedArray, setUpdatedArray] = useState([]);
 
    var legArray = 
    [
        2,
        2,4,2,2,
        2,2,2,6,
        0,0,2,2,
        2,0,6,2,
        2,2,2,2,
        2,2,2,2,
        2,0,2,2,
        2,2,0,2,
        2,2,2,2,
        2,0,2,2,
        2,2,2,2,
        0,6,2,2,
        2,4,2,2,
        2,2,2,4,
        2,2,8,2,
        4,2,4,6,
        0,0,2,2,
        4,2,4,2,
        2,4,4,2,
        2,2,6,10,
        2,2,2,2,
        4,6,0,6,
        0,2,2,0,
        2,4,4,4,
        2,2,2,6,
        2,2,6,2,
        2,4,2,2,
        2,2,2,2,
        2,2,2,2,
        2,6,2,2
    ];

    useEffect(() => {
        setLegAmount(legArray)
    },[])

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setHero(response.data)
        })
    }, [url])
    
    
    const SortAlphabetically = () => {
        let newArray = hero.sort((a, b) => a.localized_name.localeCompare(b.localized_name));
            setHero([...newArray]);
            console.log(newArray)
    }

    const SortAlphabeticallyReverse = () => {
        let newArray = hero.sort((a, b) => b.localized_name.localeCompare(a.localized_name));
            setHero([...newArray]);
            console.log(hero)
    }

    function SortWinRate() {
        console.log(hero)
        let newArray = hero.sort((a, b) => b.winrate - a.winrate)
        setHero([...newArray]);
        console.log(hero);
    }

    function SortWinRateReverse() {
        console.log(hero)
        let newArray = hero.sort((a, b) => a.winrate - b.winrate);
        setHero([...newArray]);
        console.log(hero)
    }

    function SortLegs() {
        let newLegArray = legAmount.sort(function(a,b) { return b - a; });
        let newArray = hero.sort((a, b) => b.legs - a.legs);
        setLegAmount([...newLegArray]);        
        setHero([...newArray]);
        console.log(hero);
    }

    function SortLegsReverse() {
        let newLegArray = legAmount.sort(function(a,b) { return a - b; });
        let newArray = hero.sort((a, b) => a.legs - b.legs)
        setHero([...newArray]);
        setLegAmount([...newLegArray]);
        console.log(hero)
    }



     function winRate() {
         let winArray = hero.map((i) => Math.round(i.pro_win / i.pro_pick * 100));
         for (let i = 0; i < hero.length; i++) {
             hero[i].winrate = winArray[i];
            }
            
            console.log(hero)
 }

 function legCount() {
     let newLegArray = legAmount.map(obj => { let lObj = obj; return lObj});
    for (let i = 0; i < hero.length; i++) {
        hero[i].legs = newLegArray[i];
        }
        console.log(hero)
}
    const dispatch = useDispatch();

    const handlegetGame = () => {
        dispatch(getGame());
    };

    

    if(hero){

       /* <button onClick={()=>handlegetGame()}></button>*/
        winRate();  
        legCount();
        // Kommer att lägga till knappar med onclick för funktionerna sen    
      //  SortAlphabetically();
      //  SortWinRate();

        return (
            <>
            <div className='sortSection'>
            <div className='sortContainer'>
            <button className='sort_button' onClick={() => SortAlphabetically()}>Sort ABC+</button>
            <button className='sort_button' onClick={() => SortAlphabeticallyReverse()}>Sort ABC-</button>
            </div>
            <div className='sortContainer'>
            <button className='sort_button' onClick={() => SortWinRate()}>Sort Winrate+</button>
            <button className='sort_button' onClick={() => SortWinRateReverse()}>Sort Winrate-</button>
            </div>
            <div className='sortContainer'>
            <button className='sort_button' onClick={() => SortLegs()}>Sort Legs+</button>
            <button className='sort_button' onClick={() => SortLegsReverse()}>Sort Legs-</button>
            </div>
            </div>
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
                                    <h1>Legs: {i.legs}</h1>
                                </div>
                                <div className="heroright">
                                    <div>{i.winrate}% Win rate</div> 
                                </div>
                            </div>)
                        } else if (i.localized_name === 'Marci'){
                            return ''
                        } else {
                            return (
                            <div className={'herodiv' + ' ' + i.localized_name} onClick={()=>setSelectedHero(i.id)}>
                                <h1>{i.localized_name}</h1>
                                <div>{i.winrate}% Win rate</div> 
                                <div>Legs: {i.legs}</div>
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