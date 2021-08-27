import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
  TextInput,
  Platform,
} from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';
import { useSelector } from 'react-redux';

import FilterButton from '../buttons/FilterButton';
import MainTagButton from '../buttons/MainTagButton';
import chars from '../../constants/polishCharacters';

const SearchBar = ({ restaurants, onRestaurantSelect }) => {
  const tag = useSelector(state => state.tags.chosenTag);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const filterMatchingRestaurants = query => {
    if (query) {
      const regex = new RegExp(
        `${query
          .split('')
          .map(char => chars[char] || char)
          .join('')
          .trim()}`,
        'i'
      );
      setFilteredRestaurants(
        restaurants.filter(
          restaurant =>
            restaurant.name
              .split('')
              .map(char => chars[char] || char)
              .join('')
              .search(regex) >= 0
        )
      );
    } else {
      setFilteredRestaurants([]);
    }
  };

  useEffect(() => {
    const keyboardDidShowHandler = () => {
      setIsKeyboardVisible(true);
    };
    const keyboardDidHideHandler = () => {
      setIsKeyboardVisible(false);
    };
    Keyboard.addListener('keyboardDidShow', keyboardDidShowHandler);
    Keyboard.addListener('keyboardDidHide', keyboardDidHideHandler);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShowHandler);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHideHandler);
    };
  }, []);

  const renderTextInput = props => (
    <View style={styles.searchContainer}>
      <View style={{ flex: 1 }}>
        <TextInput {...props} />
      </View>
      <View style={styles.tagAndFilter}>
        <MainTagButton
          text={tag[0].tagName}
          color={tag[0].tagColor}
          style={{ ...styles.chosenTag }}
          ifCompressed={isKeyboardVisible}
          isDisabled
        />
        <FilterButton />
      </View>
    </View>
  );

  return (
    <Autocomplete
      placeholder="Szukaj..."
      placeholderTextColor={'#a6a4a4'}
      containerStyle={styles.autocompleteContainer}
      inputContainerStyle={styles.textInputContainer}
      listContainerStyle={styles.suggestionsContainer}
      listStyle={styles.suggestedRestaurant}
      onChangeText={filterMatchingRestaurants}
      defaultValue={selectedRestaurant?.name || ''}
      data={filteredRestaurants}
      renderTextInput={renderTextInput}
      keyExtractor={item => item.name}
      renderItem={({ item }) =>
        isKeyboardVisible ? (
          <TouchableOpacity
            onPress={() => {
              setSelectedRestaurant(item);
              setFilteredRestaurants([]);
              onRestaurantSelect && onRestaurantSelect(item);
            }}
          >
            <Text style={styles.restaurantName}>{item.name}</Text>
            <Text style={styles.restaurantAddress}>{item.address.street}</Text>
          </TouchableOpacity>
        ) : (
          setFilteredRestaurants([])
        )
      }
    />
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingLeft: 20,
    width: Dimensions.get('window').width - 80,
    backgroundColor: 'white',
    borderRadius: 40,
    shadowColor: '#949292',
    shadowOffset: {
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
  },
  autocompleteContainer: {
    position: 'absolute',
    top: 40,
    width: '100%',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    height: 46,
    maxWidth: 300,
    paddingHorizontal: 20,
    borderWidth: 0,
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
  },
  suggestionsContainer: {
    backgroundColor: 'white',
    borderWidth: 0,
    width: Dimensions.get('window').width - 80,
    marginTop: -23,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  suggestedRestaurant: {
    paddingTop: Platform.OS === 'ios' ? 40 : 35,
    paddingBottom: Platform.OS === 'ios' ? 4 : 2,
    borderWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  restaurantName: {
    fontSize: 15,
    fontFamily: 'sf-regular',
    paddingBottom: Platform.OS === 'ios' ? 8 : 0,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 15,
  },
  restaurantAddress: {
    fontSize: 11,
    fontFamily: 'sf-regular',
    color: '#b0acac',
    paddingBottom: Platform.OS === 'ios' ? 25 : 18,
    paddingHorizontal: Platform.OS === 'ios' ? 20 : 15,
  },
  chosenTag: {
    marginHorizontal: 10,
    shadowColor: '#949292',
    shadowOffset: {
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    height: 32,
  },
  tagAndFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SearchBar;
