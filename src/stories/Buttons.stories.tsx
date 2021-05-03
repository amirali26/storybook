import React from 'react';
import { Meta } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../components/Button';

export default {
    title: 'Components/Button/Default',
    component: Button,
} as Meta;

export const Primary: React.VFC<{}> = () => <Button variant={'contained'} color={'primary'} endIcon={<FontAwesomeIcon icon={faArrowRight} />}>Button</Button>;