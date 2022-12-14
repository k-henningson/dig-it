import StyledText from '../../../components/StyledText/StyledText';
import { VStack } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const initialRegion = {
    latitude: 49.2827,
    longitude: -123.116226,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default function LocationStep() {
    return (
        <VStack alignItems="center" space={20} marginTop="30px">
            <StyledText>Location Step</StyledText>
            <MapView style={styles.map} initialRegion={initialRegion}>
                <Marker
                    coordinate={{
                        latitude: initialRegion.latitude,
                        longitude: initialRegion.longitude,
                    }}
                ></Marker>
            </MapView>
        </VStack>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
