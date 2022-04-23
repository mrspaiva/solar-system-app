import React from 'react';
import {NavigationButtonProps} from '../../components/navigation-button/Navigation-button.props';
import {
  ButtonTitle,
  ButtonContainer,
  ContentSection,
  Gradient,
  Icon,
} from './Navigation-button.styles';
const NavigationButton: React.FC<NavigationButtonProps> = ({onPress}) => {
  return (
    <Gradient>
      <ButtonContainer onPress={onPress}>
        <ContentSection>
          <ButtonTitle>Começar agora</ButtonTitle>
          <Icon />
        </ContentSection>
      </ButtonContainer>
    </Gradient>
  );
};

export default NavigationButton;
