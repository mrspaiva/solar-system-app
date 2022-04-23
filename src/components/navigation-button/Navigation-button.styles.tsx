import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient).attrs({
  colors: ['#EF5F53', '#FA8F70'],
  start: {x: 0, y: 1},
  end: {x: 1, y: 0},
})`
  border-radius: 8px;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 51px;
  width: 206px;
  justify-content: center;
  align-items: center;
`;

export const ContentSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ButtonTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 16px;
  color: #fff;
`;

export const Icon = styled(FeatherIcon).attrs({
  name: 'arrow-right',
  size: 20,
  color: '#fff',
})``;
