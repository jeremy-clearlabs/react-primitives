import React from 'react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
};

export const defaultStory = () => <Button>Default Background</Button>;

export const disabled = () => <Button disabled>Disabled Button</Button>;
