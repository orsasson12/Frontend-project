import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { StyledPaper, StyledTypo } from './RecommendationsStyles'
const RecommendationsSlider = ({ rec }) => {
    const { avatarImage, name, recommendation } = rec
    return (
        <StyledPaper 
            data-aos='fade-up'
            data-aos-delay='200'
            >
            <Avatar src={avatarImage} alt={name} sx={{ width: 76, height: 76 }} />
            <Typography sx={{textShadow:'2px 3px 5px black' , fontWeight:'700', fontSize:{sm:'3rem', xs:'1rem'} ,padding:"1rem"}} variant='h2'>{name}</Typography>
            <StyledTypo variant='p'>{recommendation}</StyledTypo>
        </StyledPaper>
    )
}

export default RecommendationsSlider