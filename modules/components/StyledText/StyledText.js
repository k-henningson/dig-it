import { Text } from 'native-base';
import PropTypes from 'prop-types';
import { useTheme } from '../../../commons/hooks/theme';

export default function StyledText(props) {
    const { theme } = useTheme();
    return (
        <Text
            color={theme.foreground}
            style={{
                fontSize: 20,
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
