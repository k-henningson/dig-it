import { ScrollView, VStack } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

const testFractureOptions = [
    {
        label: 'ECTPV',
        id: 'ECTPV',
        icon: '',
    },
    {
        label: 'ECTP##',
        id: 'ECTP##',
        icon: '',
    },
    {
        label: 'ECTN##',
        id: 'ECTN##',
        icon: '',
    },
    {
        label: 'ECTX',
        id: 'ECTX',
        icon: '',
    },
];

export default function ExtendedColumnTestFractureStep({
    fracture,
    setFracture,
}) {
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

ExtendedColumnTestFractureStep.propTypes = {
    fracture: PropTypes.string.isRequired,
    setFracture: PropTypes.func.isRequired,
};
