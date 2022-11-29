import { useState } from 'react';
import { View } from 'react-native';
import { HStack, Switch, Radio, ScrollView } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import StyledText from '../../components/StyledText';
import ProfileBox from '../../components/ProfileBox';

export default function ProfilePage() {
    const [temperatureUnits, setTemperatureUnits] = useState('Fahrenheit');
    const [distanceUnits, setDistanceUnits] = useState('Imperial');
    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
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
                            <Radio value="Fahrenheit" my={1}>
                                Fahrenheit
                            </Radio>
                            <Radio value="Celsius" my={1}>
                                Celsius
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
                        onChange={(nextValue) => {
                            setDistanceUnits(nextValue);
                        }}
                    >
                        <HStack alignItems="center" space={4}>
                            <Radio value="Imperial" my={1}>
                                Imperial
                            </Radio>
                            <Radio value="Metric" my={1}>
                                Metric
                            </Radio>
                        </HStack>
                    </Radio.Group>
                </ProfileBox>
                <ProfileBox>
                    <HStack alignItems="center" space={4}>
                        <StyledText>Light 💡</StyledText>
                        <Switch size="md" />
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
            </View>
        </ScrollView>
    );
}
