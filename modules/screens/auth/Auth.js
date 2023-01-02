import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
import WelcomeScreen from './WelcomeScreen';

const Stack = createNativeStackNavigator();

export const AUTH_SCREENS = {
    WELCOME: 'Welcome',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign up',
};

export default function AuthStack() {
    return (
        <Stack.Navigator initialRouteName={AUTH_SCREENS.WELCOME}>
            <Stack.Screen
                name={AUTH_SCREENS.WELCOME}
                component={WelcomeScreen}
            />
            <Stack.Screen name={AUTH_SCREENS.SIGN_IN} component={Login} />
            <Stack.Screen name={AUTH_SCREENS.SIGN_UP} component={Signup} />
        </Stack.Navigator>
    );
}
