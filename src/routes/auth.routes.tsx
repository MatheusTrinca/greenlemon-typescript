import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { SignUpConfirmation } from '../pages/SignUpConfirmation';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  SignUpConfirmation: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
};

const Auth = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
      <Auth.Screen name="SignUpConfirmation" component={SignUpConfirmation} />
      <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
      <Auth.Screen name="ResetPassword" component={ResetPassword} />
    </Auth.Navigator>
  );
};
