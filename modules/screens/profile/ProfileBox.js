import { Box } from 'native-base';
import PropTypes from 'prop-types';

export default function ProfileBox(props) {
    return (
        <Box
            width="90%"
            rounded="lg"
            overflow="hidden"
            p="10"
            my="2"
            borderColor="coolGray.300"
            borderWidth="0.9"
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
