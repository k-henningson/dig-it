import { View } from 'react-native';
import { ScrollView } from 'native-base';
import StyledText from '../../components/StyledText/StyledText';
import TestBox from '../../components/TestBox';

export default function TestPage() {
    const testTypes = [
        { name: 'Compression Test (CT)' },
        { name: 'Deep Tap Test (DT)' },
        { name: 'Extended Column Test (ECT)' },
        { name: 'Rutschblock Test (RB)' },
        { name: 'Propagation Saw Test (PST)' },
        { name: 'Shovel Shear Test (ST)' },
        { name: 'Hand Shear Test (HT)' },
    ];
    return (
        <ScrollView>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {testTypes.map((test, index) => {
                    return (
                        <TestBox key={index}>
                            <StyledText>{test.name}</StyledText>
                        </TestBox>
                    );
                })}
            </View>
        </ScrollView>
    );
}
