import { ScrollView, VStack } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

const testFractureOptions = [
    {
        label: 'WB - Whole block (90-100%)',
        id: 'WHOLE_BLOCK',
        icon: '',
    },
    {
        label: 'MB - Most of block (50-80%)',
        id: 'MOST_BLOCK',
        icon: '',
    },
    {
        label: 'EB - Edge of block (10-40% on planar surface)',
        id: 'EDGE_BLOCK',
        icon: '',
    },
];

export default function RutschblockTestFractureStep({ fracture, setFracture }) {
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

RutschblockTestFractureStep.propTypes = {
    fracture: PropTypes.string.isRequired,
    setFracture: PropTypes.func.isRequired,
};
