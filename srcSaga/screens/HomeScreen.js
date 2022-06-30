import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import SimpleCounter from '../components/SimpleCounter';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SimpleCounter />
    </SafeAreaView>
  );
};

export default HomeScreen;
