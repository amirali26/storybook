import { createMuiTheme } from '@material-ui/core';

const teme = createMuiTheme({
  palette: {
    primary: {
      main: '#4632da',
      light: '#00dafc',
    },
  },
  typography: {
      fontFamily: '"Varela Round", Sans-serif',
      caption: {
          fontFamily: '"Montserrat", Sans-serif',
          color: '#3d4459',
      },
      h2: {
        fontSize: '15px',
      },
  }
});
