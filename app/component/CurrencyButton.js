import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  tabContainer: {
    display: 'flex',
    width: width - 32,
  },
  buttonContainer: {
    height: 32,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000341',
    margin: 8,
  },
  buttonTitle: {
    fontSize: 20,
    alignSelf: 'center',
  },
  divider: {
    marginTop: 16,
    width: width,
    height: 1,
    backgroundColor: '#d4d4d4',
  },
});

const CurrencyButton = props => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const currenyButtonItems = [
    {id: 0, name: 'INR'},
    {id: 1, name: 'AED'},
    {id: 2, name: 'SAR'},
  ];

  const handleTap = (index, item) => {
    const {conversionCalculation} = props;
    setSelectedIndex(index);
    conversionCalculation(index, item);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {currenyButtonItems.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleTap(item.id, item)}
            style={[
              styles.buttonContainer,
              {
                backgroundColor:
                  selectedIndex === item.id ? '#f4f699' : 'transparent',
              },
            ]}>
            <View>
              <Text style={styles.buttonTitle}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.divider} />
    </SafeAreaView>
  );
};

export default CurrencyButton;
