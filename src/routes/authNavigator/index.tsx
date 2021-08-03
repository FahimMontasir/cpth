import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/AuthScreen/WelcomeScreen';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';
import SignUpScreen from '../../screens/AuthScreen/SignUpScreen';
import AppNavigator from '../appNavigator';

export type AuthParamProps = {
  welcome: undefined;
  login: undefined;
  signUp: undefined;
  root: undefined;
};

const AuthStack = createStackNavigator<AuthParamProps>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="welcome" headerMode="none">
      <AuthStack.Screen name="welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="signUp" component={SignUpScreen} />
      <AuthStack.Screen name="root" component={AppNavigator} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
