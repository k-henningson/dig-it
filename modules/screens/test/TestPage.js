import { View } from 'react-native';
import { ScrollView } from 'native-base';
import StyledText from '../../components/StyledText/StyledText';
import TestBox from './TestBox';
import { TEST_NAMES } from '../../../commons/constants/test-constants';

const tests = [
    {
        id: TEST_NAMES.COMPRESSION,
        label: 'Compression Test (CT)',
        objective:
            'The compression test is used to locate weak layers in the upper snowpack (approximately 1 m) and provide an indication of their triggering potential on nearby slopes with similar snowpack conditions.',
    },
    {
        id: TEST_NAMES.DEEP_TAP,
        label: 'Deep Tap Test (DT)',
        objective:
            'The deep tap test is used to determine the fracture character of a weak layer that is too deep to fracture consistently in the compression test. In addition, it is possible to observe the tapping force required for fracture to occur.',
    },
    {
        id: TEST_NAMES.EXTENDED_COLUMN,
        label: 'Coming soon: Extended Column Test (ECT)',
        objective:
            'The extended column test is a snowpack test that aims to indicate the propensity (tendency) of slab and weak layer combinations in the upper portion of the snowpack (< 1m deep) to propagate a fracture.',
    },
    {
        id: TEST_NAMES.RUTSCHBLOCK,
        label: 'Coming soon: Rutschblock Test (RB)',
        objective:
            'The rutschblock (or glide-block) test is a slope test that was developed in Switzerland in the 1960s. These guidelines are based on a recent Swiss analysis of rutschblock tests (Fohn, 1987) and on Canadian research (Jamieson and Johnston, 1993).',
    },
    {
        id: TEST_NAMES.PROPAGATION_SAW,
        label: 'Coming soon: Propagation Saw Test (PST)',
        objective:
            'The propagation saw test is a snowpack test that aims to indicate the propensity of a pre-identified slab and weak layer combination to propagate a fracture.',
    },
    {
        id: TEST_NAMES.SHOVEL_SHEAR,
        label: 'Coming soon: Shovel Shear Test (ST)',
        objective:
            'The shovel shear test provides information about the location where snow could fracture in a shear and a qualitative assessment of weak layer strength.',
    },
    {
        id: TEST_NAMES.HAND_SHEAR,
        label: 'Coming soon: Hand Shear Test (HT)',
        objective:
            'The hand shear test is an index observation of the stability of most weak layers including those in new or partially decomposed or fragmented snow.',
    },
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
