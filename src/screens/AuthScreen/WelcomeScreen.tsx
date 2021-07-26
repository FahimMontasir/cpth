import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

const WelcomeScreen = () => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="guest" onPress={() => console.log('guest')} />
      <Button title="login" />
      <Button title="signUp" />
    </View>
  );
};
export default WelcomeScreen;
