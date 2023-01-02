import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Center, VStack, Input, Button, Box, Heading, Text } from 'native-base';
import { auth } from '../../../firebaseConfig';

// todo - remove duplication between login and signup
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const isValidEmail = email.length > 0;

    const isValidPassword = password.length >= 8; // todo - check firebase auth password requirements

    const canSubmit = isValidEmail && isValidPassword;

    const handlePress = () => {
        // todo - send verification email before signing up
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // todo - show success screen / animation after signing up
                const user = userCredential.user;
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" fontWeight="semibold">
                    Sign in
                </Heading>
                <VStack space={3} mt="5">
                    <Input
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email address"
                    />
                    <Input
                        type="password"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                    />
                    <Button
                        isDisabled={!canSubmit}
                        mt="2"
                        onPress={handlePress}
                    >
                        Sign in
                    </Button>
                    {
                        // todo - improve error message
                        error && <Text>Something went wrong!</Text>
                    }
                </VStack>
            </Box>
        </Center>
    );
}
