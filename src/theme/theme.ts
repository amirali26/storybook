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
    h2: {
      fontSize: '45px',
    },
    h3: {
      fontSize: '20px',
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
