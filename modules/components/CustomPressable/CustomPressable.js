import { Pressable } from 'native-base';
import PropTypes from 'prop-types';

export default function CustomPressable(props) {
    return (
        <Pressable
            onPress={props.onPress}
            backgroundColor={props.isSelected ? 'green.50' : null}
            width="90%"
            rounded="lg"
            overflow="hidden"
            p="2"
            my="3"
            borderColor="coolGray.300"
            borderWidth="2"
            alignItems="center"
            _web={{
                shadow: 2,
                borderWidth: 0,
            }}
        >
            {props.children}
        </Pressable>
    );
}

CustomPressable.propTypes = {
    children: PropTypes.node.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
};
