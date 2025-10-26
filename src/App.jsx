import { useCallback, useEffect, useState } from "react"
import Header from "./components/Header/Header"
import Main from "./pages/Main"
import { getCoins } from "./api/api"
import { CoinsContext } from "./context/coinsContext"

function App() {
  const [balance, setBalance] = useState(60000)
  const [coins, setCoins] = useState([])
  const [filteredCoins, setFilteredCoins] = useState([])
  useEffect(()=>{
      const fetchData = async()=>{
        const data = await getCoins()
        setCoins(data.coins)
        setFilteredCoins(data.coins)
      }
      fetchData()
  },[])
  
  const addBalance = useCallback(()=>setBalance(prev=>prev+1000))
  return (
    <>
    <CoinsContext.Provider value={{coins, filteredCoins}}>
      <Header/>
      <Main 
          coins={coins} 
          setCoins={setFilteredCoins} 
          balance={balance} 
          setBalance={addBalance}
          filteredCoins={filteredCoins}
      />
    </CoinsContext.Provider>
    
    </>
  )
}

export default App
