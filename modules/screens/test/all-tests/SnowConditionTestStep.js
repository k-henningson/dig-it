import { VStack, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import { snowConditionTestOptions } from '../../../../commons/constants/conditions';

export default function SnowConditionTestStep({
    snowCondition,
    setSnowCondition,
}) {
    return (
        <ScrollView>
            <VStack alignItems="center" space={3}>
                {snowConditionTestOptions.map(({ name, description, id }) => (
                    <CustomPressable
                        key={id}
                        onPress={() => setSnowCondition(id)}
                        isSelected={snowCondition === id}
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

SnowConditionTestStep.propTypes = {
    snowCondition: PropTypes.string.isRequired,
    setSnowCondition: PropTypes.func.isRequired,
};
