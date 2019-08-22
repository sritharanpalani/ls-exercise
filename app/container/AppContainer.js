import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {
  fetchingItems,
  convertCurrency,
} from '../redux/actions/shopItemsActions';
import {connect} from 'react-redux';

import ShopingList from '../component/ShopingList';
import CurrencyButton from '../component/CurrencyButton';

class AppContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchingItems();
  }

  conversionCalculation = (index, item) => {
    const {shopItemsState} = this.props;
    this.props.convertCurrency(
      item,
      shopItemsState.shopItems,
      shopItemsState.currencyConversion,
    );
  };
  render() {
    const {shopItemsState} = this.props;
    return (
      <View style={styles.container}>
        {shopItemsState.isFetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <React.Fragment>
            <CurrencyButton
              conversionCalculation={this.conversionCalculation}
            />
            <ShopingList
              title={shopItemsState.title}
              products={shopItemsState.shopItems}
              conversion={shopItemsState.currencyConversion}
            />
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  return {
    shopItemsState: state,
  };
};

export default connect(
  mapStateToProps,
  {fetchingItems, convertCurrency},
)(AppContainer);
