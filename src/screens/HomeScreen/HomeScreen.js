import SearchBar from '../../components/inputs/SearchBar';
import MainTagsRow from '../../components/MainTagsRow';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { fetchRestaurants } from '../../api';
import Map from './Map';
import { useSelector } from 'react-redux';
import BottomSheet from './BottomSheet';

const HomeScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  useEffect(() => {
    fetchRestaurants().then(setRestaurants);
  }, []);

  const chosenTags = useSelector(state => state.tags.chosenTag);
  const allTags = useSelector(state => state.tags.availableTags);

  const filteredRestaurants = restaurants.filter(filterTag =>
    filterTag.tags.includes(chosenTags[0].tagName)
  );

  return (
    <View style={styles.root}>
      <Map
        restaurants={filteredRestaurants}
        onMapPress={() => setSelectedRestaurant(null)}
        onRestaurantPress={setSelectedRestaurant}
      />
      <MainTagsRow tags={allTags} />
      <SearchBar
        restaurants={restaurants}
        onRestaurantSelect={setSelectedRestaurant}
      />
      {restaurants.length > 0 && (
        <BottomSheet
          restaurants={
            selectedRestaurant ? [selectedRestaurant] : filteredRestaurants
          }
          title={
            filteredRestaurants.length > 0
              ? chosenTags[0].tagName.toString().charAt(0).toUpperCase() +
                chosenTags[0].tagName.slice(1)
              : ''
          }
          navigation={navigation}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default HomeScreen;
