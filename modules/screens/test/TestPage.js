import { View } from 'react-native';
import StyledText from '../../components/StyledText/StyledText';

export default function TestPage() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <StyledText>Test Page</StyledText>
        </View>
    );
}
