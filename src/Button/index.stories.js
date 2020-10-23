import React from 'react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button
};

export const withBackground = () => (
  <Button bg="palegoldenrod">Hello world</Button>
);

export const disabled = () => <Button disabled>Disabled Button</Button>;