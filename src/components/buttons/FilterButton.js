import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const FilterButton = () => {
  return (
    <TouchableOpacity
      onPress={() => <View style={styles.filtersBackdrop}></View>}
      style={styles.buttonContainer}
    >
      <AntDesign name="filter" size={24} color="#363232" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    borderRadius: 18,
    shadowColor: '#949292',
    shadowOffset: {
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    height: 36,
    width: 36,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtersBackdrop: {
    width: 400,
    height: 400,
  },
});

export default FilterButton;
