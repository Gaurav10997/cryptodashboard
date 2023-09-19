import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../components/common/Header'
import Tabs from '../components/dashboard/Tab'
import Search from '../components/dashboard/Search'
import Paging from '../components/dashboard/Pagination'

import { color } from 'framer-motion'

function DashBoardPage() {
  const [isLoading,setIsLoading] = useState(true)
  const [coins,setCoins] = useState([])
  const [pageNo,setPageNo] = useState(1);
  const [searched ,setSearched] = useState("");

  function handleChange(searchTerm){
    setSearched(searchTerm)
  }

  function handlePageNo(value){
    setPageNo(value)
  }
  console.log(pageNo)
  useEffect(()=>{
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
      .then((res)=>res.json())
      .then((data)=>setCoins(data))
      .then(()=>setIsLoading(false))
  },[])

  const filterdcoins = coins.filter((coin)=>{
    return(
      coin.name.toLowerCase().includes(searched.toLowerCase())  ||
      coin.symbol.toLowerCase().includes(searched.toLowerCase())
    )
  }).slice((pageNo*10)-10,pageNo*10)

  const searchedCoins = coins.filter((coin)=>{
    return(
      coin.name.toLowerCase().includes(searched.toLowerCase())  ||
      coin.symbol.toLowerCase().includes(searched.toLowerCase())
    )
  })  
  return (
    <div>
        <Header/>
        <Search handleChange={handleChange} ></Search>
        {isLoading}
        { searched && <Tabs coins={searchedCoins}  isLoading={isLoading}></Tabs>}
        {  !searched &&  <Tabs coins={filterdcoins} isLoading={isLoading}></Tabs>}
       { !isLoading &&   !searched && <Paging handlePageNo={handlePageNo} ></Paging>}
    </div>
  )
}

export default DashBoardPage