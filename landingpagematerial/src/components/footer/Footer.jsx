import React from 'react'
import { Container, Grid, Typography,} from '@mui/material'
import {footerData} from '../../Data'
import FooterList from './FooterList'
import BoltIcon from '@mui/icons-material/Bolt';
import { BolticonStyle } from './FooterStyles';
function Footer() {
  const {title,subtitle,copyRights} = footerData
  return (
        <Grid 
        data-aos='fade-up'
        data-aos-delay='200'
        container bgcolor={'#4e4c4c'} color='#f1f2f9' justifyContent={'space-around'} p={'1rem'}  columns={{xs:1,sm:2}}>
        <Grid item  md={6}>  
         <Typography variant='h3' sx={{display:{xs:'none',sm:'flex'}}}>{title}</Typography>
           <BoltIcon sx={BolticonStyle} />
        <Typography variant='h4' sx={{fontSize:{xs:'1.2rem',sm:'2.125em'}}}>{subtitle}</Typography>
        <Typography variant='h6' sx={{opacity:'0.5', color:'gray', fontWeight:'100',fontSize:'0.7rem'}}>{copyRights}</Typography>
        </Grid>
        <Grid item  md={6}>
          <FooterList/>
        </Grid>
        </Grid>

  )
}

export default Footer