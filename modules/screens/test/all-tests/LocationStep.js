import StyledText from '../../../components/StyledText/StyledText';
import { VStack } from 'native-base';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

import * as Location from 'expo-location';

export default function LocationStep() {
    const [location, setLocation] = useState({ latitude: '', longitude: '' });
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Balanced,
            });
            console.log(location);
            setLocation({
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
            });
        })();
    }, []);

    let text = 'Finding location...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location.longitude) {
        text = JSON.stringify(location);
        console.log(text);
    }

    return (
        <VStack alignItems="center" space={20} marginTop="30px">
            <StyledText>Location Step</StyledText>
            <MapView
                style={styles.map}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    longitudeDelta,
                    latitudeDelta,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    draggable={true}
                    onDragEnd={(e) => {
                        setLocation(e.nativeEvent.coordinate);
                    }}
                >
                    <Callout tooltip>
                        <StyledText>Snow pit ❄️</StyledText>
                    </Callout>
                </Marker>
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
