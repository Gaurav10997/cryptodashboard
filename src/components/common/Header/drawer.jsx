import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';




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
          </Drawer>
    </div>
  );
}
