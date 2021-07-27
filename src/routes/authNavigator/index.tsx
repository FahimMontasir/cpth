import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/AuthScreen/WelcomeScreen';
import LoginScreen from '../../screens/AuthScreen/LoginScreen';
import SignUpScreen from '../../screens/AuthScreen/SignUpScreen';

export type AuthParamProps = {
  welcome: undefined;
  login: undefined;
  signUp: undefined;
};

const AuthStack = createStackNavigator<AuthParamProps>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="welcome" headerMode="none">
      <AuthStack.Screen name="welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="login" component={LoginScreen} />
      <AuthStack.Screen name="signUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
export default AuthNavigator;
