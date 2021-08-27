import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

export default function SingleRestaurantBottomSheet({
  renderContentInput,
  ref,
}) {
  const renderContent = () => (
    <View style={[styles.mainView, { height: 280 }]}>
      <View>{renderContentInput}</View>
    </View>
  );
  const sheetRef = ref;
  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[280, 280]}
        borderRadius={20}
        initialSnap={0}
        renderContent={renderContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    padding: 1,
    alignItems: 'center',
  },
});
