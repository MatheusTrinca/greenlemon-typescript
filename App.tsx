import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';
import theme from './src/global/theme';
import { SignIn } from './src/pages/SignIn';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          RobotoSlab_400Regular,
          RobotoSlab_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </View>
  );
}
