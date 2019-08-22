import * as React from 'react';
import renderer from 'react-test-renderer';

import CurrencyButton from '../app/component/CurrencyButton';

test('<CurrencyButton> renders correctly', () => {
  const tree = renderer.create(<CurrencyButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
