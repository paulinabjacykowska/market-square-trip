import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import { BASE_TRANSITION_CONFIG } from './src/constants/screenTransitions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as screenNames from './src/constants/screenNames';
import HomeScreen from './src/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import tagsReducer from './store/reducers/mainTags';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  tags: tagsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [areFontsLoaded] = useFonts({
    'sf-bold': require('./assets/fonts/SF-Pro-Rounded-Bold.otf'),
    'sf-semibold': require('./assets/fonts/SF-Pro-Rounded-Semibold.otf'),
    'sf-regular': require('./assets/fonts/SF-Pro-Rounded-Regular.otf'),
    'sf-medium': require('./assets/fonts/SF-Pro-Rounded-Medium.otf'),
    'sf-light': require('./assets/fonts/SF-Pro-Rounded-Light.otf'),
  });

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name={screenNames.HOME_SCREEN}
            component={HomeScreen}
            options={BASE_TRANSITION_CONFIG}
          />
          <Stack.Screen
            name={screenNames.RESTAURANT_DETAILS_SCREEN}
            component={RestaurantDetailsScreen}
            options={BASE_TRANSITION_CONFIG}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
