import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//screens
import Navigation from './src/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#FFFFFF' barStyle="dark-content" />
      <Navigation />
    </SafeAreaProvider>
  );
};
export default App;
