import { useContext } from 'react';
import { Center, Box, Heading, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AUTH_SCREENS } from '../../../commons/constants/routes';
import { UserContext } from '../../../commons/initializers';

export default function WelcomeScreen() {
    const { guestUser, setGuestUser, setIsGuestSigningUp } =
        useContext(UserContext);

    const navigation = useNavigation();

    const handleGuestLogin = () => {
        // if user has already made progress as a guest, we don't want to erase their tests
        if (!guestUser) {
            setGuestUser({
                isGuest: true,
                testResults: [],
            });
        }

        setIsGuestSigningUp(false);
    };

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
                <Button mt="2" onPress={handleGuestLogin}>
                    {guestUser ? 'Go back' : 'Continue as guest'}
                </Button>
            </Box>
        </Center>
    );
}

WelcomeScreen.propTypes = {};
