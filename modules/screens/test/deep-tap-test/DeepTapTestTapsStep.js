import { VStack, ScrollView } from 'native-base';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import PropTypes from 'prop-types';

const testTapOptions = [
    { name: 'DTV', description: '0 taps: Very Easy' },
    { name: 'DTE', description: '1-10 taps: Easy' },
    { name: 'DTM', description: '11-20 taps: Moderate' },
    { name: 'DTH', description: '21-30 taps: Hard' },
    { name: 'DTN', description: 'No fracture: No result' },
];

export default function DeepTapTestTapsStep({ tapResult, setTapResult }) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {testTapOptions.map(({ name, description }, index) => (
                    <CustomPressable
                        key={index}
                        onPress={() => setTapResult(name)}
                        isSelected={tapResult === name}
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

DeepTapTestTapsStep.propTypes = {
    tapResult: PropTypes.string.isRequired,
    setTapResult: PropTypes.func.isRequired,
};
