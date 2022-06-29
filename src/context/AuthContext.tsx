import React from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';
import { IUser } from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAuthContext {
  user: IUser;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  forgotPassword: (email: string) => void;
  resetPassword: (
    token: string,
    password: string,
    password_confirmation: string,
  ) => void;
}

interface IAuthState {
  user: IUser;
  token: string;
}

const userData = '@GreenLemon:user';
const tokenData = '@GreenLemon:token';

const AuthContext = React.createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<IAuthState>({} as IAuthState);

  React.useEffect(() => {
    const loadData = async () => {
      const token = await AsyncStorage.getItem(tokenData);
      const user = await AsyncStorage.getItem(userData);

      if (user && token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({ user: JSON.parse(user), token });
      }
    };

    loadData();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post('/sessions', { email, password });

      const { user, token } = response.data;

      AsyncStorage.setItem(userData, JSON.stringify(user));
      AsyncStorage.setItem(tokenData, token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData(response.data);
    } catch (error) {
      new Error(error as string);
      Alert.alert('Erro ao realizar o login', 'Cheque suas credenciais');
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem(tokenData);
    await AsyncStorage.removeItem(userData);
    api.defaults.headers.common['Authorization'] = '';
    setData({} as IAuthState);
  };

  const forgotPassword = async (email: string) => {
    try {
      await api.post('password/forgot', { email });
    } catch (error) {
      new Error(error as string);
      Alert.alert('Erro ao enviar email', 'Cheque suas credenciais');
    }
  };

  const resetPassword = async (
    token: string,
    password: string,
    password_confirmation: string,
  ) => {
    try {
      await api.post('password/reset', {
        token,
        password,
        password_confirmation,
      });
      Alert.alert('Senha redefinida com sucesso', 'Faça login novamente');
    } catch (error) {
      new Error(error as string);
      Alert.alert('Erro ao Redefinir sua senha', 'Cheque suas credenciais');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        logOut,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
