import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';
import useStyles from './Button.styles';

interface IProps extends ButtonProps {};
const WWWButton: React.FC<IProps> = (props: IProps) => {
  const styles = useStyles();
  return <Button {...props} className={styles.root}>{props.children}</Button>;
};

export default WWWButton;
