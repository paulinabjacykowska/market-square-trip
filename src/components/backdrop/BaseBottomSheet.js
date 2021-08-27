import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

export default function BaseBottomSheet({
  title,
  renderContentInput,
  snapPoints,
  initialSnap,
  ref,
}) {
  const renderContent = () => (
    <View style={[styles.mainView, { height: snapPoints[0] }]}>
      <View style={{ marginTop: 10, marginBottom: 5 }}>
        <View style={styles.line}></View>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>{renderContentInput}</View>
    </View>
  );
  return (
    <>
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints} // min snap min value 50 for title to be visable
        borderRadius={20}
        initialSnap={initialSnap}
        renderContent={renderContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#aaaaaa',
    width: 45,
    height: 3,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    padding: 2,
    marginBottom: 4,
  },
  mainView: {
    backgroundColor: 'white',
    padding: 1,
    alignItems: 'center',
  },
});
