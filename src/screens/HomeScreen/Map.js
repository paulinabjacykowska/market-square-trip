import MAP_STYLES from '../../constants/mapStyles.json';
import { INITIAL_REGION } from '../../constants/map';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import React from 'react';

const Map = ({ restaurants, onMapPress, onRestaurantPress }) => {
  return (
    <MapView
      style={styles.map}
      initialRegion={INITIAL_REGION}
      customMapStyle={MAP_STYLES}
      onPress={onMapPress}
    >
      {restaurants.map(restaurant => (
        <Marker
          key={restaurant.name}
          title={restaurant.name}
          coordinate={restaurant.marker}
          pinColor="tomato"
          onPress={() => onRestaurantPress && onRestaurantPress(restaurant)}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
