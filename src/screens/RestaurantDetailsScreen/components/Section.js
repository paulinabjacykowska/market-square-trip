import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const Section = ({ title, isBigger, children }) => (
  <View style={styles.root}>
    <Text style={[styles.title, isBigger && styles.biggerTitle]}>{title}</Text>
    <View>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  root: {
    marginBottom: 36,
  },
  title: {
    color: '#000000BF',
    fontFamily: 'sf-semibold',
    fontSize: 17,
    lineHeight: 20,
    marginBottom: 16,
  },
  biggerTitle: {
    fontSize: 20,
    lineHeight: 24,
  },
});

export default Section;
