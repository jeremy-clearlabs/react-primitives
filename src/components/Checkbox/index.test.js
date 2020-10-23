import React from 'react';
import renderer from 'react-test-renderer';
// import 'jest-styled-components';

import Checkbox from '.';

it('renders input by default', () => {
  const tree = renderer.create(<Checkbox />).toJSON();
  expect(tree).toMatchSnapshot();
});
