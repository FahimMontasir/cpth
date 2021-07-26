import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import styled from '@emotion/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Container>
      <StatusBar backgroundColor="white" />

      <NavigationContainer>
        <Text>Anisur Rahman</Text>
        <Stack.Navigator>
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};
export default App;
const Container = styled.View`
  background-color: pink;
  flex: 1;
`;
