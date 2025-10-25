import React from 'react';
import styles from './styles.module.css'
import Card from '../components/Card/Card';
import CoinsList from '../components/CoinsList/CoinsList';
const Main = ({coins, balance, setBalance}) => {
    return (
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            {coins.length>0? <CoinsList coins={coins}/>:<div>Loading ...</div>}
            
        </main>
    );
};

export default Main;