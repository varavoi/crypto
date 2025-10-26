import React, { useEffect, useRef, useState } from 'react';
import './styles.css'
const FilterBlock = ({coins, setCoins}) => {
    const [value,setValue]=useState('')
    const inputRef=useRef(null)
    console.log(inputRef)
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