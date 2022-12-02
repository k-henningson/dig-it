import { View } from 'react-native';
import { HStack, ScrollView } from 'native-base';
import StyledText from '../../components/StyledText/StyledText';
import TestBox from '../../components/TestBox';

export default function TestPage() {
    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <HStack>
                    <TestBox>
                        <StyledText>Compression Test (CT)</StyledText>
                    </TestBox>
                    <TestBox>
                        <StyledText>Deep Tap Test (DT)</StyledText>
                    </TestBox>
                </HStack>
                <HStack>
                    <TestBox>
                        <StyledText>Extended Column Test (ECT)</StyledText>
                    </TestBox>
                    <TestBox>
                        <StyledText>Rutschblock Test (RB)</StyledText>
                    </TestBox>
                </HStack>
                <HStack>
                    <TestBox>
                        <StyledText>Propagation Saw Test (PST)</StyledText>
                    </TestBox>
                    <TestBox>
                        <StyledText>Shovel Shear Test (ST)</StyledText>
                    </TestBox>
                </HStack>
                <HStack>
                    <TestBox>
                        <StyledText>Hand Shear Test (HT)</StyledText>
                    </TestBox>
                    <TestBox>
                        <StyledText>Empty remove later</StyledText>
                    </TestBox>
                </HStack>
            </View>
        </ScrollView>
    );
}
