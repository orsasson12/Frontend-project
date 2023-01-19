import React from 'react'
import { navigationData } from '../../Data'
import {AppBar ,  List,  ListItem,  ListItemText, Typography,Switch} from '@mui/material'
import BoltIcon from '@mui/icons-material/Bolt';
import MenuIcon from '@mui/icons-material/Menu';
import { StyleToolBar,BolticonStyle } from './NavbarStyles';
import { MaterialUISwitch } from '../Switch';
const Navbar = ({setToggle,toggle,setMode,mode}) => {
  return (
    <AppBar position='sticky' >
        <StyleToolBar>
           <Typography variant='h6' sx={{display:{xs:'none',sm:'flex'}}}>Electricity</Typography>
           <BoltIcon sx={BolticonStyle}/>
            <List sx={{display:{xs:'none',sm:'flex'}}}>
            {navigationData.map((item,i) => (
                <ListItem key={i}>
                    <ListItemText primary={item.name}/>
                </ListItem>
            ))}
        <MaterialUISwitch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}/>
        </List>
        <MenuIcon  onClick={() =>setToggle(!toggle)} sx={{display:{xs:'block',sm:'none'}}}/>
            </StyleToolBar>
    </AppBar>   
  )
}

export default Navbar