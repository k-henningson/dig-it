import { useState } from 'react';
import { View } from 'react-native';
import { HStack, Switch, Radio, Box } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import StyledText from '../../components/StyledText';

export default function ProfilePage() {
    const [temperature, setTemp] = useState('Fahrenheit');
    const [measurement, setMeasure] = useState('Imperial');
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Box
                width="50%"
                rounded="lg"
                overflow="hidden"
                p="12"
                borderColor="coolGray.300"
                borderWidth="2"
                alignItems="center"
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
            >
                <HStack alignItems="center" space={4}>
                    <StyledText>Novice</StyledText>
                    <Switch size="md" />
                    <StyledText>Pro</StyledText>
                </HStack>
            </Box>
            <Radio.Group
                name="temperatureUnits"
                accessibilityLabel="temperature units"
                value={temperature}
                onChange={(nextValue) => {
                    setTemp(nextValue);
                }}
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
            <Radio.Group
                name="measurementUnits"
                accessibilityLabel="measurement units"
                value={measurement}
                onChange={(nextValue) => {
                    setMeasure(nextValue);
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
            <HStack alignItems="center" space={4}>
                <StyledText>Light 💡</StyledText>
                <Switch size="md" />
                <StyledText>Dark 🌚</StyledText>
            </HStack>
            <Box>
                <StyledText>Get in touch</StyledText>
                <HStack alignItems="center" space={4}>
                    <Ionicons name="logo-linkedin" size={24} color="black" />
                    <Ionicons name="logo-github" size={24} color="black" />
                    <Ionicons name="mail-open" size={24} color="black" />
                </HStack>
            </Box>
        </View>
    );
}
