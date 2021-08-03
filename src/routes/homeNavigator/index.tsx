import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';

export type HomeParamProps = {
  home: undefined;
};

const HomeStack = createStackNavigator<HomeParamProps>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
