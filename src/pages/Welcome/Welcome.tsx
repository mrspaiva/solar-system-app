import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types/RootStackParams';
import NavigationButton from '../../components/navigation-button/Navigation-button';

import {
  Background,
  Container,
  ContentWrapper,
  NavigationSection,
  NavigationText,
  Subtitle,
  Title,
  TitleSection,
} from './Welcome.styles';

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome = () => {
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
          <NavigationButton
            onPress={() => navigation.navigate('BottomTabsRoute')}
          />
        </NavigationSection>
      </ContentWrapper>
    </Container>
  );
};

export default Welcome;
