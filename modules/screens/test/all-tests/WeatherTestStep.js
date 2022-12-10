import { VStack, ScrollView } from 'native-base';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import PropTypes from 'prop-types';

const weatherTestOptions = [
    { name: 'Sun', description: '☀️' },
    { name: 'Light clouds', description: '🌤' },
    { name: 'Cloudy', description: '☁️' },
    { name: 'Rain', description: '🌧' },
    { name: 'Fog', description: '🌫' },
    { name: 'Snow', description: '❄️' },
];

export default function WeatherTestStep({ weather, setWeather }) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {weatherTestOptions.map(({ name, description }, index) => (
                    <CustomPressable
                        key={index}
                        onPress={() => setWeather(name)}
                        isSelected={weather === name}
                    >
                        <StyledText fontWeight="medium">{name}</StyledText>
                        <StyledText color="blueGray.600">
                            {description}
                        </StyledText>
                    </CustomPressable>
                ))}
            </VStack>
        </ScrollView>
    );
}

WeatherTestStep.propTypes = {
    weather: PropTypes.string.isRequired,
    setWeather: PropTypes.func.isRequired,
};
