import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Container, Content } from './styles';
import { useAuth } from '../../context/AuthContext';

export const Home: React.FC = () => {
  const { logOut } = useAuth();

  return (
    <Container>
      <Content>
        <TouchableOpacity onPress={() => logOut()}>
          <Text style={{ color: '#fff' }}>Logout</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};
