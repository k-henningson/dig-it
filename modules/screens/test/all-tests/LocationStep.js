import StyledText from '../../../components/StyledText/StyledText';
import { VStack } from 'native-base';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;

export default function LocationStep({ setLocation, location }) {
    return (
        <VStack alignItems="center" space={20} marginTop="30px">
            <StyledText>Location Step</StyledText>
            <MapView
                style={styles.map}
                initialRegion={{ ...location, longitudeDelta, latitudeDelta }}
            >
                <Marker
                    coordinate={location}
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

LocationStep.propTypes = {
    setLocation: PropTypes.func.isRequired,
    location: PropTypes.shape({}).isRequired,
};
