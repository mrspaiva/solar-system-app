import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParams';

// import { Container } from './styles';

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
  const navigation = useNavigation<welcomeScreenProp>();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Homepage')}>
        <Text>Solar System</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
