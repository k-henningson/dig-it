import { TextArea, Box } from 'native-base';
import PropTypes from 'prop-types';
import StyledText from '../../../components/StyledText/StyledText';

export default function NotesStep(props) {
    return (
        <Box alignItems="center" marginTop="30px">
            <StyledText>Please enter notes for this test ❄️</StyledText>
            <TextArea
                value={props.notes}
                onChangeText={props.setNotes}
                marginTop="10px"
                size="2xl"
                mx="3px"
                placeholder="Example: Old chains wetted and rounding, still some crisp angles, friable."
                w="90%"
                h="100%"
            />
        </Box>
    );
}

NotesStep.propTypes = {
    notes: PropTypes.string.isRequired,
    setNotes: PropTypes.func.isRequired,
};
