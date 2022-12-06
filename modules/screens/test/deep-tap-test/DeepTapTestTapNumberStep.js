import { Select } from 'native-base';
import PropTypes from 'prop-types';

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
    const numbers = () => {
        const { start, end } = TAP_RANGES[tapResult];
        let nums = [];
        for (let i = start; i <= end; i++) {
            nums.push(i);
        }
        return nums;
    };
    return (
        <Select
            selectedValue={tapNumber}
            onValueChange={setTapNumber}
            placeholder="Pick a number"
        >
            {numbers().map((num) => (
                <Select.Item key={num} label={num.toString()} value={num} />
            ))}
        </Select>
    );
}

DeepTapTestTapNumberStep.propTypes = {
    tapResult: PropTypes.string.isRequired,
    tapNumber: PropTypes.number,
    setTapNumber: PropTypes.func.isRequired,
};
