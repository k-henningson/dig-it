import { Text } from 'native-base';
import PropTypes from 'prop-types';
import { useTheme } from '../../../commons/hooks/theme';

export default function StyledText(props) {
    const { theme } = useTheme();
    return (
        <Text
            color={theme.foreground}
            style={{
                fontFamily: 'Inter-Regular',
                fontSize: 30,
                ...props.style,
            }}
            {...props}
        >
            {props.children}
        </Text>
    );
}

StyledText.propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};
