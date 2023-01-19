import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)({
    backgroundColor: '#D3D3D3',
    padding: '1rem',
    borderRadius: '30px',
    margin: '0 auto',
    marginTop: '50px',
    width: '90%',
})

export const StyledH4 = {
    fontSize: { xs: '1.5rem', sm: '2.2rem' },
    position: 'relative',
    marginTop: { xs: '1rem', sm: '1.5rem' },
    marginBottom: '1rem',
    textAlign: 'center'
}

export const StyledP = {
    fontSize: { xs: '1.1rem', sm: '1.3rem' },
    lineHeight: { xs: '1.5rem', sm: '1.4rem', md: '2.4rem' },
    fontWeight: '100',

}

export const StyleImage = styled('img')({
    borderRadius: '3rem',
    padding: '1rem',
    width: '100%'
})