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
  UsersList,
  UsersListEmpty,
  UsersListHeader,
  UserWrapper,
} from './styles';
import { useAuth } from '../../context/AuthContext';
import { Alert, StatusBar } from 'react-native';
import defaultAvatar from '../../assets/avatar02.png';
import { IUser } from '../../models/user';
import { api } from '../../services/api';
import { User } from '../../components/User';
import { useNavigation } from '@react-navigation/native';

interface IScreenPropsNavigation {
  navigate: (screen: string) => void;
}

export const Home: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);

  const { logOut } = useAuth();

  const { navigate } = useNavigation();

  const handleLogOut = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente sair da aplicação?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => logOut(),
      },
    ]);
  };

  React.useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await api.get('users');
        setUsers(response.data);
      } catch (error) {
        Alert.alert(
          'Erro ao carregar usuários',
          'Ocorreu um erro ao carregar os dados dos usuários, tente novamente mais tarde',
        );
        throw new Error(error as string);
      }
    };
    loadUsers();
  }, []);

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
            <LogOutButton onPress={handleLogOut}>
              <Icon name="power" />
            </LogOutButton>
          </UserWrapper>
        </Header>
        <UsersList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <User user={item} onPress={() => {}} />}
          ListHeaderComponent={<UsersListHeader>Usuários</UsersListHeader>}
          ListEmptyComponent={
            <UsersListEmpty>Ops! Nenhum usuário cadastrado</UsersListEmpty>
          }
        />
      </Container>
    </>
  );
};
