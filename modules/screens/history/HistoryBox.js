import { Box } from 'native-base';
import PropTypes from 'prop-types';

export default function HistoryBox(props) {
    return (
        <Box
            width="90%"
            rounded="lg"
            overflow="hidden"
            display="flex"
            p="8"
            my="2"
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
