import { useContext } from 'react';
import { Center, Box, Heading, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AUTH_SCREENS } from './Auth';
import { UserContext } from '../../../commons/initializers';

export default function WelcomeScreen() {
    const { setGuestUser } = useContext(UserContext);

    const handlePress = () => {
        setGuestUser({
            isGuest: true,
            testResults: [],
        });
    };

    const navigation = useNavigation();

    return (
        <Center w="100%" h="100%" display="flex">
            <Heading size="lg" fontWeight="600">
                👋 Welcome to Dig It!
            </Heading>
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Button
                    mt="2"
                    color={'red.100'}
                    onPress={() => navigation.navigate(AUTH_SCREENS.SIGN_UP)}
                >
                    Sign up
                </Button>
                <Button
                    mt="2"
                    onPress={() => navigation.navigate(AUTH_SCREENS.SIGN_IN)}
                >
                    Sign in
                </Button>
                <Button mt="2" onPress={handlePress}>
                    Continue as guest
                </Button>
            </Box>
        </Center>
    );
}

WelcomeScreen.propTypes = {};
