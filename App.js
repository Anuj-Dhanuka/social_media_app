import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

import { getInterFont } from './src/assets/fonts/Inter/interHelper';
import { HomeScreen } from './src/screens/HomeScreen';


const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1}
});

export default App;
