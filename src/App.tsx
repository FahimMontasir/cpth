import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {StatusBar, Text} from 'react-native';

import styled from '@emotion/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-elements';
import Navigator from './routes';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Navigator />
    </SafeAreaProvider>
  );
};
export default App;
const Container = styled.View`
  background-color: pink;
  flex: 1;
`;
