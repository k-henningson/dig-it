import { useContext, useState } from 'react';
import { View } from 'react-native';
// import { getAuth } from 'firebase/auth';
import {
    HStack,
    Switch,
    Radio,
    ScrollView,
    Button,
    Heading,
} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import StyledText from '../../components/StyledText/StyledText';
import ProfileBox from './ProfileBox';
import { useTheme } from '../../../commons/hooks/theme';
import { themes, THEME_NAMES } from '../../../commons/constants/themes';
import { auth } from '../../../firebaseConfig';
import { useAuth } from '../../../commons/hooks/useAuth';
import { UserContext } from '../../../commons/initializers';

const MEASUREMENT_UNITS = {
    Fahrenheit: 'Fahrenheit',
    Imperial: 'Imperial',
    Celsius: 'Celsius',
    Metric: 'Metric',
};

export default function ProfilePage() {
    const [temperatureUnits, setTemperatureUnits] = useState(
        MEASUREMENT_UNITS.Fahrenheit
    );

    const [distanceUnits, setDistanceUnits] = useState(
        MEASUREMENT_UNITS.Imperial
    );

    const { theme, setTheme } = useTheme();

    const { user } = useAuth();

    const { setGuestUser, setIsGuestSigningUp } = useContext(UserContext);

    const logout = () => {
        if (!user) {
            setGuestUser(null);
        } else {
            auth.signOut();
        }
    };

    const handleSignup = () => {
        setIsGuestSigningUp(true);
    };

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Heading margin="14px">
                    Hi {user && user.displayName ? user.displayName : 'there'}{' '}
                    👋
                </Heading>
                <ProfileBox>
                    <HStack alignItems="center" space={4}>
                        <StyledText>Novice</StyledText>
                        <Switch size="md" />
                        <StyledText>Pro</StyledText>
                    </HStack>
                </ProfileBox>
                <ProfileBox>
                    <StyledText>Temperature</StyledText>
                    <Radio.Group
                        name="temperatureUnits"
                        accessibilityLabel="temperature units"
                        value={temperatureUnits}
                        onChange={setTemperatureUnits}
                    >
                        <HStack alignItems="center" space={4}>
                            <Radio
                                colorScheme="primary"
                                value={MEASUREMENT_UNITS.Fahrenheit}
                                my={1}
                            >
                                {MEASUREMENT_UNITS.Fahrenheit}
                            </Radio>
                            <Radio value={MEASUREMENT_UNITS.Celsius} my={1}>
                                {MEASUREMENT_UNITS.Celsius}
                            </Radio>
                        </HStack>
                    </Radio.Group>
                </ProfileBox>
                <ProfileBox>
                    <StyledText>Measurement</StyledText>
                    <Radio.Group
                        name="measurementUnits"
                        accessibilityLabel="measurement units"
                        value={distanceUnits}
                        onChange={(nextValue) => setDistanceUnits(nextValue)}
                    >
                        <HStack alignItems="center" space={4}>
                            <Radio value={MEASUREMENT_UNITS.Imperial} my={1}>
                                {MEASUREMENT_UNITS.Imperial}
                            </Radio>
                            <Radio value={MEASUREMENT_UNITS.Metric} my={1}>
                                {MEASUREMENT_UNITS.Metric}
                            </Radio>
                        </HStack>
                    </Radio.Group>
                </ProfileBox>
                <ProfileBox>
                    <HStack alignItems="center" space={4}>
                        <StyledText>Light 💡</StyledText>
                        <Switch
                            size="md"
                            isChecked={theme.name === THEME_NAMES.DARK}
                            onToggle={() =>
                                setTheme(
                                    theme.name === THEME_NAMES.LIGHT
                                        ? themes.dark
                                        : themes.light
                                )
                            }
                        />
                        <StyledText>Dark 🌚</StyledText>
                    </HStack>
                </ProfileBox>
                <ProfileBox>
                    <StyledText>Get in touch</StyledText>
                    <HStack alignItems="center" space={4}>
                        <Ionicons
                            name="logo-linkedin"
                            size={24}
                            color="black"
                        />
                        <Ionicons name="logo-github" size={24} color="black" />
                        <Ionicons name="mail-open" size={24} color="black" />
                    </HStack>
                </ProfileBox>
                {!user && (
                    <ProfileBox>
                        <Button onPress={handleSignup}>Create account</Button>
                    </ProfileBox>
                )}
                {/* todo - below is commented to be able for us to erase guest data for testing, uncomment before releasing */}
                {/* {user && ( */}
                <ProfileBox>
                    <Button onPress={logout}>Sign out</Button>
                </ProfileBox>
                {/* )} */}
            </View>
        </ScrollView>
    );
}
