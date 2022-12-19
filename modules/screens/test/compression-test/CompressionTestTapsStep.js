import { VStack, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import StyledText from '../../../components/StyledText/StyledText';

const testTapOptions = [
    { name: 'CTV', description: '0 taps: Very Easy' },
    { name: 'CTE', description: '1-10 taps: Easy' },
    { name: 'CTM', description: '11-20 taps: Moderate' },
    { name: 'CTH', description: '21-30 taps: Hard' },
    { name: 'CTN', description: 'No fracture: No result' },
];

export default function CompressionTestTapsStep({ tapResult, setTapResult }) {
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

CompressionTestTapsStep.propTypes = {
    tapResult: PropTypes.string.isRequired,
    setTapResult: PropTypes.func.isRequired,
};
