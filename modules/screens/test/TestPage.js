import { View } from 'react-native';
import { ScrollView } from 'native-base';
import StyledText from '../../components/StyledText/StyledText';
import TestBox from './TestBox';
import { tests } from '../../../commons/constants/tests';

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
                {tests.map((test) => {
                    return (
                        <TestBox key={test.id} test={test}>
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
                                    {test.label}
                                </StyledText>
                                <StyledText
                                    styles={{
                                        fontSize: 12,
                                        paddingTop: 10,
                                    }}
                                >
                                    {test.objective}
                                </StyledText>
                            </View>
                        </TestBox>
                    );
                })}
            </View>
        </ScrollView>
    );
}
