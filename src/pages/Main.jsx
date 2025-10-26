import React, { useMemo } from 'react';
import styles from './styles.module.css'
import Card from '../components/Card/Card';
import CoinsList from '../components/CoinsList/CoinsList';
import FilterBlock from '../components/FilterBlock/FilterBlock';
const Main = ({coins, setCoins, balance, setBalance}) => {
    return (
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock setCoins={setCoins}/>
            {coins.length>0?(
                <CoinsList/>
            ):(
                    <div>Loading ...</div>
            )}
            
        </main>
    );
};

export default Main;