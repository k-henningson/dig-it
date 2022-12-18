import { VStack } from 'native-base';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Location from 'expo-location';
import StyledText from '../../../components/StyledText/StyledText';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

export default function LocationStep({ location, setLocation }) {
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if (!location) {
            (async () => {
                let { status } =
                    await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                    // TODO render a zoomed out map if user denies location so user can still select location instead of seeing "Finding location"
                }

                let userLocation = await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.Balanced,
                });

                setLocation({
                    longitude: userLocation.coords.longitude,
                    latitude: userLocation.coords.latitude,
                });
            })();
        }
    }, []);

    return (
        <VStack alignItems="center" space={20} marginTop="30px">
            <StyledText>Add Location</StyledText>
            {errorMsg ? <StyledText>{errorMsg}</StyledText> : null}
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
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
                        draggable
                        onDragEnd={(e) => {
                            setLocation(e.nativeEvent.coordinate);
                        }}
                    >
                        <Callout tooltip>
                            <StyledText>Snow pit ❄️</StyledText>
                        </Callout>
                    </Marker>
                </MapView>
            ) : (
                <StyledText>Finding location</StyledText>
            )}
        </VStack>
    );
}

LocationStep.propTypes = {
    location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
    }),
    setLocation: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
