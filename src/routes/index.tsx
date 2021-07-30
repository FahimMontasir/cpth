import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import AppNavigator from './appNavigator';

const Navigator = () => {
  // const isAuthenticated = false;

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
export default Navigator;
