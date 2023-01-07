import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HistoryPage from './history/HistoryPage';
import ProfilePage from './profile/ProfilePage';
import TestPage from './test/TestPage';
import UpgradePage from './upgrade/UpgradePage';
import { useContext } from 'react';
import { ThemeContext } from '../../commons/initializers';

const Tab = createBottomTabNavigator();

const ROUTE_ICONS = {
    ProfilePage: 'person',
    HistoryPage: 'list',
    TestPage: 'add',
    UpgradePage: 'cafe',
};

export default function Main() {
    const { theme } = useContext(ThemeContext);

    return (
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
                tabBarActiveTintColor: theme.colors.primary['600'],
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
    );
}
