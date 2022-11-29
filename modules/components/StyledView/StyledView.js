import PropTypes from 'prop-types';
import { View } from 'native-base';
import { useTheme } from '../../../commons/hooks/theme';

export default function StyledView(props) {
    const { theme } = useTheme();
    return (
        <View bg={theme.background} {...props}>
            {props.children}
        </View>
    );
}

StyledView.propTypes = {
    children: PropTypes.node,
};
