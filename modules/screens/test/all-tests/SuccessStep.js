import { VStack, Text } from 'native-base';
import Animated, { BounceIn } from 'react-native-reanimated';
import StyledText from '../../../components/StyledText/StyledText';

const successStepMessageOptions = [
    "It's shreddin' time ☃️",
    'Time to shred the gnar ❄️',
    'Now get out and slay that pow ⛷',
    "Let's go ski 🎶",
    'Smash those pillows ⛷',
    'Shred that pow 💥',
    'Time to spread that gnar butter 🧈 on the shred bread 🍞',
];

const getSuccessMessage = () => {
    const index = Math.floor(Math.random() * successStepMessageOptions.length);
    return successStepMessageOptions[index];
};

export default function SuccessStep() {
    return (
        <VStack alignItems="center" space={10} marginTop="30px">
            <Animated.View entering={BounceIn.duration(500).delay(200)}>
                <Text marginTop="80px" fontSize="125px">
                    🎉
                </Text>
            </Animated.View>
            <StyledText margin="30px 5px 0px 5px" fontSize="25px">
                {getSuccessMessage()}
            </StyledText>
        </VStack>
    );
}
