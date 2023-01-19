import React from 'react'
import {Box, Container} from '@mui/material'
import { StyledBox } from './RecommendationsStyles'
import RecommendationsSlider from './RecommendationsSlider'
import { recommendationData } from '../../Data'
import Carousel from 'react-material-ui-carousel'
const Recommendations = () => {
  return (
    <Box  
       sx={{padding:'2rem'}}
        >
        <StyledBox      
        data-aos='fade-up'
        data-aos-offset='300'
        data-aos-delay='700'
        >
            <Carousel>

            {
                recommendationData.map((rec,i) =>(
                    <RecommendationsSlider rec={rec} key={i}/>
                    ))
                }
                </Carousel>
        </StyledBox>
        
    </Box>
  )
}

export default Recommendations