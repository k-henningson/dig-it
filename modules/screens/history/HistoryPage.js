import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { View } from 'react-native';
import { HStack, ScrollView, Divider } from 'native-base';
import { db } from './firebaseConfig';
import StyledText from '../../components/StyledText/StyledText';
import HistoryBox from './HistoryBox';

export default function HistoryPage() {
    useEffect(() => {
        getDocs(collection(db, 'testResults')).then((res) => {
            res.forEach((doc) => {
                console.log(doc.data());
            });
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
                <HistoryBox>
                    <HStack justifyContent="space-between" space={2}>
                        <StyledText styles={{}}>Title/Location</StyledText>
                        <Divider
                            bg="emerald.500"
                            thickness="2"
                            mx="2"
                            orientation="vertical"
                        />
                        <StyledText styles={{}}>Test Result</StyledText>
                        <Divider
                            bg="emerald.500"
                            thickness="2"
                            mx="2"
                            orientation="vertical"
                        />
                        <StyledText styles={{}}>Weather Icon</StyledText>
                    </HStack>
                </HistoryBox>
            </View>
        </ScrollView>
    );
}
