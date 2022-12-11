import PropTypes from 'prop-types';
import { Picker } from '@react-native-picker/picker';
import { generateNumberRange } from '../../../../commons/utils/numbers-utils';

const TAP_RANGES = {
    CTE: {
        start: 1,
        end: 10,
    },
    CTM: {
        start: 11,
        end: 20,
    },
    CTH: {
        start: 21,
        end: 30,
    },
};

export default function CompressionTestTapNumberStep({
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

CompressionTestTapNumberStep.propTypes = {
    tapResult: PropTypes.string.isRequired,
    tapNumber: PropTypes.number,
    setTapNumber: PropTypes.func.isRequired,
};
