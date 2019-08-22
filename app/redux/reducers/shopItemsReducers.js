import {
  FETCHING_SHOP_ITEMS_FAILURE,
  FETCHING_SHOP_ITEMS_START,
  FETCHING_SHOP_ITEMS_SUCCESS,
  CONVERT_CURRENCY,
} from '../actions/type';

const initialState = {
  isFetching: false,
  errorMessage: '',
  shopItems: [],
  title: '',
  currencyConversion: [],
};

const currencyConversion = payload => {
  const {products, cCurrency, conversionArray} = payload;

  products.map(item => {
    conversionArray.forEach(element => {
      if (item.currency !== cCurrency.name) {
        if (element.from === item.currency && element.to === cCurrency.name) {
          const price = Number(item.price) * Number(element.rate);
          item.price = price.toString();
          item.currency = element.to;
        }
      }
    });
    return item;
  });
  return products;
};

const addProductUniqueKey = shopItems => {
  const products = shopItems.map(item => {
    const uniqueKey = Math.floor(Math.random() * 100 + 24);
    item.key = uniqueKey;
    return item;
  });
  return products;
};

const shopItemsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SHOP_ITEMS_START:
      return {...state, isFetching: true};
    case FETCHING_SHOP_ITEMS_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case FETCHING_SHOP_ITEMS_SUCCESS:
      const shopProducts = addProductUniqueKey(action.payload.products);
      return {
        ...state,
        isFetching: false,
        shopItems: shopProducts,
        currencyConversion: action.payload.conversion,
        title: action.payload.title,
      };
    case CONVERT_CURRENCY:
      const products = currencyConversion(action.payload);
      return {...state, shopItems: products};
    default:
      return state;
  }
};

export default shopItemsReducers;
