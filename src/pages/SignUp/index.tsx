import React from 'react';
import {
  Container,
  Content,
  FooterContainer,
  FooterIcon,
  FooterText,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProps {
  goBack: () => void;
}

export const SignUp: React.FC = () => {
  const { goBack } = useNavigation<ScreenNavigationProps>();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Faça seu Cadastro</Title>
            <Input
              icon="user"
              placeholder="Nome"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              icon="mail"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              icon="key"
              placeholder="Senha"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
            />
            <Button text="Entrar" onPress={() => {}} />
          </Content>
        </Container>
      </ScrollView>
      <FooterContainer onPress={() => goBack()}>
        <FooterIcon name="arrow-left" />
        <FooterText>Voltar para o login</FooterText>
      </FooterContainer>
    </KeyboardAvoidingView>
  );
};
