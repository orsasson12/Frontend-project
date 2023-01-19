import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Header from './Header'
import { heroData } from '../../Data'
import { StyledBox ,StyleImage,StyledP,StyledH1 } from './HeroStyles'
const Hero = ({mode,setMode}) => {
    const {title,subtitle,image} = heroData
  return (
    <Box data-aos='fade-down' data-aos-delay='400' xs={{backgroundColor:'#'}}>
        <Header setMode={setMode} mode={mode}/>
        <StyledBox data-aos='fade-up' data-aos-delay='700' >
        <Grid container justifyContent='center' alignItems='center' spacing={2} padding='1rem'>
        <Grid item  xs={12} sm={6} gap={2} >
        <Typography variant='h1'  sx={StyledH1}>{title}</Typography>
        <StyledP variant='p'>{subtitle}</StyledP>
        </Grid>
        <Grid item xs={10} sm={6} >
        <StyleImage data-aos='zoom-in-right' data-aos-delay='600' src={image} alt={title}/>
        </Grid>
        </Grid>  
        </StyledBox>
    </Box>
  )
}

export default Hero