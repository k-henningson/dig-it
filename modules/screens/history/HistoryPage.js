import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View } from 'react-native';
import { VStack, ScrollView } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import { db } from '../../../firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';

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
                        <VStack justifyContent="space-between" space={2}>
                            <StyledText>{testResult.title}</StyledText>
                            <StyledText>
                                {testResult.result.tapResult}
                            </StyledText>
                            <StyledText>{testResult.weather}</StyledText>
                        </VStack>
                    </HistoryBox>
                ))}
            </View>
        </ScrollView>
    );
}
