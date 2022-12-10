export const generateNumberRange = ({ start, end }) => {
    let nums = [];
    for (let i = start; i <= end; i++) {
        nums.push(i);
    }
    return nums;
};
