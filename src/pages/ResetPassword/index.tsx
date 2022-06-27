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
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

interface IFormInputs {
  [name: string]: any;
}

interface ScreenNavigationProps {
  navigate: (screen: string) => void;
}

const formSchema = yup.object({
  token: yup.string().uuid('Token inválido'),
  password: yup.string().required('Informe uma senha'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirmação incorreta'),
});

export const ResetPassword: React.FC = () => {
  const { navigate } = useNavigation<ScreenNavigationProps>();

  const { resetPassword } = useAuth();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleResetPasswordSubmit = (form: IFormInputs) => {
    resetPassword(form.token, form.password, form.password_confirmation);
    navigate('SignIn');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Container>
          <Content>
            <Logo source={logo} />
            <Title>Redefina sua senha</Title>
            <Input
              control={control}
              name="token"
              icon="key"
              placeholder="Token"
              error={errors.token?.message}
            />
            <Input
              control={control}
              name="password"
              icon="key"
              placeholder="Senha"
              secureTextEntry
              error={errors.password?.message}
            />
            <Input
              control={control}
              name="password_confirmation"
              icon="key"
              placeholder="Repita sua senha"
              secureTextEntry
              error={errors.password_confirmation?.message}
            />
            <Button
              text="Enviar"
              onPress={handleSubmit(handleResetPasswordSubmit)}
            />
          </Content>
        </Container>
        <FooterContainer onPress={() => navigate('SignIn')}>
          <FooterIcon name="log-in" />
          <FooterText>Voltar para login</FooterText>
        </FooterContainer>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
