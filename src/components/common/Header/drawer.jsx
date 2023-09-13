import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
// import {ButtonName} from "./../Button"
import ButtonName from "../Button"
import { Link } from 'react-router-dom';




export default function TemporaryDrawer() {
  const [open,setOpen] = useState(false)
  return (
    <div>
    
          <Button onClick={()=>setOpen(true)}>
              <MenuIcon />            
          </Button>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className='mobile__links'>
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
            <ButtonName title = {"DashBoard"}  outline={false}></ButtonName>
        </Link>
           </div>
          </Drawer>
    </div>
  );
}
