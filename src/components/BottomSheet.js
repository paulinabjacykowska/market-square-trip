import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

export default function BottomSheet({
  title,
  height,
  renderContentInput,
  snapPoints,
  initialSnap,
  ref,
}) {
  const renderContent = () => (
    <View style={[styles.mainView, { height: height }]}>
      <View>
        <Text style={styles.line}>━━━</Text>
      </View>
      <View style={{ padding: 2 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {renderContentInput}
    </View>
  );

  const sheetRef = ref;
  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints} // minimalne 50, dla tytułu
        borderRadius={20}
        initialSnap={initialSnap}
        renderContent={renderContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  line: {
    color: '#444444',
    fontSize: 15,
    fontWeight: '900',
  },
  title: {
    fontSize: 18,
    padding: 2,
  },
  mainView: {
    backgroundColor: 'white',
    padding: 1,
    alignItems: 'center',
  },
});
