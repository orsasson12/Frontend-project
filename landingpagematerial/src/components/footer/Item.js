import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { StyledList } from './FooterStyles'
const Item = ({ Links, title }) => {
    return (
        <Box>
            <StyledList>
                <Typography variant='h5'>{title}</Typography>
                {
                    Links.map((link, i) => (
                        <ListItem key={i}>
                            {link.name}
                        </ListItem>
                    ))
                }
            </StyledList>
        </Box>
    )
}

export default Item