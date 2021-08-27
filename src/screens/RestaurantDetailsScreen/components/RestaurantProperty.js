import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const RestaurantProperty = ({ title, icon }) => (
  <View style={styles.root}>
    <MaterialIcons
      name={icon}
      size={16}
      color="#292925BF"
      style={{ marginRight: 12 }}
    />
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },

  text: {
    color: '#000000BF',
    fontFamily: 'sf-regular',
    fontSize: 15,
    lineHeight: 18,
  },
});

export default RestaurantProperty;
