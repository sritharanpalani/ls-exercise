import * as React from 'react';
import renderer from 'react-test-renderer';

import ShopingList from '../app/component/ShopingList';

test('<ShopingList> renders correctly', () => {
  const tree = renderer.create(<ShopingList />).toJSON();
  expect(tree).toMatchSnapshot();
});
