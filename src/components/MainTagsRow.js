import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import MainTagButton from '../components/buttons/MainTagButton';
import * as mainTagsActions from '../../store/actions/mainTags';

const MainTagsRow = ({ tags }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 74 }}
        data={tags}
        renderItem={itemData => (
          <MainTagButton
            style={styles.tag}
            text={itemData.item.tagName}
            color={itemData.item.tagColor}
            onPress={() => {
              dispatch(mainTagsActions.changeMainTag(itemData.item));
            }}
          />
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 42,
    marginTop: 100,
    position: 'absolute',
  },
  tag: {
    height: 32,
    marginRight: 8,
    shadowOpacity: 0,
  },
});

export default MainTagsRow;
