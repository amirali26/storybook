import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      boxShadow: '0px 0px 30px 0px rgb(0 0 0 / 10%)',
      padding: '9.5px 30px',
      borderRadius: '30px',
      ...theme.typography.button,
      '& .MuiButton-iconSizeMedium svg': {
          fontSize: theme.typography.button.fontSize,
      }
    },
  };
});

export default useStyles;
