/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Heading,
  Input,
  Link,
  Text,
  VStack,
  NativeBaseProvider,
} from 'native-base';
import React from 'react';
import MainContainer from './src/screens/main/MainContainer';
//import ScreenTwo from './src/screens/screen2/ScreenTwo';

const App = () => {
  return (
    <NativeBaseProvider>
      <MainContainer />
      {/*<ScreenTwo />*/}
    </NativeBaseProvider>
  );
};

export default App;
