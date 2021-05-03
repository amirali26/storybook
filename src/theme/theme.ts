import { createMuiTheme } from '@material-ui/core';

export const flex = (
  flexDirection: 'row' | 'column' = 'row',
  justifyContent: string = 'space-between',
  alignItems: string = 'center'
) => ({
  display: 'flex',
  flexDirection,
  justifyContent,
  alignItems,
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ed6336',
    },
    
    secondary: {
      main: '#1F2839',
    },
    
  },
  typography: {
    fontFamily: '"Lato", Sans-serif',
    caption: {
      fontFamily: '"Lato", Sans-serif',
      color: '#222222',
    },
    h1: {
      color: '#222222',
      fontSize: '45px',
    },
    h2: {
      fontSize: '45px',
      color: '#222222',
      fontWeight: 300,
    },
    h3: {
      fontSize: '24px',
      color: '#2',
    },
    body1: {
      color: '#222222',
      fontSize: '16px',
      fontFamily: '"Lato", Sans-serif',
      fontWeight: 200,
    },
    button: {
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: '"Lato", Sans-serif',
      textTransform: 'capitalize',
      letterSpacing: '0.4px',
    },
  },
});

export default theme;
