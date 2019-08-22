import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: width,
    marginTop: 8,
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 16,
  },
  imageContainer: {
    display: 'flex',
  },
  image: {
    display: 'flex',
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  detailsContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 16,
  },
  currencyContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  currency: {
    fontWeight: 'bold',
    marginRight: 16,
  },
});

const ShopingList = props => {
  const {title, products} = props;

  const keyExtractor = item => `${item.name} ${item.price} ${item.key}`;
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.url}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text>{item.name}</Text>
          <View style={styles.currencyContainer}>
            <Text style={styles.currency}>{item.currency}</Text>
            <Text>{parseFloat(item.price).toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          horizontal
          extraData={props}
        />
      </View>
    </View>
  );
};

export default ShopingList;
