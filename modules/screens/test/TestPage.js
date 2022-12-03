import { View } from 'react-native';
import { ScrollView } from 'native-base';
import StyledText from '../../components/StyledText/StyledText';
import TestBox from '../../components/TestBox';

const tests = [
    'Compression Test (CT)',
    'Deep Tap Test (DT)',
    'Extended Column Test (ECT)',
    'Rutschblock Test (RB)',
    'Propagation Saw Test (PST)',
    'Shovel Shear Test (ST)',
    'Hand Shear Test (HT)',
];

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
                {tests.map((test, index) => {
                    return (
                        <TestBox key={index}>
                            <StyledText>{test}</StyledText>
                        </TestBox>
                    );
                })}
            </View>
        </ScrollView>
    );
}
