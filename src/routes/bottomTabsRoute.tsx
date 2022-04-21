import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../types/bottomTabParams';

import Homepage from '../pages/Homepage/Homepage';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabsRoute() {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen name="Homepage" component={Homepage} />
    </BottomTab.Navigator>
  );
}

export default BottomTabsRoute;
