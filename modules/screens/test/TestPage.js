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
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                {tests.map((test, index) => {
                    return (
                        <TestBox key={index} header={test}>
                            <View
                                style={{
                                    display: 'flex',
                                }}
                            >
                                <StyledText
                                    fontWeight="600"
                                    styles={{
                                        fontSize: 16,
                                        textAlign: 'left',
                                        padding: 0,
                                    }}
                                >
                                    {test}
                                </StyledText>
                                <StyledText
                                    styles={{
                                        fontSize: 12,
                                        paddingTop: 10,
                                    }}
                                >
                                    This is an example description of a test and
                                    has to be a certain length
                                </StyledText>
                            </View>
                        </TestBox>
                    );
                })}
            </View>
        </ScrollView>
    );
}
