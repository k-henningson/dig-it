import PropTypes from 'prop-types';
import { Picker } from '@react-native-picker/picker';
import { generateNumberRange } from '../../../../commons/utils/numbers-utils';

const TAP_RANGES = {
    DTE: {
        start: 1,
        end: 10,
    },
    DTM: {
        start: 11,
        end: 20,
    },
    DTH: {
        start: 21,
        end: 30,
    },
};

export default function DeepTapTestTapNumberStep({
    tapResult,
    tapNumber,
    setTapNumber,
}) {
    return (
        <Picker selectedValue={tapNumber} onValueChange={setTapNumber}>
            {generateNumberRange(TAP_RANGES[tapResult]).map((num) => (
                <Picker.Item key={num} label={num.toString()} value={num} />
            ))}
        </Picker>
    );
}

DeepTapTestTapNumberStep.propTypes = {
    tapResult: PropTypes.string.isRequired,
    tapNumber: PropTypes.number,
    setTapNumber: PropTypes.func.isRequired,
};
