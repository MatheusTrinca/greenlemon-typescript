import React from 'react';
import { Container, Content, Logo, Title } from './styles';
import logo from '../../assets/logo.png';

export const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo source={logo} />
        <Title>Faça seu login</Title>
      </Content>
    </Container>
  );
};
