import { VStack, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

const snowConditionTestOptions = [
    { name: 'Dumping', description: '💩' },
    { name: 'Fresh Powder', description: '💥' },
    { name: 'Packed', description: '📦' },
    { name: 'Groomed', description: '🪒' },
    { name: 'Granular', description: '🍚' },
    { name: 'Wet/Heavy', description: '💧' },
    { name: 'Icy', description: '🧊' },
    { name: 'Thin Cover', description: '🧹' },
];

export default function SnowConditionTestStep({
    snowCondition,
    setSnowCondition,
}) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {snowConditionTestOptions.map(
                    ({ name, description }, index) => (
                        <CustomPressable
                            key={index}
                            onPress={() => setSnowCondition(name)}
                            isSelected={snowCondition === name}
                        >
                            <StyledText fontWeight="medium">{name}</StyledText>
                            <StyledText color="blueGray.600">
                                {description}
                            </StyledText>
                        </CustomPressable>
                    )
                )}
            </VStack>
        </ScrollView>
    );
}

SnowConditionTestStep.propTypes = {
    snowCondition: PropTypes.string.isRequired,
    setSnowCondition: PropTypes.func.isRequired,
};
