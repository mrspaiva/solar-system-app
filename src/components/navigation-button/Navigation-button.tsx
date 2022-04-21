import React from 'react';
import {NavigationButtonProps} from '../../components/navigation-button/Navigation-button.props';
import {
  ButtonTitle,
  Container,
  ContentSection,
  Gradient,
  Icon,
} from './Navigation-button.styles';
const NavigationButton: React.FC<NavigationButtonProps> = ({onPress}) => {
  return (
    <Gradient>
      <Container onPress={onPress}>
        <ContentSection>
          <ButtonTitle>Começar agora</ButtonTitle>
          <Icon />
        </ContentSection>
      </Container>
    </Gradient>
  );
};

export default NavigationButton;
