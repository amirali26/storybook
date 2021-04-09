import { makeStyles } from '@material-ui/core';
import theme, { flex } from '../../theme/theme';

const useStyles = makeStyles({
  root: {
    ...flex('row', 'space-between', 'flex-start'),
    position: 'relative',
    minWidth: '600px',
    boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 29%)',
    borderRadius: '15px 15px 15px 70px',
    maxWidth: '800px',
  },
  left: {
    backgroundColor: theme.palette.primary.main,
    width: '300px',
    padding: '16px',
    height: 'inherit',
    boxSizing: 'border-box',
    ...flex('row', 'space-between', 'flex-start'),
  },
  right: {
    backgroundColor: 'white',
    width: '500px',
    padding: '16px',
    height: 'inherit',
    boxSizing: 'border-box',
    ...flex('row', 'space-between', 'flex-start'),
  },
});

export default useStyles;
