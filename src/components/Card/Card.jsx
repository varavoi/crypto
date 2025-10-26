import React from 'react';
import { WithRuBalance } from '../../helpers/hoc/withRuBalance';
import './styles.css'
const Card = ({balance, setBalance, ruBalance}) => {
    console.log({ruBalance})
    return (
        <div className='card'>
            <div className='card-block'>
                <p>CRYPTO-FINANCE</p>
                <button 
                onMouseEnter={()=>console.log('---enter')}
                onClick={()=>setBalance(prev=>prev+1000)}
                >Add balance</button>
            </div>
            
            <div className='card-block'>
                <p>Vardan</p>
                <p>{balance} $</p>
            </div>
            
        </div>
    );
};

export default WithRuBalance(Card);