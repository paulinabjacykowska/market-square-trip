import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TagButton({ text }) {
  const [isDisabled, setDisabled] = useState(true);

  const handlePress = () => {
    if (isDisabled) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const buttonStyle = [
    styles.buttonStyle,
    {
      backgroundColor: isDisabled ? 'white' : '#666666',
      borderColor: isDisabled ? 'white' : '#666666',
    },
  ];
  const buttonTextStyle = [
    styles.buttonTextStyle,
    { color: isDisabled ? '#666666' : 'white' },
  ];

  return (
    <View style={{ flexWrap: 'wrap' }}>
      <TouchableOpacity onPress={handlePress}>
        <View style={buttonStyle}>
          <Text style={buttonTextStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 3,
    borderRadius: 20,
    backgroundColor: '#666666',
    borderColor: '#666666',
    borderWidth: 1.5,
    paddingHorizontal: 10,
    shadowColor: '#000c',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    fontSize: 14,
    textAlign: 'center',
  },
});
