import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MenuButton(name) {
  const [isDisabled, setDisabled] = useState(true);

  const handlePress = () => {
    if (isDisabled) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <View style={{ flexWrap: 'wrap' }}>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonTextStyle}>MENU</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowColor: '#000c',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  buttonTextStyle: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
  },
});
