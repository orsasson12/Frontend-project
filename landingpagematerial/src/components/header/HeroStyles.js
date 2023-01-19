// import styled from "@emotion/styled"
import { Box, styled, Typography } from "@mui/material"


export const StyledBox = styled(Box)({
    backgroundColor: '#D3D3D3',
    padding: '1rem',
    borderRadius: '10px',
    margin: '0 auto',
    width: '90%',
    marginTop: '20px',
    height: { xs: '100%', md: '75vh' },
    marginBottom:'100px'
})

export const StyledH1 = {
    fontSize: { xs: '1.5rem', sm: '2.5rem' },
    position: 'relative',
    marginTop: { xs: '1rem', sm: '1.5rem' },
    marginBottom: '1rem',
    textAlign: 'center'
}

export const StyledP = styled(Typography)({
    fontSize: { xs: '1rem', sm: '1.5rem' },
    position: 'relative',
    left: '5%'
})

export const StyleImage = styled('img')({
    borderRadius: '2rem',
    padding: '1rem',
    width: '100%'
})


