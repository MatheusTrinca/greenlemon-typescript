import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Auth = createNativeStackNavigator<AuthStackParamList>();

export const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};
