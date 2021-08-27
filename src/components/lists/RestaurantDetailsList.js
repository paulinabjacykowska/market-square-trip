import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MenuButton from '../../components/buttons/MenuButton';
import { Dimensions } from 'react-native';
import SingleRestaurantImages from './SingleRestaurantImages';
import MainTagButton from '../buttons/MainTagButton';
import * as screenNames from '../../constants/screenNames';

export default function RestaurantDetailsList({ restaurant, navigation }) {
  function getDayOfWeek(fromNow = 0) {
    switch ((new Date().getDay() + fromNow) % 7) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  }
  function isRestaurantOpen(openHours) {
    var current = new Date();
    var dayOfWeek = getDayOfWeek();
    var open = openHours[dayOfWeek] ? openHours[dayOfWeek][0] : null;
    var close = openHours[dayOfWeek] ? openHours[dayOfWeek][1] : null;
    if (open && current.getHours() < close && current.getHours() > open) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.open}>Otwarte</Text>
          <Text style={styles.text}>Zamknięcie {close}:00</Text>
        </View>
      );
    }
    var prevClose = openHours[getDayOfWeek(-1)]
      ? openHours[getDayOfWeek(-1)][1]
      : null;
    if (current.getHours() < prevClose) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.open}>Otwarte</Text>
          <Text style={styles.text}>Zamknięcie {prevClose}:00</Text>
        </View>
      );
    }
    if (open && current.getHours() > prevClose) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.close}>Zamknięte</Text>
          <Text style={styles.text}>Otwarcie {open}:00</Text>
        </View>
      );
    }
    var nextOpen;
    var i = 1;
    while (!nextOpen) {
      nextOpen = openHours[getDayOfWeek(i)]
        ? (openHours[getDayOfWeek(i)], getDayOfWeek(i))
        : null;
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.close}>Zamknięte</Text>
        <Text style={styles.text}>
          Otwarcie {nextOpen[1]} {nextOpen[0][0]}:00
        </Text>
      </View>
    );
  }

  function tags(restaurantTags) {
    var allTags = [
      'ogródek',
      '🌳',
      'zestawy dla dzieci',
      '👶',
      'zwierzęta',
      '🐕',
      'strefa palacza',
      '🚬 ',
      'angielski',
      '🇬🇧',
      'niemiecki',
      '🇩🇪',
      'muzyka na zywo',
      '🎵',
    ];
    var step;
    let data = [];
    for (step = 0; step < restaurantTags.length; step++) {
      for (var step2 = 0; step2 < allTags.length; step2 += 2) {
        if (restaurantTags[step] == allTags[step2]) {
          data.push({
            name: allTags[step2],
            emoji: allTags[step2 + 1],
            key: step,
          });
        }
      }
    }
    return data;
  }

  function mainTags(restaurantTags) {
    var step;
    const mainTagList = [
      'obiady',
      '#E09F3E',
      'alkohole',
      '#4CAF50',
      'śniadania',
      '#335C67',
      'kawa',
      '#9E2A2B',
      'desery',
      '#540B0E',
    ];
    let data = [];
    for (step = 0; step < restaurantTags.length; step++) {
      for (var step2 = 0; step2 < mainTagList.length; step2 += 2) {
        if (restaurantTags[step] == mainTagList[step2]) {
          data.push({
            name: mainTagList[step2],
            color: mainTagList[step2 + 1],
            key: step,
          });
        }
      }
    }
    return data;
  }

  const renderItem = ({ item }) => (
    <View style={styles.tagList}>
      <Text>{item.emoji}</Text>
      <Text style={{ marginLeft: 5, color: '#666666' }}>{item.name}</Text>
    </View>
  );

  const renderMainTagItem = ({ item }) => (
    <View style={styles.mainTagList}>
      <MainTagButton
        text={item.name}
        color={item.color}
        tagPadding={2}
        noShadow={true}
        isDisabled={true}
      />
    </View>
  );

  return (
    <SafeAreaView>
      <SingleRestaurantImages restaurantImages={restaurant.pictures} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ flex: 3 }}
          onPress={() =>
            navigation.navigate(screenNames.RESTAURANT_DETAILS_SCREEN, {
              restaurant,
            })
          }
        >
          <View>
            <Text style={styles.title}>{restaurant.name}</Text>
            {isRestaurantOpen(restaurant.openHours)}
            <FlatList
              data={tags(restaurant.tags)}
              renderItem={renderItem}
              keyExtractor={item => item.key}
              scrollEnabled={false}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.menuButtonView}>
          <View style={styles.menuButton}>
            <MenuButton name={restaurant.name} />
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={mainTags(restaurant.tags)}
              renderItem={renderMainTagItem}
              keyExtractor={item => item.key}
              scrollEnabled={false}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#555555',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: 15,
    marginBottom: 5,
  },
  open: {
    color: '#119944',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: Dimensions.get('window').width * 0.05,
  },
  close: {
    color: '#990001',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: Dimensions.get('window').width * 0.05,
    marginBottom: 10,
  },
  menuButtonView: {
    alignItems: 'flex-end',
    flex: 2,
    marginTop: 8,
  },
  text: {
    color: '#888888',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
  tagList: {
    flexDirection: 'row',
    fontSize: 20,
    marginLeft: Dimensions.get('window').width * 0.05,
    marginTop: 5,
  },
  mainTagList: {
    alignSelf: 'flex-end',
    marginRight: 15,
    padding: 5,
  },
  menuButton: {
    marginRight: 20,
    marginTop: 10,
  },
});
