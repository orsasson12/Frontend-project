import React from 'react'
import {ListItem,List, ListItemText, AppBar,Switch} from '@mui/material'
import { navigationData } from '../../Data'
import { StyleToolBar } from './NavbarStyles';
import {MaterialUISwitch} from '../Switch'
const NavMobile = ({setMode,mode}) => {
  return (
    <AppBar position='static' sx={{display:{xs:'block',sm:'none'}}} >
    <StyleToolBar>
        <List>
               {navigationData.map((item,i) => (
                <ListItem key={i}>
                    <ListItemText primary={item.name}/>
                </ListItem>
            ))}
           <MaterialUISwitch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}/>
            </List>
             </StyleToolBar>
            </AppBar>
  )
}

export default NavMobile