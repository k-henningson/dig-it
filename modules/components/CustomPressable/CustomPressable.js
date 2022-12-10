import StyledText from '../StyledText/StyledText';
import { Pressable } from 'native-base';
import PropTypes from 'prop-types';

export default function CustomPressable(props) {
    return (
        <Pressable
            onPress={props.onPress}
            backgroundColor={props.isSelected ? 'green.50' : null}
            width="45%"
            height="25%"
            rounded="lg"
            overflow="hidden"
            p="4"
            m="2"
            borderColor="coolGray.200"
            borderWidth="1"
            _web={{
                shadow: 2,
                borderWidth: 0,
            }}
        >
            <StyledText>{props.children}</StyledText>
        </Pressable>
    );
}

CustomPressable.propTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
};
