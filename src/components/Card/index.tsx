import React from 'react';
import clsx from 'clsx';

import useStyles from './index.styles';

export interface ContentProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Card: React.FC<ContentProps> = (props: ContentProps) => {
  const styles = useStyles();
  return (
    <div className={clsx(styles.root, props.className)}>{props.children}</div>
  );
};

export interface ContentProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}
const Left: React.FC<ContentProps> = (props: ContentProps) => {
  const styles = useStyles();
  return (
    <div className={clsx(styles.left, props.className)}>{props.children}</div>
  );
};

const Right: React.FC<ContentProps> = (props: ContentProps) => {
  const styles = useStyles();
  return (
    <div className={clsx(styles.right, props.className)}>{props.children}</div>
  );
};

export const WWWCard = {
  Card,
  Left,
  Right,
};

export default WWWCard;
