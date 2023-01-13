import { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Center, VStack, Input, Button, Box, Heading, Text } from 'native-base';
import { auth, db } from '../../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../../commons/initializers';
import { saveGuestTestResultsToDb } from '../../../commons/utils/db-utils';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(null);

    const { guestUser, setGuestUser, setIsGuestSigningUp } =
        useContext(UserContext);

    const isValidEmail = email.length > 0; // todo - proper email validation

    const isValidPassword =
        password.length >= 8 && password === passwordConfirmation;

    const canSubmit = isValidEmail && isValidPassword;

    const clearFields = () => {
        // todo - refactor into single object
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setPasswordConfirmation('');
        setError(null);
    };

    const navigation = useNavigation();

    const handlePress = async () => {
        // todo - send verification email before signing up
        try {
            // create user in firebase auth
            const { user } = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            // create user in users collection
            await setDoc(doc(db, 'users', user.uid), {
                userId: user.uid,
                email: user.email,
                firstName: firstName,
                lastName: lastName,
            });

            // save users existing results in db if they were a guest user
            if (guestUser) {
                await saveGuestTestResultsToDb(user);
                setGuestUser(null);
                setIsGuestSigningUp(false);
            } else {
                navigation.navigate('Home');
            }
            clearFields();
        } catch (error) {
            console.log('error: ', error);
            setError(error);
        }
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
