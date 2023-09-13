import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../GridCard';
import "./styles.css"
export default function Tabs({coins}) {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const style = {
    color:"var(--white)",
    fontSize:"1.2rem",
    fontWeight:"600",
    fontFamily:"Inter",
    textTransform:"capitalize"
  }

  console.log(coins);
  return (
    <div >
      <TabContext value={value} >
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list"  sx={style}  />
          </TabList>
        <TabPanel value="grid">
          <div className='grid__page' >
            {coins.map((coin,index)=>{
              return(
                <Grid key = {index} 
                image={coin.image}
                symbol={coin.symbol}
                current_price={coin.current_price.toFixed(4)}
                total_volume={coin.total_volume}
                total_supply={coin.total_supply}
                price_change_24h={coin.price_change_24h.toFixed(2)}
                market_cap={coin.market_cap}
                sign={coin.price_change_24h>0}
                name={coin.name}    />
               
              )
            })}
          </div>
          
         <Grid></Grid>
        </TabPanel>
        <TabPanel value="list">List View Showed here</TabPanel>
      </TabContext>
    </div>
  );
}
