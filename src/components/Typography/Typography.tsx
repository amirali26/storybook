import { Typography, TypographyProps } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

interface IProps extends TypographyProps {}

const WWWTypography: React.FC<IProps> = (props: IProps) => {
    return <Typography {...props} className={clsx(props.className, 'font')}>{props.children}</Typography>
};

export default WWWTypography;
