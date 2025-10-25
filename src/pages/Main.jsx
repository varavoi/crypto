import React from 'react';
import styles from './styles.module.css'
import Card from '../components/Card/Card';
import CoinsList from '../components/CoinsList/CoinsList';
const Main = ({coins, balance, setBalance}) => {
    return (
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            {coins? <CoinsList coins={coins}/>:null}
            
        </main>
    );
};

export default Main;