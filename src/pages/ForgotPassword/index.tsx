import React from 'react';
import {
  Container,
  Content,
  Logo,
  Title,
  FooterContainer,
  FooterText,
  FooterIcon,
} from './styles';
import logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useAuth } from '../../context/AuthContext';

interface IFormInputs {
  [name: string]: any;
}

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

const formSchema = yup.object({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Informe um email'),
});

export const ForgotPassword: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProps>();

  const { forgotPassword } = useAuth();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleForgotPasswordSubmit = (form: IFormInputs) => {
    forgotPassword(form.email);
    navigate('ResetPassword');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <Content>
          <Logo source={logo} />
          <Title>Digite seu email</Title>
          <Input
            control={control}
            name="email"
            icon="mail"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            error={errors.email?.message}
          />
          <Button
            text="Enviar"
            onPress={handleSubmit(handleForgotPasswordSubmit)}
          />
        </Content>
      </Container>
      <FooterContainer onPress={() => navigate('SignIn')}>
        <FooterIcon name="log-in" />
        <FooterText>Voltar para login</FooterText>
      </FooterContainer>
    </KeyboardAvoidingView>
  );
};
