import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {BottomTabParamList} from '../types/bottomTabParams';

import Homepage from '../pages/Homepage/Homepage';
import Search from '../pages/Search/Search';
import {Text} from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabsRoute() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#151515',
          height: 70,
          paddingBottom: 0,
        },
        tabBarActiveTintColor: '#fff',
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                color: '#fff',
              }}>
              {focused && route.name}
            </Text>
          );
        },
      })}>
      <BottomTab.Screen
        name="Início"
        component={Homepage}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Buscar"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="search" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabsRoute;
