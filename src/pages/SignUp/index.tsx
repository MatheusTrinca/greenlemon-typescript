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
import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ScreenNavigationProps {
  goBack: () => void;
}

interface IFormInputs {
  [name: string]: any;
}

const formSchema = yup.object({
  name: yup
    .string()
    .required('Insira um nome')
    .max(100, 'Máximo de 100 caracteres'),
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Insira um email'),
  password: yup.string().required('Isira uma senha'),
});

export const SignUp: React.FC = () => {
  const { goBack } = useNavigation<ScreenNavigationProps>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const handleSignUp = (form: IFormInputs) => {
    console.log(form);
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
            <Title>Faça seu Cadastro</Title>
            <Input
              control={control}
              name="name"
              icon="user"
              placeholder="Nome"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              error={errors.name?.message}
            />
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
            <Input
              control={control}
              name="password"
              icon="key"
              placeholder="Senha"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              error={errors.password?.message}
            />
            <Button
              text="Entrar"
              onPress={handleSubmit(handleSignUp)}
              disabled={errors.name || errors.password || errors.email}
            />
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
