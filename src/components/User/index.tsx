import React from 'react';
import {
  Container,
  UserAvatar,
  UserData,
  UserEmailContainer,
  UserInfo,
  UserNameContainer,
  UserTitle,
} from './styles';
import avatarDefault from '../../assets/avatar02.png';
import { IUser } from '../../models/user';

interface IUserProps {
  user: IUser;
  onPress: () => void;
}

export const User: React.FC<IUserProps> = ({ user, onPress }) => {
  return (
    <Container onPress={onPress}>
      <UserInfo>
        <UserNameContainer>
          <UserTitle>NAME</UserTitle>
          <UserData>{user.name}</UserData>
        </UserNameContainer>

        <UserEmailContainer>
          <UserTitle>EMAIL</UserTitle>
          <UserData>{user.email}</UserData>
        </UserEmailContainer>
      </UserInfo>

      <UserAvatar source={avatarDefault} />
    </Container>
  );
};
