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
import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '../../context/AuthContext';

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  // name: yup.string().required('Insira um nome').max(100, 'Máximo de 100 caracteres'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Insira um email'),
  password: yup.string().required('Isira uma senha'),
});

export const SignIn: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProps>();

  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignIn = (form: IFormInputs) => {
    signIn(form.email, form.password);
  };

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
              control={control}
              name="email"
              icon="mail"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              error={errors.email && errors.email.message}
            />
            <Input
              control={control}
              icon="key"
              name="password"
              placeholder="Senha"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              error={errors.password && errors.password.message}
            />
            <Button
              text="Entrar"
              onPress={handleSubmit(handleSignIn)}
              disabled={errors.email || errors.password}
            />
            <ForgotPasswordButton onPress={() => navigate('ForgotPassword')}>
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
