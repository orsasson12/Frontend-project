import React from 'react'
import { footerItems} from '../../Data'
import { Grid } from '@mui/material'
import Item from './Item'
const FooterList = () => {
    const {productds,company} = footerItems
    return(

        <Grid 
        data-aos='fade-down'
        data-aos-delay='400'
        container columns={{xs:2}}  columnGap={5}>
            <Item Links={productds}  title='Products'/>
            <Item Links={company} title='company'/>
        </Grid>
       )
}

export default FooterList