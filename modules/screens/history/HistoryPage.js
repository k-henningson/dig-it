import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View } from 'react-native';
import { VStack, ScrollView, HStack, Text } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import { db } from '../../../firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';
import formatDate from '../../../commons/utils/formatDate-utils';

export default function HistoryPage() {
    const [testResults, setTestResults] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getDocs(collection(db, 'testResults')).then((res) => {
                const results = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setTestResults(results);
            });
        }
    }, [isFocused]);

    // const weatherEmojiOptions = {
    //     Sun: '☀️',
    //     Light clouds: '🌤',
    //     Cloudy: '☁️',
    //     Rain: '🌧',
    //     Fog: '🌫',
    //     Snow: '❄️',
    // };

    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {testResults.map((testResult) => (
                    <HistoryBox key={testResult.id}>
                        <VStack
                            justifyContent="space-between"
                            space={2}
                            alignItems="left"
                        >
                            <StyledText>{testResult.title}</StyledText>
                            <HStack justifyContent="space-between" space={20}>
                                <StyledText>
                                    {formatDate(testResult)}
                                </StyledText>
                                <Text fontSize={40}>❄️</Text>
                            </HStack>
                            <StyledText>{testResult.type}</StyledText>
                        </VStack>
                    </HistoryBox>
                ))}
            </View>
        </ScrollView>
    );
}
