import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.css'
import { CoinsContext } from '../../context/coinsContext';
import { useFilterCoins } from '../../hooks/useFilterCoins';
const FilterBlock = ({setCoins}) => {
    const {coins} = useContext(CoinsContext)
    const {setValue, value} = useFilterCoins(setCoins,coins)
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