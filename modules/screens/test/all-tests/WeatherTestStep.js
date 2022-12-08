import { VStack, Pressable, Text, ScrollView } from 'native-base';

const weatherTestOptions = [
    { name: 'Sun', description: '☀️' },
    { name: 'Light clouds', description: '🌤' },
    { name: 'Cloudy', description: '☁️' },
    { name: 'Rain', description: '🌧' },
    { name: 'Fog', description: '🌫' },
    { name: 'Snow', description: '❄️' },
];

export default function WeatherTestStep({ weather, setWeather }) {
    return weatherTestOptions.map(({ name, description }, index) => {
        return (
            <ScrollView key={index}>
                <VStack alignItems="center" space={3}>
                    <Pressable
                        onPress={() => setWeather(name)}
                        width="90%"
                        rounded="lg"
                        overflow="hidden"
                        backgroundColor={weather === name ? 'green.50' : null}
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
                        <Text fontWeight="medium">{name}</Text>
                        <Text color="blueGray.600">{description}</Text>
                    </Pressable>
                </VStack>
            </ScrollView>
        );
    });
}
