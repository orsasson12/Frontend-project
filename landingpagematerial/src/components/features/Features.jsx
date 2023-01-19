import React from 'react'
import { Box, Container,  Typography} from '@mui/material'
import { featuresData } from '../../Data'
import FeaturesList from './FeaturesList'


const Features = () => {
  const {title,subtitle} = featuresData
  return (
    <Container maxWidth='lg'    
      data-aos='fade-up'
      data-aos-offset='350'>
      <Box py={10}>
      <Box textAlign='center' mb='9'>
        <Container maxWidth='sm'>
        <Typography variant='h3'   
            data-aria-owns='fade-down'
            data-aos-delay='100'
              sx={{fontSize:{sm:'40px', xs:'20px'}, marginBottom:'20px'}}
              >{title}</Typography>
        <Typography   
              data-aria-owns='fade-down'
              data-aos-delay='200'
              variant='h6'
              sx={{fontSize:'1.125rem', lineHeight:'1.75rem', maxWidth:'585px', margin:'0 auto',marginBottom:'20px'}}
              >{subtitle}</Typography>
        </Container>  
      </Box>
      <FeaturesList/>
      </Box>
    </Container>
  )
}

export default Features