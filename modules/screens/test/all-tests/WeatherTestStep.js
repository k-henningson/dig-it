import { VStack, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import { weatherTestOptions } from '../../../../commons/constants/weather';

export default function WeatherTestStep({ weather, setWeather }) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {weatherTestOptions.map(({ name, description, id }) => (
                    <CustomPressable
                        key={id}
                        onPress={() => setWeather(id)}
                        isSelected={weather === id}
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
