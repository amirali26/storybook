import React from 'react';
import useStyles from './index.styles';

export interface ContentProps {
  children: JSX.Element | JSX.Element[];
}

const Card: React.FC<ContentProps> = (props: ContentProps) => {
  const styles = useStyles();
  return <div className={styles.root}>{props.children}</div>;
};

export interface ContentProps {
  children: JSX.Element | JSX.Element[];
}
const Left: React.FC<ContentProps> = (props: ContentProps) => {
  const styles = useStyles();
  return <div className={styles.left}>{props.children}</div>;
};

const Right: React.FC<ContentProps> = (props: ContentProps) => {
  const styles = useStyles();
  return <div className={styles.right}>{props.children}</div>;
};

export const WWWCard = {
  Card,
  Left,
  Right,
};

export default WWWCard;
