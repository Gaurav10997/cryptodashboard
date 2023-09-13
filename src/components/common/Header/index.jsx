import React from 'react'
import "./styles.css"
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav>
      <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span> </h1>
      <div className="links">
        <Link  to={"/"}>
           <p className="link">Home</p>
        </Link>
        <Link to={"/compare"}>
        <p className='link'>Compare</p>
        </Link>
        <Link to={"/watchlist"} >
        <p className='link'>Watchlist</p>
        </Link>
        <Link  to={"/dashboard"}>
            <Button title = {"DashBoard"}  outline={false}></Button>
        </Link>
        
      </div>
      <div className="mobile__drawer link"><TemporaryDrawer className="link" /></div>
    </nav>
  )
}

export default Header