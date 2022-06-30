import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImagesScreen from '../screens/ImagesScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Images">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Images" component={ImagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
