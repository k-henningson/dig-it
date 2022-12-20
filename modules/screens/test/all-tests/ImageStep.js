import { Button, Box, Image } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';

export default function ImageStep({ images, setImages }) {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImages(result.assets[0].uri);
        }
    };

    return (
        <Box alignItems="center" marginTop="30px">
            <Button onPress={pickImage}>
                {' '}
                <StyledText>Select Images ❄️</StyledText>
            </Button>
            {images && (
                <Image
                    source={{ uri: images }}
                    style={{ width: 200, height: 200 }}
                    alt="image uploaded by user"
                />
            )}
        </Box>
    );
}

ImageStep.propTypes = {
    images: PropTypes.string,
    setImages: PropTypes.func,
};
