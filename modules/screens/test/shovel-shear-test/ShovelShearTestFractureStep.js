import { ScrollView, VStack } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

const testFractureOptions = [
    {
        label: 'Very easy (STV)',
        id: 'STV',
        icon: '',
    },
    {
        label: 'Easy (STE)',
        id: 'STE',
        icon: '',
    },
    {
        label: 'Moderate (STM)',
        id: 'STM',
        icon: '',
    },
    {
        label: 'Hard (STH)',
        id: 'STH',
        icon: '',
    },
    {
        label: 'No fracture (STN)',
        id: 'STN',
        icon: '',
    },
];

export default function ShovelShearTestFractureStep({ fracture, setFracture }) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {testFractureOptions.map(({ id, label }) => (
                    <CustomPressable
                        key={id}
                        onPress={() => setFracture(label)}
                        isSelected={fracture === label}
                    >
                        <StyledText>{label}</StyledText>
                    </CustomPressable>
                ))}
            </VStack>
        </ScrollView>
    );
}

ShovelShearTestFractureStep.propTypes = {
    fracture: PropTypes.string.isRequired,
    setFracture: PropTypes.func.isRequired,
};
