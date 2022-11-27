import { Box } from 'native-base';
import PropTypes from 'prop-types';

export default function ProfileBox(props) {
    return (
        <Box
            width="80%"
            rounded="lg"
            overflow="hidden"
            p="12"
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
        </Box>
    );
}

ProfileBox.propTypes = {
    children: PropTypes.node.isRequired,
};
