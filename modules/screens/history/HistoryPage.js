import { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { View } from 'react-native';
import { VStack, ScrollView, HStack, Text } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import { db } from '../../../firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';
import formatDate from '../../../commons/utils/date-utils';
import { WEATHER_CONDITIONS } from '../../../commons/constants/weather';

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

    const deleteTestResult = function (id) {
        deleteDoc(doc(db, 'testResults', id))
            .then(() => {
                const results = testResults.filter((test) => {
                    return test.id !== id;
                });
                setTestResults(results);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                    <HistoryBox
                        key={testResult.id}
                        testResult={testResult}
                        deleteTestResult={deleteTestResult}
                    >
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
                                {WEATHER_CONDITIONS[testResult.weather].emoji}
                            </Text>
                        </HStack>
                    </HistoryBox>
                ))}
            </View>
        </ScrollView>
    );
}
