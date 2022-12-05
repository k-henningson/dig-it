import { Select } from 'native-base';
import PropTypes from 'prop-types';

const TAP_RANGES = {
    CTV: {
        start: 0,
        end: 0,
    },
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
    CTN: {
        start: null,
        end: null,
    },
};

export default function CompressionTestTapNumber({
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

CompressionTestTapNumber.propTypes = {
    tapResult: PropTypes.string.isRequired,
    tapNumber: PropTypes.number,
    setTapNumber: PropTypes.func.isRequired,
};
