import { Typography as MuiTypography, TypographyProps } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

interface IProps extends TypographyProps {}

const Typography: React.FC<IProps> = (props: IProps) => {
    return <MuiTypography {...props} className={clsx(props.className, 'font')}>{props.children}</MuiTypography>
};

export default Typography;
