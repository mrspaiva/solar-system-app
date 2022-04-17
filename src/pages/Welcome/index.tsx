import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParams';

import {Background, Container, Subtitle, Title, TitleSection} from './styles';

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<welcomeScreenProp>();

  return (
    <Container>
      <Background />
      <TitleSection>
        <Subtitle>Aperte o cinto</Subtitle>
        <Title>Comece sua jornada pelo sistema solar.</Title>
      </TitleSection>
    </Container>
  );
};

export default Welcome;
