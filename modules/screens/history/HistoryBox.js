import { Box } from 'native-base';
import PropTypes from 'prop-types';

export default function HistoryBox(props) {
    return (
        <Box
            width="90%"
            rounded="lg"
            overflow="hidden"
            p="8"
            m="3"
            borderColor="coolGray.300"
            borderWidth="2"
            _web={{
                shadow: 2,
                borderWidth: 0,
            }}
        >
            {props.children}
        </Box>
    );
}

HistoryBox.propTypes = {
    children: PropTypes.node.isRequired,
};
