import React from 'react'
import "./styles.css"
import TemporaryDrawer from './drawer'
import Button from '../Button'
function Header() {
  return (
    <nav>
      <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span> </h1>
      <div className="links">
        <a href="#">
          <p className="link">Home</p>
        </a>
        <a href="">
          <p className='link'>Compare</p>
        </a>
        <a href="">
          <p className='link'>Watchlist</p>
        </a>
        <Button title = {"DashBoard"}  outline={false}></Button>
      </div>
      <div className="mobile__drawer link"><TemporaryDrawer className="link" /></div>
    </nav>
  )
}

export default Header