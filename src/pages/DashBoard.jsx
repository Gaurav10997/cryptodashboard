import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../components/common/Header'
import Tabs from '../components/dashboard/Tab'
import Search from '../components/dashboard/Search'

function DashBoardPage() {
  const [coins,setCoins] = useState([])
  const [searched ,setSearched] = useState("");

  function handleChange(searchTerm){
    setSearched(searchTerm)
  }
  console.log(searched)

  useEffect(()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((res)=>res.json())
      .then((data)=>setCoins(data))
  },[])

  const filterdcoins = coins.filter((coin)=>{
    return(
      coin.name.toLowerCase().includes(searched.toLowerCase())  ||
      coin.symbol.toLowerCase().includes(searched.toLowerCase())
    )
  })
  return (
    <div>
        <Header/>
        <Search handleChange={handleChange} ></Search>
        <Tabs coins={filterdcoins}></Tabs>
    </div>
  )
}

export default DashBoardPage