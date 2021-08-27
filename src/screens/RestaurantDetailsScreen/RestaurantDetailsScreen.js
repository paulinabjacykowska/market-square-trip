import {
  useWindowDimensions,
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Swiper from 'react-native-swiper';
import Section from './components/Section';
import React from 'react';
import DetailsButton from './components/DetailsButton';
import MapView, { Marker } from 'react-native-maps';
import { INITIAL_SMALL_REGION } from '../../constants/map';
import MAP_STYLES from '../../constants/mapStyles.json';
import ProposedFood from './components/ProposedFood';
import EventTile from './components/EventTile';
import RestaurantProperty from './components/RestaurantProperty';

const RestaurantDetailsScreen = ({ navigation, route }) => {
  const window = useWindowDimensions();
  const { restaurant } = route.params;

  const imageSize = {
    width: window.width,
    height: 250,
  };
  const snapPoints = [
    window.height + 30,
    Platform.OS === 'android' ? window.height - 155 : window.height - 175,
  ];

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.snapper} />
      </View>
      <View style={{ paddingHorizontal: 30 }}>
        <Section title={restaurant.name} isBigger>
          <RestaurantProperty title="Muzyka wieczorowa" icon="music-note" />
          <RestaurantProperty title="Obsługa po niemiecku" icon="forum" />
          <RestaurantProperty title="Miejsca w ogrodzie" icon="park" />
        </Section>
        <Section title="Wydarzenia">
          <ScrollView
            horizontal
            style={{ marginHorizontal: -32, paddingLeft: 32 }}
          >
            <EventTile
              title="Koncert skrzypcowy"
              description="Pn., Śr., Pt. o 21:00"
              imageUri="https://images.pexels.com/photos/3816104/pexels-photo-3816104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              isToday
            />
            <EventTile
              title="Koncert akustyczny"
              description="Wt., Czw. o 21:00"
              imageUri="https://images.pexels.com/photos/5255999/pexels-photo-5255999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </ScrollView>
        </Section>
        <Section title="Menu i polecane">
          <ProposedFood
            title="Tagliatelle salmone"
            price="18,00"
            imageUri="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
          <DetailsButton title="Zobacz pozostał 38 pozycji" icon="menu-book" />
        </Section>

        <Section title="Podstawowe informacje">
          <DetailsButton
            title={
              <>
                <Text style={styles.closedTitle}>Zamknięte</Text>
                <Text> 13:00 - 23:00</Text>
              </>
            }
          />
          <DetailsButton title="Podwale 83, Wrocław 50-414" icon="room" />
          <MapView
            style={styles.map}
            initialRegion={{ ...INITIAL_SMALL_REGION, ...restaurant.marker }}
            customMapStyle={MAP_STYLES}
          >
            <Marker
              key={restaurant.name}
              coordinate={restaurant.marker}
              pinColor="tomato"
            />
          </MapView>
          <DetailsButton title="Odwiedź stronę internetową" icon="link" />
          <DetailsButton title="+48 793 002 948" icon="phone" />
          <DetailsButton title="Wyślij wiadomość e-mail" icon="email" />
        </Section>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <View style={imageSize}>
        <Swiper activeDotColor="#ffffff" dotColor="#ffffff70">
          {Object.values(restaurant.pictures).map(picture => (
            <Image key={picture} style={imageSize} source={picture} />
          ))}
        </Swiper>
      </View>
      <BottomSheet
        snapPoints={snapPoints}
        borderRadius={16}
        renderContent={renderContent}
        initialSnap={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  contentContainer: {
    height: '100%',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  headerContainer: {
    paddingTop: 8,
    paddingBottom: 20,
    alignItems: 'center',
  },
  snapper: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#00000026',
  },
  restaurantName: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'sf-bold',
    color: '#000000BF',
  },

  map: {
    width: '100%',
    height: 70,
    borderRadius: 8,
    marginVertical: 4,
  },
  closedTitle: {
    color: '#FF3E00',
    fontFamily: 'sf-medium',
  },
});

export default RestaurantDetailsScreen;
