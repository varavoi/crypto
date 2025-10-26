import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.css'
import { CoinsContext } from '../../context/coinsContext';
const FilterBlock = ({setCoins}) => {
    const [value,setValue]=useState('')
    const {coins} = useContext(CoinsContext)
    useEffect(()=>{
        const filteredCoins = coins.filter(coin=>{
            return coin.name.toLowerCase().includes(value.toLowerCase())
        })
        setCoins(filteredCoins)
    },[value]);
    return (
       <div className='filter-block'>
            <input 
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className='input' 
                type="text" 
                placeholder='bitcoin'
            />
        </div>
    );
};

export default React.memo(FilterBlock);