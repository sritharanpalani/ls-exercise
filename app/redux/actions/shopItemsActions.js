import {
  FETCHING_SHOP_ITEMS_FAILURE,
  FETCHING_SHOP_ITEMS_START,
  FETCHING_SHOP_ITEMS_SUCCESS,
  CONVERT_CURRENCY,
} from './type';

export const fetchingShopItemsRequest = () => ({
  type: FETCHING_SHOP_ITEMS_START,
});

export const fetchingShopItemsSuccess = json => ({
  type: FETCHING_SHOP_ITEMS_SUCCESS,
  payload: json,
});

export const fetchingShopItemsFailure = error => ({
  type: FETCHING_SHOP_ITEMS_FAILURE,
  payload: error,
});

export const convertCurrency = (cCurrency, products, conversionArray) => ({
  type: CONVERT_CURRENCY,
  payload: {
    cCurrency: cCurrency,
    products: products,
    conversionArray: conversionArray,
  },
});

export const fetchingItems = () => {
  return async dispatch => {
    dispatch(fetchingShopItemsRequest());
    try {
      let response = await fetch(
        'http://a2b7cf8676394fda75de-6e0550a16cd96615f7274fd70fa77109.r93.cf3.rackcdn.com/common/json/assignment.json',
      );
      let json = await response.json();
      dispatch(fetchingShopItemsSuccess(json));
    } catch (error) {
      dispatch(fetchingShopItemsFailure(error));
    }
  };
};
