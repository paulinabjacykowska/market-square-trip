import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MainTagButton({
  text,
  color,
  style: propStyle,
  isActive,
  onPress,
  isDisabled,
  ifCompressed,
}) {
  const buttonStyle = [
    styles.buttonStyle,
    {
      borderColor: color,
      backgroundColor: isActive ? color : 'white',
      width: ifCompressed ? 32 : 'auto',
    },
  ];

  const buttonTextStyle = [
    styles.buttonTextStyle,
    { color: isActive ? 'white' : color },
  ];

  const dotStyle = [
    styles.dotStyle,
    {
      backgroundColor: isActive ? 'white' : color,
      marginRight: ifCompressed ? 0 : 3,
    },
  ];

  return (
    <View style={{ flexWrap: 'wrap' }}>
      <TouchableOpacity onPress={onPress} disabled={isDisabled}>
        <View style={[buttonStyle, propStyle]}>
          <View style={dotStyle}></View>
          <Text style={buttonTextStyle}>{ifCompressed ? '' : text} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    shadowColor: '#000c',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    fontSize: 14,
    alignSelf: 'center',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 1,
  },
});
