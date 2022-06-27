import React from 'react';
import {
  Container,
  Header,
  Icon,
  LogOutButton,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserName,
  UserWrapper,
} from './styles';
import { useAuth } from '../../context/AuthContext';
import { StatusBar } from 'react-native';
import defaultAvatar from '../../assets/avatar02.png';

export const Home: React.FC = () => {
  const { logOut } = useAuth();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <UserAvatarButton>
                <UserAvatar source={defaultAvatar} />
              </UserAvatarButton>
              <UserInfoDetail>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>Matheus</UserName>
              </UserInfoDetail>
            </UserInfo>
            <LogOutButton onPress={() => logOut()}>
              <Icon name="power" />
            </LogOutButton>
          </UserWrapper>
        </Header>
      </Container>
    </>
  );
};
