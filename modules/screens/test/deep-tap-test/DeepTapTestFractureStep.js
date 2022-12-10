import { ScrollView, View } from 'native-base';
import StyledText from '../../../components/StyledText/StyledText';
import PropTypes from 'prop-types';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

export default function DeepTapTestFractureStep({ fracture, setFracture }) {
    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                {[
                    {
                        label: 'Sudden Planar (SP)',
                        id: 'SUDDEN_PLANAR',
                        icon: '',
                    },
                    {
                        label: 'Sudden Collapse (SC)',
                        id: 'SUDDEN_COLLAPSE',
                        icon: '',
                    },
                    {
                        label: 'Progressive Comparison (PC)',
                        id: 'PROGRESSIVE_COMPARISON',
                        icon: '',
                    },
                    {
                        label: 'Resistant Planar (RP)',
                        id: 'RESISTANT_PLANAR',
                        icon: '',
                    },
                    {
                        label: 'Non-planar Break (BRK)',
                        id: 'NON_PLANAR_BREAK',
                        icon: '',
                    },
                ].map(({ id, label }) => (
                    <CustomPressable
                        key={id}
                        onPress={() => setFracture(label)}
                        isSelected={fracture === label}
                    >
                        <StyledText>{label}</StyledText>
                    </CustomPressable>
                ))}
            </View>
        </ScrollView>
    );
}

DeepTapTestFractureStep.propTypes = {
    fracture: PropTypes.string.isRequired,
    setFracture: PropTypes.func.isRequired,
};
