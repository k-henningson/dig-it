import { VStack, Pressable, ScrollView } from 'native-base';
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
                    <Pressable
                        onPress={() => setTapResult(name)}
                        width="90%"
                        rounded="lg"
                        overflow="hidden"
                        backgroundColor={tapResult === name ? 'green.50' : null}
                        p="2"
                        my="3"
                        borderColor="coolGray.300"
                        borderWidth="2"
                        alignItems="center"
                        _web={{
                            shadow: 2,
                            borderWidth: 0,
                        }}
                    >
                        <StyledText fontWeight="medium">{name}</StyledText>
                        <StyledText color="blueGray.600">
                            {description}
                        </StyledText>
                    </Pressable>
                </VStack>
            </ScrollView>
        );
    });
}
