import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStackParams';

import Welcome from '../pages/Welcome';
import BottomTabsRoute from './bottomTabsRoute';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Homepage" component={BottomTabsRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
