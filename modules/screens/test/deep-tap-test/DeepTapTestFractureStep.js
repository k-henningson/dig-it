import { Pressable, ScrollView, View } from 'native-base';
import StyledText from '../../../components/StyledText/StyledText';
import PropTypes from 'prop-types';

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
                    <Pressable
                        key={id}
                        onPress={() => setFracture(label)}
                        backgroundColor={fracture === label ? 'green.50' : null}
                        width="45%"
                        height="25%"
                        rounded="lg"
                        overflow="hidden"
                        p="4"
                        m="2"
                        borderColor="coolGray.200"
                        borderWidth="1"
                        _web={{
                            shadow: 2,
                            borderWidth: 0,
                        }}
                    >
                        <StyledText>{label}</StyledText>
                    </Pressable>
                ))}
            </View>
        </ScrollView>
    );
}

DeepTapTestFractureStep.propTypes = {
    fracture: PropTypes.string.isRequired,
    setFracture: PropTypes.func.isRequired,
};
