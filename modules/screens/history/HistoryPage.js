import { View } from 'react-native';
import { HStack, ScrollView, Divider } from 'native-base';
import StyledText from '../../components/StyledText';
import HistoryBox from '../../components/HistoryBox';

export default function HistoryPage() {
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
