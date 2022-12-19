import { VStack } from 'native-base';
import StyledText from '../../../components/StyledText/StyledText';

const successStepMessageOptions = [
    "It's shreddin' time!",
    'Time to shred the gnar!',
    'Now get out and slay that pow!',
    "Let's go ski 🎶",
    'Smash those pillows!',
    'Shred that pow 💥',
    'Time to spread that gnar butter on the shred bread!',
];

const getSuccessMessage = () => {
    const index = Math.floor(Math.random() * successStepMessageOptions.length);
    return successStepMessageOptions[index];
};

export default function SuccessStep() {
    return (
        <VStack alignItems="center" space={10} marginTop="30px">
            <StyledText>🎉</StyledText>
            <StyledText>{getSuccessMessage()}</StyledText>
        </VStack>
    );
}
