import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
   const {id} = useParams()
   const [coinData , setCoinData] = useState([]);

   useEffect(()=>{
        fetch("")
   },[])

  return (
    <div>index</div>
  )
}

export default ProductPage