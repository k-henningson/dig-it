import { Button, Box, Image } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';

export default function ImageStep({ images, setImages }) {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
        if (!result.canceled) {
            setImages(result.assets[0].uri);
        }
    };

    return (
        <Box alignItems="center" marginTop="30px">
            <Button onPress={pickImage} marginBottom="20px" size="lg">
                Select Image ❄️
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
