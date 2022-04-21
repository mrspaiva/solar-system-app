import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParams';
import NavigationButton from '../../components/navigation-button';

import {
  Background,
  Container,
  ContentWrapper,
  NavigationSection,
  NavigationText,
  Subtitle,
  Title,
  TitleSection,
} from './styles';

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<welcomeScreenProp>();

  return (
    <Container>
      <Background />
      <ContentWrapper>
        <TitleSection>
          <Subtitle>Aperte o cinto</Subtitle>
          <Title>Comece sua jornada pelo sistema solar.</Title>
        </TitleSection>

        <NavigationSection>
          <NavigationText>Pronto para a decolagem?</NavigationText>
          <NavigationButton />
        </NavigationSection>
      </ContentWrapper>
    </Container>
  );
};

export default Welcome;
