import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamProps} from '../../routes/authNavigator';

type NavigationProp = StackNavigationProp<AuthParamProps, 'welcome'>;

type Props = {
  navigation: NavigationProp;
};

const WelcomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="guest" />
      <Button title="login" onPress={() => navigation.navigate('login')} />
      <Button title="signUp" onPress={() => navigation.navigate('signUp')} />
    </View>
  );
};
export default WelcomeScreen;
