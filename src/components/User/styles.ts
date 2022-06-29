import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  padding: ${RFValue(10)}px ${RFValue(16)}px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;

export const UserInfo = styled.View``;

export const UserNameContainer = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const UserTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(14)}px;
  text-transform: uppercase;
`;

export const UserData = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
`;

export const UserEmailContainer = styled.View``;

export const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 10px;
`;
