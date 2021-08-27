import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

const ProposedFood = ({ title, price, imageUri }) => (
  <View style={styles.root}>
    <Image style={styles.image} source={{ uri: imageUri }} />
    <Text style={[styles.text, { flex: 1 }]}>{title}</Text>
    <Text style={styles.text}>{price} zł</Text>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },

  image: {
    width: 70,
    height: 35,
    borderRadius: 4,
    marginRight: 10,
  },

  text: {
    color: '#000000BF',
    fontFamily: 'sf-regular',
    fontSize: 15,
    lineHeight: 18,
  },
});

export default ProposedFood;
