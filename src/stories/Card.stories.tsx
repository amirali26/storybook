import { Meta } from '@storybook/react';
import React from 'react';

import WWWCard from '../components/Card';

export default {
  title: 'Components/Card/Default',
  component: WWWCard.Card,
} as Meta;

export const Primary: React.VFC<{}> = () => {
  return (
    <WWWCard.Card>
      <WWWCard.Left>
        <h2>blue</h2>
      </WWWCard.Left>
      <WWWCard.Right>
        <h2>white</h2>
      </WWWCard.Right>
    </WWWCard.Card>
  );
};
