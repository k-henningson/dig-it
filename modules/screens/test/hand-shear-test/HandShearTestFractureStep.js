import { ScrollView, VStack } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

const testFractureOptions = [
    {
        label: 'Easy',
        id: 'EASY',
        icon: '',
    },
    {
        label: 'Moderate',
        id: 'MODERATE',
        icon: '',
    },
    {
        label: 'Hard',
        id: 'HARD',
        icon: '',
    },
];

export default function HandShearTestFractureStep({ fracture, setFracture }) {
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

HandShearTestFractureStep.propTypes = {
    fracture: PropTypes.string.isRequired,
    setFracture: PropTypes.func.isRequired,
};
