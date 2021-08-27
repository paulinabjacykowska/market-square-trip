import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

export default function ImagesList({ restaurantImages }) {
  var data = [];

  for (var key in restaurantImages) {
    data.push({ imgs: restaurantImages[key], id: key });
  }

  const renderItem = ({ item }) => (
    <View style={styles.contener}>
      <Image style={styles.image} source={item.imgs}></Image>
    </View>
  );

  return (
    <View style={{ marginTop: 8 }}>
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
    height: 95,
    width: Dimensions.get('window').width * 0.55,
    borderRadius: 5,
  },
  contener: {
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
});
