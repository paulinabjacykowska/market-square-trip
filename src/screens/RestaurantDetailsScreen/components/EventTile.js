import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

const EventTile = ({ title, description, imageUri, isToday }) => (
  <View style={styles.root}>
    <Image source={{ uri: imageUri }} style={styles.image} />
    <View style={styles.descriptionContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    {isToday && <Text style={styles.todayLabel}>Dzisiaj</Text>}
  </View>
);

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    width: 200,
    height: 124,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 56,
    borderRadius: 8,
  },
  descriptionContainer: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 9,
  },
  title: {
    color: '#000000BF',
    fontFamily: 'sf-medium',
    fontSize: 17,
    lineHeight: 20,
    marginBottom: 4,
  },
  description: {
    color: '#000000BF',
    fontFamily: 'sf-regular',
    fontSize: 13,
    lineHeight: 15,
  },
  todayLabel: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FFFFFF',
    color: '#9E2A2B',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

export default EventTile;
