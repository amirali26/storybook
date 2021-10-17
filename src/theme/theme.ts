import { createMuiTheme } from '@mui/material';

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
      main: '#981e25',
    },
    secondary: {
      main: '#121212',
    },
    error: {
      main: '#981E25',
    }
  },
  typography: {
    fontFamily: '"Lato", Sans-serif',
    fontWeightRegular: 400,
    fontWeightBold: 600,
    fontWeightLight: 200,
    fontWeightMedium: 400,
    caption: {
      fontFamily: '"Lato", Sans-serif',
      color: '#121212',
    },
    h1: {
      color: '#121212',
      fontSize: '45px',
      fontWeight: 600,
    },
    h2: {
      fontSize: '45px',
      color: '#121212',
      fontWeight: 400,
    },
    h3: {
      fontWeight: 400,
      fontSize: '24px',
      color: '#2',
    },
    body1: {
      color: '#121212',
      fontSize: '16px',
      fontFamily: '"Lato", Sans-serif',
      fontWeight: 400,
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
