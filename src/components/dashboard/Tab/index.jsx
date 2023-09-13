import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function Tabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    width:"100vw",
    fontSize:"1.2rem",
    fontWeight:"600",
    fontFamily:"Inter",
    textTransform:"capitalize"
  }

  return (
    <Box >
      <TabContext value={value} >
          <TabList onChange={handleChange} style={{width:"100vw"}}>
            <Tab label="Grid View" value="1" sx={style} />
            <Tab label="List View" value="2"  sx={style}  />
          </TabList>
        <TabPanel value="1">Grid view showed here</TabPanel>
        <TabPanel value="2">List View Showed here</TabPanel>
      </TabContext>
    </Box>
  );
}
