import { useContext, useEffect, useState } from 'react';
import {
    collection,
    getDocs,
    query,
    where,
    deleteDoc,
    doc,
} from 'firebase/firestore';
import { View } from 'react-native';
import { VStack, ScrollView, HStack, Text } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import { db } from '../../../firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';
import formatDate from '../../../commons/utils/date-utils';
import { WEATHER_CONDITIONS } from '../../../commons/constants/weather';
import { useAuth } from '../../../commons/hooks/useAuth';
import { UserContext } from '../../../commons/initializers';

export default function HistoryPage() {
    const [testResults, setTestResults] = useState([]);

    const { user } = useAuth();

    const { guestUser, setGuestUser } = useContext(UserContext);

    const isFocused = useIsFocused();

    console.log(JSON.stringify(testResults, null, 4));

    useEffect(() => {
        if (isFocused && user) {
            getDocs(
                query(
                    collection(db, 'testResults'),
                    where('userId', '==', user.uid)
                )
            ).then((res) => {
                const results = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setTestResults(results);
            });
        } else if (guestUser) {
            setTestResults(guestUser.testResults);
        }
    }, [isFocused, user, guestUser]);

    const deleteTestResult = function (id) {
        if (user) {
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
        } else {
            setGuestUser((prev) => ({
                ...prev,
                testResults: prev.testResults.filter((test) => test.id !== id),
            }));
        }
    };

    return testResults.length > 0 ? (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            {testResults.map((testResult, index) => (
                <HistoryBox
                    key={testResult.id || index}
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
                                {formatDate(testResult.timestamp)}
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
        </ScrollView>
    ) : (
        <View
            style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <StyledText>No tests recorded yet!</StyledText>
        </View>
    );
}
