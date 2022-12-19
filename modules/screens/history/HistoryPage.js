import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View } from 'react-native';
import { HStack, ScrollView, Divider } from 'native-base';
import { db } from '../../../firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';

export default function HistoryPage() {
    const [testResults, setTestResults] = useState([]);

    useEffect(() => {
        getDocs(collection(db, 'testResults')).then((res) => {
            const results = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            setTestResults(results);
        });
    }, []);

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
                        <HStack justifyContent="space-between" space={2}>
                            <StyledText>{testResult.title}</StyledText>
                            <Divider
                                bg="emerald.500"
                                thickness="2"
                                mx="2"
                                orientation="vertical"
                            />
                            <StyledText>
                                {testResult.result.tapResult}
                            </StyledText>
                            <Divider
                                bg="emerald.500"
                                thickness="2"
                                mx="2"
                                orientation="vertical"
                            />
                            <StyledText>{testResult.weather}</StyledText>
                        </HStack>
                    </HistoryBox>
                ))}
            </View>
        </ScrollView>
    );
}
