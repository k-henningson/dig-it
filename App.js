import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import ProfilePage from './modules/components/ProfilePage';
import HistoryPage from './modules/components/HistoryPage';
import TestPage from './modules/components/TestPage';
import UpgradePage from './modules/components/UpgradePage';

const Tab = createBottomTabNavigator();

const ROUTE_ICONS = {
    ProfilePage: 'person',
    HistoryPage: 'list',
    TestPage: 'add',
    UpgradePage: 'cafe',
};

export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer style={styles.container}>
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
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
