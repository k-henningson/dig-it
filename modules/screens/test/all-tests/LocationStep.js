import StyledText from '../../../components/StyledText/StyledText';
import { VStack } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

import * as Location from 'expo-location';

export default function LocationStep() {
    const [location, setLocation] = useState({ coords: {} });
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Finding location...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location.coords.longitude) {
        text = JSON.stringify(location);
    }

    return (
        <VStack alignItems="center" space={20} marginTop="30px">
            <StyledText>Location Step {text}</StyledText>
            <MapView
                style={styles.map}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    longitudeDelta,
                    latitudeDelta,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    draggable={true}
                    onDragEnd={(e) => {
                        setLocation(e.nativeEvent.coordinate);
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
