import { Button } from 'native-base';
import PropTypes from 'prop-types';

export default function TestBox(props) {
    return (
        <Button
            width="50%"
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
        </Button>
    );
}

TestBox.propTypes = {
    children: PropTypes.node.isRequired,
};
