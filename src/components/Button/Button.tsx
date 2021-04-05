import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';

import useStyles from './Button.styles';
import theme from '../../theme/theme';

interface IProps extends ButtonProps {};
const WWWButton: React.FC<IProps> = (props: IProps) => {
  const styles = useStyles(theme);
  return <Button {...props}  color={'secondary'} className={styles.root}>{props.children}</Button>;
};

export default WWWButton;
