import { makeStyles } from '@material-ui/core';
import theme, { flex } from '../../theme/theme';

const useStyles = makeStyles({
  root: {
    ...flex('row', 'space-between', 'flex-start'),
    position: 'relative',
    minWidth: '600px',
    boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 29%)',
    borderRadius: '30px',
    maxWidth: '800px',
    backgroundColor: 'transparent',
  },
  left: {
    backgroundColor: theme.palette.primary.main,
    width: '350px',
    padding: '32px',
    height: '100%',
    boxSizing: 'border-box',
    borderTopLeftRadius: '30px',
    borderBottomLeftRadius: '30px',
    ...flex('column', 'space-between', 'flex-start'),
  },
  right: {
    backgroundColor: 'white',
    width: '500px',
    padding: '32px',
    height: '100%',
    boxSizing: 'border-box',
    borderTopRightRadius: '30px',
    borderBottomRightRadius: '30px',
    ...flex('column', 'space-between', 'flex-start'),
  },
});

export default useStyles;
