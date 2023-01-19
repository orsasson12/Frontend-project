import { styled, Box, Paper, Typography } from "@mui/material";

export const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 2.4rem',
    height: '70vh',
    backgroundColor: '#D7D7D7',
    borderRadius: '30px',
})
export const StyledContentBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '3em 0',
})


export const StyledPaper = styled(Paper)({
    width: '100%',
    margin:'0 auto',
    height: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding:'1rem'
})


export const StyledTypo = styled(Typography)({
    padding: { xs: 'none', sm: '1.5em 2em' }, 
    width:{sm:'50%', xs:'100%'},
    borderRadius:'5px',
    fontSize: { xs: '0.5em', sm: '1.2em' }, 
    fontWeight: { xs: 'normal', sm: '700' }, 
    borderLeft:{xs:'none',sm:'20px solid transparent'},
    borderRight: { xs: 'none', sm: '2px solid transparent' },
    borderTop: { xs: 'none', sm: '20px solid #f7f7f7' },
    textAlign:'center'
})