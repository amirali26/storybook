import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import React from 'react';

import useStyles from './Button.styles';
import theme from '../../theme/theme';

interface IProps extends ButtonProps {};
const Button: React.FC<IProps> = (props: IProps) => {
  const styles = useStyles(theme);
  return <MuiButton {...props} className={styles.root}>{props.children}</MuiButton>;
};

export default Button;
