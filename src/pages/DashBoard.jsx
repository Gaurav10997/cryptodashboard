import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../components/common/Header'
import Tabs from '../components/dashboard/Tab'

function DashBoardPage() {
  const [coins,setCoins] = useState([])

  useEffect(()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((res)=>res.json())
      .then((data)=>setCoins(data))
  },[])

  
  return (
    <div>
        <Header/>
        <Tabs coins={coins}></Tabs>
    </div>
  )
}

export default DashBoardPage