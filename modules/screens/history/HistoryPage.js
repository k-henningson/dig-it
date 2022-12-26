import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View } from 'react-native';
import { VStack, ScrollView, HStack, Text } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import { db } from '../../../firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';
import formatDate from '../../../commons/utils/date-utils';
import { WEATHER_EMOJIS } from '../../../commons/constants/weather';

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
                        <HStack justifyContent="space-around" space={20}>
                            <VStack
                                justifyContent="space-between"
                                space={2}
                                alignItems="left"
                            >
                                <StyledText fontWeight="medium">
                                    {testResult.title}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {formatDate(testResult)}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {testResult.type}
                                </StyledText>
                            </VStack>
                            <Text fontSize={40}>
                                {WEATHER_EMOJIS[testResult.weather]}
                            </Text>
                        </HStack>
                    </HistoryBox>
                ))}
            </View>
        </ScrollView>
    );
}
