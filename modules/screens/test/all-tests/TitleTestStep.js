import { Input, Box } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';

export default function TitleTestStep(props) {
    return (
        <Box alignItems="center" marginTop="30px">
            <StyledText>Please enter a title for this test ❄️</StyledText>
            <Input
                value={props.title}
                onChangeText={props.setTitle}
                marginTop="10px"
                size="2xl"
                mx="3px"
                placeholder="Example: Brockton Point"
                w="90%"
            />
        </Box>
    );
}

TitleTestStep.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
};
