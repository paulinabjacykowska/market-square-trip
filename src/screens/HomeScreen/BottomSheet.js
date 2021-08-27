import BaseBottomSheet from '../../components/backdrop/BaseBottomSheet';
import React from 'react';
import ImagesListsList from '../../components/lists/ImagesListsList';
import { restaurants } from '../../constants/restaurantsList';
import SingleRestaurantBottomSheet from '../../components/backdrop/SingleRestaurantBottomSheet';
import RestaurantDetailsList from '../../components/lists/RestaurantDetailsList';

const BottomSheet = props => {
  const ref = React.createRef();
  const refSingleRestaurant = React.createRef();
  const title = props.title ? props.title : 'Polecane';
  const rest = props.restaurants[0] ? props.restaurants : restaurants;
  const bottomSheet = (
    <BaseBottomSheet
      title={title}
      renderContentInput={
        <ImagesListsList restaurantsList={rest} navigation={props.navigation} />
      }
      snapPoints={[560, 250, 50]}
      initialSnap={2}
      ref={ref}
    />
  );

  const srBottomSheet = (
    <SingleRestaurantBottomSheet
      renderContentInput={
        <RestaurantDetailsList
          restaurant={props.restaurants[0]}
          navigation={props.navigation}
        />
      }
      ref={refSingleRestaurant}
    />
  );
  const backdrop = props.restaurants[1]
    ? bottomSheet
    : props.restaurants[0]
    ? srBottomSheet
    : bottomSheet;
  return backdrop;
};
export default BottomSheet;
