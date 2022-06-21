import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  flex: 1;
`;

export const Content = styled.View`
  padding: ${RFValue(24)}px;
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
`;
