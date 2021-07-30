import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';

import Navigator from './routes';
import {defaultTheme} from './theme/default';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Navigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
export default App;
