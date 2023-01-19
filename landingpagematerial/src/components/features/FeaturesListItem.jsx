import React from 'react'

import {Avatar, Box, Grid, Typography} from '@mui/material'
import { styledPeragraph,styledBigBox,styledTextBox,styledH3 } from './FeaturesStyles'
const FeaturesListItem = ({feature,key}) => {


  return (
    <>
    {
      
          <Grid item xs={12} sm={6} key={key} 
          data-aos='zoom-in'
          data-aos-offset='100'
          >
            <Box   data-aos='fade-up' sx={styledBigBox}  data-aos-delay={feature.delay} mt={10} >
            <Box  >
              <Avatar variant='rounded' sx={{ width:{ xs: 70, sm: 100 } ,  height:{ xs: 70, sm: 100 }   }}>
              <img src={feature.image} alt={feature.title} width='100%'/>
              </Avatar>
            </Box>
            <Box  sx={styledTextBox}>   
            <Typography variant='h3' sx={styledH3}  gutterBottom={true}>{feature.title}</Typography>
            <Typography variant='p' sx={styledPeragraph}   gutterBottom={true} color='Secondary'>{feature.desc}</Typography>
            </Box>
            </Box>
            </Grid>
     
      }
      </>
  )
}

export default FeaturesListItem