import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4632da',
    },
    secondary: {
      main: '#00dafc',
    },
  },
  typography: {
    fontFamily: '"Varela Round", Sans-serif',
    caption: {
      fontFamily: '"Montserrat", Sans-serif',
      color: '#3d4459',
    },
    h1: {
      color: '#ffffff',
      fontSize: '45px',
    },
    h2: {
      fontSize: '45px',
      color: '#4632da',
      fontWeight: 300,

    },
    h3: {
      fontSize: '24px',
      color: '#3d4459',
    },
    body1: {
      color: '#3d4459',
      fontSize: '16px',
      fontFamily: '"Montserrat", Sans-serif',
      fontWeight: 200,
    },
    button: {
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: 500,
      fontFamily: '"Montserrat", Sans-serif',
      textTransform: 'capitalize',
      letterSpacing: '0.4px',
    },
  },
});

export default theme;
