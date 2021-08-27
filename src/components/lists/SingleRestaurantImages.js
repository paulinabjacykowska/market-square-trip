import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function SingleRestaurantImages({ restaurantImages }) {
  var data = [];

  for (var key in restaurantImages) {
    data.push({ imgs: restaurantImages[key], id: key });
  }
  // console.log(restaurantImages)

  const renderItem = ({ item }) => (
    <View style={styles.contener}>
      <Image style={styles.image} source={item.imgs}></Image>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  image: {
    height: 120,
    width: Dimensions.get('window').width * 0.6,
    marginRight: 2,
  },
  contener: {
    marginBottom: 5,
  },
});
