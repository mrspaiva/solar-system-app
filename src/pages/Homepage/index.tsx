import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabParamList} from '../../types/bottomTabParams';

// import { Container } from './styles';

type HomepageScreenProp = StackNavigationProp<BottomTabParamList, 'Homepage'>;

const Homepage = () => {
  const navigation = useNavigation<HomepageScreenProp>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
      <Text>homepage</Text>
    </TouchableOpacity>
  );
};

export default Homepage;
