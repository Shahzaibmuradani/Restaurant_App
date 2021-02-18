import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SearchScreen'>
        <Stack.Screen
          name='Search'
          component={SearchScreen}
          options={{ title: 'Restaurant' }}
        ></Stack.Screen>
        <Stack.Screen
          name='ResultsShow'
          component={ResultsShowScreen}
          options={{ title: 'Restaurant' }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
