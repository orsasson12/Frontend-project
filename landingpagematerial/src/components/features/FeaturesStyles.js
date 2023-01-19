export const styledPeragraph = {
    float: 'left',
    width: { xs: '200px', sm: '100%' },
    padding: '1px',
    fontWeight: '450',
    fontSize: '14px',
    borderRight: ' none',
    textAlign: 'center',
    // whiteSpace: 'nowrap', both of them are making the text not to slide away and hold it 
    overflow: 'hidden',
    // textOverflow: 'ellipsis',
}

export const styledH3 = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize:{xs:'1rem', sm:'1.5rem'}
}
export const styledBigBox = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '10',
    padding: '2rem',
    borderRadius:'10px',
    transform: 'translate(-50%, -50%)',
    backgroundSize: '200%',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    transition: '0.6s',
    backgroundImage: 'linear-gradient(45deg, #d3d3d3, #d4d4d4, #7F8C8D)',
    '&:hover': {
        backgroundPosition: 'right',
        cursor:'pointer'
    }
}

export const styledTextBox = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}