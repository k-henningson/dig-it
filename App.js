import { useCallback, useReducer, useState } from 'react';
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
import { ThemeContext } from './commons/initializers';
import { getTheme } from './commons/utils/theme-utils';
import { THEME_NAMES } from './commons/constants/themes';

const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

const ROUTE_ICONS = {
    ProfilePage: 'person',
    HistoryPage: 'list',
    TestPage: 'add',
    UpgradePage: 'cafe',
};

export default function App() {
    const [themeName, setThemeName] = useState(THEME_NAMES.LIGHT);
    const theme = getTheme(themeName);
    const nativeBaseTheme = extendTheme(theme);

    const [fontsLoaded] = useFonts({
        'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
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
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            <NativeBaseProvider theme={nativeBaseTheme}>
                <View style={styles.container} onLayout={onLayoutRootView}>
                    <StatusBar style={theme.statusBar} />
                    <NavigationContainer
                        style={styles.container}
                        theme={{
                            colors: {
                                background: theme.background,
                                card: theme.background,
                            },
                        }}
                    >
                        <Tab.Navigator
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    return (
                                        <Ionicons
                                            name={`${ROUTE_ICONS[route.name]}${
                                                !focused ? '-outline' : ''
                                            }`}
                                            size={size}
                                            color={color}
                                        />
                                    );
                                },
                                tabBarActiveTintColor: 'blue',
                                tabBarInactiveTintColor: 'gray',
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
                    </NavigationContainer>
                </View>
            </NativeBaseProvider>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
