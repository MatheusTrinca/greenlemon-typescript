import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import { IUser } from '../../models/user';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: ${RFValue(52)}px;
  height: ${RFValue(52)}px;
  border-radius: 10px;
`;

export const UserInfoDetail = styled.View`
  margin-left: 17px;
`;
export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray800};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray800};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LogOutButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const UsersList = styled(
  FlatList as new (props: FlatListProps<IUser>) => FlatList<IUser>,
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showVerticalScrollIndicator: false,
})``;

export const UsersListHeader = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
  font-size: ${RFValue(24)}px;
  margin-bottom: ${RFValue(14)}px;
`;

export const UsersListEmpty = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(18)}px;
`;
