import React from 'react';
import styles from './styles.module.css'
import Card from '../components/Card/Card';
import CoinsList from '../components/CoinsList/CoinsList';
import FilterBlock from '../components/FilterBlock/FilterBlock';
const Main = ({coins, setCoins,filteredCoins, balance, setBalance}) => {
    return (
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock coins={coins} setCoins={setCoins}/>
            {coins.length>0? <CoinsList coins={filteredCoins}/>:<div>Loading ...</div>}
            
        </main>
    );
};

export default Main;