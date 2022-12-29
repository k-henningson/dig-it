import { VStack, ScrollView } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';

const testTapOptions = [
    { name: 'RB1', description: 'Block slides during digging or cutting.' },
    {
        name: 'RB2',
        description:
            'Skier gently steps down onto the upper part of the block.',
    },
    {
        name: 'RB3',
        description:
            'Skier drops once from straight leg to bent knee position.',
    },
    {
        name: 'RB4',
        description: 'Skier jumps up and lands in the same compacted spot.',
    },
    {
        name: 'RB5',
        description: 'Skier jumps a second time onto the same compacted spot.',
    },
    {
        name: 'RB6',
        description:
            'Skier jumps a third time onto the same compacted spot or steps down 35cm and push once then jumps three times.',
    },
    {
        name: 'RB7',
        description:
            'None of the loading steps produced a smooth slope-parallel failure.',
    },
];

export default function RutschblockTestTapsStep({ tapResult, setTapResult }) {
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

RutschblockTestTapsStep.propTypes = {
    tapResult: PropTypes.string.isRequired,
    setTapResult: PropTypes.func.isRequired,
};
