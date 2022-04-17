import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParams';

import Welcome from '../pages/Welcome';
import BottomTabsRoute from './bottomTabsRoute';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoute() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Homepage" component={BottomTabsRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
