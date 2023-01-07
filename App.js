import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, View, extendTheme } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ThemeContext, UserContext } from './commons/initializers';
import { themes } from './commons/constants/themes';
import { useAuth } from './commons/hooks/useAuth';
import {
    getAyncStorageData,
    setAsyncStorageData,
} from './commons/utils/storage-utils';
import Main from './modules/screens/Main';
import { AUTH_SCREENS } from './commons/constants/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './modules/screens/auth/WelcomeScreen';
import Login from './modules/screens/auth/Login';
import Signup from './modules/screens/auth/Signup';

SplashScreen.preventAutoHideAsync();

export const Stack = createNativeStackNavigator();

export default function App() {
    const [theme, setTheme] = useState(themes.light);
    const [guestUser, setGuestUser] = useState(null);
    const [isGuestSigningUp, setIsGuestSigningUp] = useState(false);

    const nativeBaseTheme = extendTheme(theme);

    const { user } = useAuth();

    useEffect(() => {
        getAyncStorageData('guestUser').then((res) => {
            setGuestUser(res);
        });
    }, []);

    useEffect(() => {
        setAsyncStorageData('guestUser', guestUser);
    }, [guestUser]);

    const [fontsLoaded] = useFonts({
        'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    const showSignup = (!user && !guestUser) || isGuestSigningUp;

    const isAppReady = fontsLoaded;

    return (
        isAppReady && (
            <UserContext.Provider
                value={{ guestUser, setGuestUser, setIsGuestSigningUp }}
            >
                <ThemeContext.Provider value={{ theme, setTheme }}>
                    <NativeBaseProvider theme={nativeBaseTheme}>
                        <NavigationContainer
                            style={styles.container}
                            theme={{
                                colors: {
                                    background: theme.background,
                                    card: theme.background,
                                    text: theme.foreground,
                                },
                            }}
                        >
                            <View
                                style={styles.container}
                                onLayout={onLayoutRootView}
                            >
                                <StatusBar style={theme.statusBar} />
                                <Stack.Navigator>
                                    {!showSignup ? (
                                        <Stack.Screen
                                            name="Home"
                                            component={Main}
                                            options={{ headerShown: false }}
                                        />
                                    ) : (
                                        <Stack.Group>
                                            <Stack.Screen
                                                name={AUTH_SCREENS.WELCOME}
                                                component={WelcomeScreen}
                                                options={{ headerShown: false }}
                                            />
                                            <Stack.Screen
                                                name={AUTH_SCREENS.SIGN_IN}
                                                component={Login}
                                            />
                                            <Stack.Screen
                                                name={AUTH_SCREENS.SIGN_UP}
                                                component={Signup}
                                            />
                                        </Stack.Group>
                                    )}
                                </Stack.Navigator>
                            </View>
                        </NavigationContainer>
                    </NativeBaseProvider>
                </ThemeContext.Provider>
            </UserContext.Provider>
        )
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
