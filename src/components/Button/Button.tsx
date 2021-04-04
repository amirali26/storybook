import { Button, ButtonProps } from '@material-ui/core';
import React from 'react';

interface IProps extends ButtonProps {};
const WWWButton: React.FC<IProps> = (props: IProps) => {
  return <Button {...props}>{props.children}</Button>;
};

export default WWWButton;
