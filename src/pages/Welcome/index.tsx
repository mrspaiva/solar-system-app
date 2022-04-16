import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const Welcome: React.FC = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity>
        <Text>Solar System</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
