import React from 'react';
import {
  ButtonContainer,
  ButtonText,
  Container,
  Content,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

export const SignUpConfirmation: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProps>();

  return (
    <Container>
      <Content>
        <Logo source={logo} />
        <Title>Cadastro confirmado, você já pode fazer o login</Title>
        <ButtonContainer onPress={() => navigate('SignIn')}>
          <ButtonText>OK</ButtonText>
        </ButtonContainer>
      </Content>
    </Container>
  );
};
