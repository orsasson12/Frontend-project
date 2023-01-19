import React from 'react'
import { Grid, Typography} from '@mui/material'
import { StyledBox , StyledH4,StyledP ,StyleImage} from './AboutStyles'
import {aboutData} from '../../Data'
const About = () => {
    const {image,title,subtitle} = aboutData
  return (
    <StyledBox data-aos='fade-down'
         data-aos-offset='400'
        data-aos-delay='300'
         >
        <Grid container spacing={2} justifyContent='center'>
        <Grid item sm={6} xs={12} alignSelf='center'>
        <StyleImage  style={{width:'100%'}} src={image} alt={title}/>
        </Grid>
        <Grid item sm={6} xs={12}>
            <Grid container>
            <Grid item>
        <Typography variant='h4' sx={StyledH4}>{title}</Typography>
            </Grid>
            <Grid item gap={2} alignSelf='center' >
        <Typography variant='p' sx={StyledP} >{subtitle}</Typography>
            </Grid>
            </Grid>
        </Grid>
        </Grid>
    </StyledBox>

    )
}

export default About