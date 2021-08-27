import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

const DetailsButton = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.root} onPress={onPress}>
    {icon && (
      <MaterialIcons
        name={icon}
        size={16}
        color="#292925BF"
        style={{ marginRight: 12 }}
      />
    )}
    <Text style={styles.title}>{title}</Text>
    <MaterialIcons name="chevron-right" size={16} color="#292925BF" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    flex: 1,
    color: '#000000BF',
    fontFamily: 'sf-regular',
    fontSize: 13,
    lineHeight: 15,
  },
});

export default DetailsButton;
