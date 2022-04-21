import React from 'react';
import {ButtonTitle, Container, ContentSection, Gradient, Icon} from './styles';
const NavigationButton = () => {
  return (
    <Gradient>
      <Container>
        <ContentSection>
          <ButtonTitle>Começar agora</ButtonTitle>
          <Icon />
        </ContentSection>
      </Container>
    </Gradient>
  );
};

export default NavigationButton;
