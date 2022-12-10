import { VStack, ScrollView } from 'native-base';
import CustomPressable from '../../../components/CustomPressable/CustomPressable';
import StyledText from '../../../components/StyledText/StyledText';

const testTapOptions = [
    { name: 'CTV', description: '0 taps: Very Easy' },
    { name: 'CTE', description: '1-10 taps: Easy' },
    { name: 'CTM', description: '11-20 taps: Moderate' },
    { name: 'CTH', description: '21-30 taps: Hard' },
    { name: 'CTN', description: 'No fracture: No result' },
];

export default function CompressionTestTapsStep({ tapResult, setTapResult }) {
    return testTapOptions.map(({ name, description }, index) => {
        return (
            <ScrollView key={index}>
                <VStack alignItems="center" space={3}>
                    <CustomPressable
                        onPress={() => setTapResult(name)}
                        isSelected={tapResult === name ? 'green.50' : null}
                    >
                        <StyledText fontWeight="medium">{name}</StyledText>
                        <StyledText color="blueGray.600">
                            {description}
                        </StyledText>
                    </CustomPressable>
                </VStack>
            </ScrollView>
        );
    });
}
