import React from 'react';
import { Meta } from '@storybook/react';

import WWWButton from '../components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default {
    title: 'Components/Button/Default',
    component: WWWButton,
} as Meta;

export const Primary: React.VFC<{}> = () => <WWWButton variant={'contained'} color={'primary'} endIcon={<FontAwesomeIcon icon={faArrowRight} />}>Button</WWWButton>;