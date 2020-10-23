import React from 'react';
import Checkbox from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const defaultStory = () => <Checkbox />;

defaultStory.storyName = 'default';

export const normal = () => <Checkbox subtype="normalCheckbox" />;

normal.storyName = 'normal checkbox';

export const normalChecked = () => <Checkbox subtype="normalCheckbox" checked />;

normalChecked.storyName = 'normal checkbox -- checked';

export const Checked = () => {
  return <Checkbox type="checkbox" checked />;
};

Checked.storyName = 'type checkbox - checked';

export const Indeterminate = () => {
  return <Checkbox type="checkbox" indeterminate />;
};

Indeterminate.storyName = 'type checkbox - indeterminate';
