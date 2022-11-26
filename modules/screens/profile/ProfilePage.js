import { useState } from 'react';
import { View } from 'react-native';
import { HStack, Switch, Radio } from 'native-base';
import StyledText from '../../components/StyledText';

export default function ProfilePage() {
    const [temperature, setTemp] = useState('Fahrenheit');
    const [measurement, setMeasure] = useState('Imperial');
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <HStack alignItems="center" space={4}>
                <StyledText>Novice</StyledText>
                <Switch size="md" />
                <StyledText>Pro</StyledText>
            </HStack>
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
        </View>
    );
}
