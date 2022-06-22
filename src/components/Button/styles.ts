import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  border-radius: 10px;
  padding: ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: ${RFValue(16)}px 0;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
