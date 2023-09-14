
import SearchIcon from '@mui/icons-material/Search';
import "./styles.css"
import { useState } from 'react';
function Search({handleChange}) {
 
  return (
    <div className="search__flex">
        <SearchIcon></SearchIcon>
        <input type="text"  onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}

export default Search