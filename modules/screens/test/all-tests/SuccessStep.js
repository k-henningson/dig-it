import StyledText from '../../../components/StyledText/StyledText';
import { VStack } from 'native-base';

const successStepMessageOptions = [
    "It's shreddin' time!",
    'Time to shred the gnar!',
    'Now get out and slay that pow!',
    "Let's go ski 🎶",
    'Smash those pillows!',
];

const randomMessage = Math.floor(
    Math.random() * successStepMessageOptions.length
);

export default function SuccessStep() {
    return (
        <VStack alignItems="center" space={10} marginTop="30px">
            <StyledText>🎉</StyledText>
            <StyledText>{successStepMessageOptions[randomMessage]}</StyledText>
        </VStack>
    );
}
