import StyledText from '../../../components/StyledText/StyledText';
import { VStack } from 'native-base';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

export default function LocationStep() {
    return (
        <VStack alignItems="center" space={10} marginTop="30px">
            <StyledText>Location Step</StyledText>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 49.2827,
                    longitude: -123.116226,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </VStack>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
