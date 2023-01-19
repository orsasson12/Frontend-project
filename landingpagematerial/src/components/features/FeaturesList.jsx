import React from 'react'
import {Grid} from '@mui/material'
import { featuresData } from '../../Data'
import FeaturesListItem from './FeaturesListItem'

const FeaturesList = () => {
  const {list} = featuresData
  return (
  <Grid container spacing={6}>
      
      {
        list.map((feature,i) => (
          <FeaturesListItem key={i} feature={feature}/>
        ))
      }
      </Grid>
  )
}

export default FeaturesList