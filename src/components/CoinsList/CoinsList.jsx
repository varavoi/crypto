import React from 'react';
import './styles.css'
const CoinsList = ({coins}) => {
    return (
        <ul className='coins-list'>
           {coins.map(coin=>(
                <li key={coin}>
                        {coin.symbol+'/'+coin.name}
                </li>
           ))}
        </ul>
    );
};

export default CoinsList;