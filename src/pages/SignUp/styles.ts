import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  flex: 1;
`;

export const Content = styled.View`
  padding: ${RFValue(18)}px ${RFValue(24)}px;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: ${RFValue(40)}px;
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
`;

export const FooterContainer = styled(TouchableOpacity)`
  padding: ${RFValue(18)}px 0;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray800};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 6px;
`;

export const FooterIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(18)}px;
  margin-right: 6px;
`;
