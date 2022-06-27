import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  flex: 1;
`;

export const Content = styled.View`
  padding: ${RFValue(18)}px ${RFValue(24)}px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  margin-bottom: ${RFValue(20)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: ${RFValue(18)}px;
  text-align: center;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  border-radius: 10px;
  padding: ${RFValue(18)}px ${RFValue(24)}px;
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
