import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Background = styled.Image.attrs({
  source: require('../../assets/background.png'),
})`
  background-color: #000;
  position: absolute;
`;

export const ContentWrapper = styled.View`
  height: 60%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-self: flex-end;
`;

export const TitleSection = styled.View`
  max-width: 304px;
`;

export const Subtitle = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 16px;
  text-align: center;
  color: #fff;
  opacity: 0.65;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 32px;
  color: #fff;
  text-align: center;
`;

export const NavigationSection = styled.View`
  margin-bottom: 70px;
`;

export const NavigationText = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
`;
