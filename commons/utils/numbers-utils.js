export const generateNumberRange = ({ start, end }) => {
    const nums = [];
    for (let i = start; i <= end; i++) {
        nums.push(i);
    }
    return nums;
};
