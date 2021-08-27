import ImagesList from './ImagesList';
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
import * as screenNames from '../../constants/screenNames';

export default function ImagesListsList({ restaurantsList, navigation }) {
  function getDayOfWeekName(day) {
    switch (day) {
      case 'Sunday':
        return 'Niedziela';
      case 'Monday':
        return 'Poniedziałek';
      case 'Tuesday':
        return 'Wtorek';
      case 'Wednesday':
        return 'Środa';
      case 'Thursday':
        return 'Czwartek';
      case 'Friday':
        return 'Piątek';
      case 'Saturday':
        return 'Sobota';
    }
  }

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
    if ((open && current.getHours() > prevClose, current.getHours() < open)) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.close}>Zamknięte</Text>
          <Text style={styles.text}>Otwarcie {open}:00</Text>
        </View>
      );
    }
    var nextOpen = openHours[getDayOfWeek(1)]
      ? getDayOfWeek(1)
      : openHours[getDayOfWeek(2)]
      ? getDayOfWeek(2)
      : getDayOfWeek(3);
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.close}>Zamknięte</Text>
        <Text style={styles.text}>
          Otwarcie {getDayOfWeekName(nextOpen)} {openHours[nextOpen][0]}:00
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
    var tagsIcons = '';
    var step;
    for (step = 0; step < restaurantTags.length; step++) {
      for (var step2 = 0; step2 < allTags.length; step2 += 2) {
        if (restaurantTags[step] == allTags[step2]) {
          tagsIcons = tagsIcons + allTags[step2 + 1] + ' ';
        }
      }
    }

    return (
      <Text style={[styles.close, { color: '#000', fontSize: 20 }]}>
        {tagsIcons}
      </Text>
    );
  }

  var data = [];
  for (var key in restaurantsList) {
    data.push({
      list: <ImagesList restaurantImages={restaurantsList[key].pictures} />,
      name: restaurantsList[key].name,
      hours: isRestaurantOpen(restaurantsList[key].openHours),
      button: <MenuButton name={restaurantsList[key].name} />,
      tag: tags(restaurantsList[key].tags),
      id: key,
      restaurant: restaurantsList[key],
    });
  }

  data.push({ list: <View style={{ height: 80 }} /> }); //added to list for more convenient scroll

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 5 }} key={item.id}>
      {item.list}
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 3 }}>
          <TouchableOpacity
            style={{ flex: 3 }}
            activeOpacity={0.2}
            onPress={() =>
              navigation.navigate(screenNames.RESTAURANT_DETAILS_SCREEN, {
                restaurant: item.restaurant,
              })
            }
          >
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
          {item.hours}
          {item.tag}
        </View>
        <View style={styles.menuButton}>{item.button}</View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: Dimensions.get('window').width * 0.08,
    marginTop: 5,
    marginBottom: 5,
  },
  open: {
    fontSize: 12,
    marginLeft: Dimensions.get('window').width * 0.08,
    marginBottom: 10,
    color: '#119944',
    fontWeight: 'bold',
  },
  close: {
    fontSize: 12,
    marginLeft: Dimensions.get('window').width * 0.08,
    marginBottom: 10,
    color: '#990001',
    fontWeight: 'bold',
  },
  menuButton: {
    flex: 2,
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 10,
  },
});
