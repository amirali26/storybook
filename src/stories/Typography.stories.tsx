import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';
import WWWTypography from '../components/Typography/Typography';


export default {
  title: 'Components/Typography/Default',
  component: WWWTypography,
  decorators: [withKnobs]
} as Meta;

export const Primary: React.VFC<{}> = () => (
  <WWWTypography variant={text('Variant', 'h2') as any}>Button</WWWTypography>
);
