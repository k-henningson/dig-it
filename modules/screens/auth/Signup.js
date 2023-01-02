import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Center, VStack, Input, Button, Box, Heading, Text } from 'native-base';
import { auth } from '../../../firebaseConfig';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(null);

    const isValidEmail = email.length > 0;

    const isValidPassword =
        password.length >= 8 && password === passwordConfirmation;

    const canSubmit = isValidEmail && isValidPassword;

    const handlePress = () => {
        // todo - send verification email before signing up
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // todo - show success screen / animation after signing up
                const user = userCredential.user;
                console.log({ user });
                updateProfile(user, {
                    displayName: `${firstName} ${lastName}`,
                })
                    .then(console.log)
                    .catch((error) => setError(error));
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <Center w="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading size="lg" fontWeight="semibold">
                    Sign up
                </Heading>
                <VStack space={3} mt="5">
                    <Input
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder="First name"
                    />
                    <Input
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="Last name"
                    />
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
                    <Input
                        type="password"
                        value={passwordConfirmation}
                        onChangeText={setPasswordConfirmation}
                        placeholder="Confirm password"
                    />
                    <Button
                        isDisabled={!canSubmit}
                        mt="2"
                        onPress={handlePress}
                    >
                        Sign up
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
