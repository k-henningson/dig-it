import { VStack, Pressable, ScrollView } from 'native-base';
import StyledText from '../../../components/StyledText/StyledText';

const snowConditionTestOptions = [
    { name: 'Dumping', description: '💩' },
    { name: 'Fresh Powder', description: '💥' },
    { name: 'Packed', description: '📦' },
    { name: 'Groomed', description: '🪒' },
    { name: 'Granular', description: '🍚' },
    { name: 'Wet/Heavy', description: '💧' },
    { name: 'Icy', description: '🧊' },
    { name: 'Thin Cover', description: '🧹' },
];

export default function SnowConditionTestStep({
    snowCondition,
    setSnowCondition,
}) {
    return snowConditionTestOptions.map(({ name, description }, index) => {
        return (
            <ScrollView key={index}>
                <VStack alignItems="center" space={3}>
                    <Pressable
                        onPress={() => setSnowCondition(name)}
                        width="90%"
                        rounded="lg"
                        overflow="hidden"
                        backgroundColor={
                            snowCondition === name ? 'green.50' : null
                        }
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
