import React from 'react';
import { Meta } from '@storybook/react';

import WWWButton from '../components/Button/Button';

export default {
    title: 'Components/Button',
    component: WWWButton,
} as Meta;

export const Primary: React.VFC<{}> = () => <WWWButton variant={'contained'}>Button</WWWButton>;