import React from 'react'
import "./styles.css"
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
      </div>
    </nav>
  )
}

export default Header