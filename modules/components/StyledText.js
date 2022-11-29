import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function StyledText(props) {
    return (
        <Text
            style={{
                fontFamily: 'Inter-Regular',
                fontSize: 30,
                ...props.styles,
            }}
            {...props}
        >
            {props.children}
        </Text>
    );
}

StyledText.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
};
