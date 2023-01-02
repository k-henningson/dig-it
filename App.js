import { useCallback, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, View, extendTheme } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfilePage from './modules/screens/profile/ProfilePage';
import HistoryPage from './modules/screens/history/HistoryPage';
import TestPage from './modules/screens/test/TestPage';
import UpgradePage from './modules/screens/upgrade/UpgradePage';
import { ThemeContext, UserContext } from './commons/initializers';
import { themes } from './commons/constants/themes';
import { useAuth } from './commons/hooks/useAuth';
import AuthStack from './modules/screens/auth/Auth';
import { getData, storeData } from './commons/utils/storage-utils';

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

const ROUTE_ICONS = {
    ProfilePage: 'person',
    HistoryPage: 'list',
    TestPage: 'add',
    UpgradePage: 'cafe',
};

export default function App() {
    const [theme, setTheme] = useState(themes.light);
    const [guestUser, setGuestUser] = useState(null);
    const nativeBaseTheme = extendTheme(theme);
    const { user } = useAuth();

    useEffect(() => {
        getData('guestUser').then((res) => {
            setGuestUser(res);
        });
    }, []);

    useEffect(() => {
        storeData('guestUser', guestUser);
    }, [guestUser]);

    const showSignup = !user && !guestUser;

    const [fontsLoaded] = useFonts({
        'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <UserContext.Provider value={{ guestUser, setGuestUser }}>
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
                            {!showSignup ? (
                                <>
                                    <Tab.Navigator
                                        screenOptions={({ route }) => ({
                                            tabBarIcon: ({
                                                focused,
                                                color,
                                                size,
                                            }) => {
                                                return (
                                                    <Ionicons
                                                        name={`${
                                                            ROUTE_ICONS[
                                                                route.name
                                                            ]
                                                        }${
                                                            !focused
                                                                ? '-outline'
                                                                : ''
                                                        }`}
                                                        size={size}
                                                        color={color}
                                                    />
                                                );
                                            },
                                            tabBarActiveTintColor:
                                                theme.colors.primary['600'],
                                            tabBarInactiveTintColor: 'gray',
                                            headerTitleAlign: 'left',
                                            headerStyle: {
                                                borderBottomWidth: 0,
                                                shadowOpacity: 0.2,
                                            },
                                            headerTitleStyle: {
                                                fontSize: 30,
                                                fontWeight: 'bold',
                                            },
                                        })}
                                    >
                                        <Tab.Screen
                                            name="ProfilePage"
                                            component={ProfilePage}
                                            options={{ title: 'Profile' }}
                                        />
                                        <Tab.Screen
                                            name="HistoryPage"
                                            component={HistoryPage}
                                            options={{ title: 'History' }}
                                        />
                                        <Tab.Screen
                                            name="TestPage"
                                            component={TestPage}
                                            options={{ title: 'New Test' }}
                                        />
                                        <Tab.Screen
                                            name="UpgradePage"
                                            component={UpgradePage}
                                            options={{ title: 'Upgrade' }}
                                        />
                                    </Tab.Navigator>
                                </>
                            ) : (
                                <AuthStack />
                            )}
                        </View>
                    </NavigationContainer>
                </NativeBaseProvider>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
