import { VStack, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import { SNOW_CONDITIONS } from '../../../../commons/constants/conditions';

export default function SnowConditionTestStep({
    snowCondition,
    setSnowCondition,
}) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {Object.values(SNOW_CONDITIONS).map(({ id, label, emoji }) => (
                    <CustomPressable
                        key={id}
                        onPress={() => setSnowCondition(id)}
                        isSelected={snowCondition === id}
                    >
                        <StyledText fontWeight="medium">{label}</StyledText>
                        <StyledText color="blueGray.600">{emoji}</StyledText>
                    </CustomPressable>
                ))}
            </VStack>
        </ScrollView>
    );
}

SnowConditionTestStep.propTypes = {
    snowCondition: PropTypes.string.isRequired,
    setSnowCondition: PropTypes.func.isRequired,
};
