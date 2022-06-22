import React from 'react';
import {
  Container,
  Content,
  FooterContainer,
  FooterIcon,
  FooterText,
  ForgotPasswordButton,
  ForgotPasswordText,
  Logo,
  Title,
} from './styles';
import logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

export const SignIn: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProps>();

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
            <Title>Faça seu login</Title>
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
            <ForgotPasswordButton>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPasswordButton>
          </Content>
        </Container>
      </ScrollView>
      <FooterContainer onPress={() => navigate('SignUp')}>
        <FooterIcon name="log-in" />
        <FooterText>Criar conta</FooterText>
      </FooterContainer>
    </KeyboardAvoidingView>
  );
};
