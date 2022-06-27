import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../pages/Home';

type AppStackParamsList = {
  Home: undefined;
};

const App = createNativeStackNavigator<AppStackParamsList>();

export const AppRoutes = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  );
};
