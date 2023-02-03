import { generateNumberRange } from './numbers-utils';

describe('generateNumberRange', () => {
    it('returns an empty array when start and end are undefined', () => {
        const generatedNumber = generateNumberRange({
            start: undefined,
            end: undefined,
        });
        expect(generatedNumber).toStrictEqual([]);
    });

    it('returns array of numbers 1 to 10 when start is 1 and end is 10', () => {
        const generatedNumber = generateNumberRange({ start: 1, end: 10 });
        expect(generatedNumber).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('returns array of numbers 11 to 20 when start is 11 and end is 20', () => {
        const generatedNumber = generateNumberRange({ start: 11, end: 20 });
        expect(generatedNumber).toStrictEqual([
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ]);
    });

    it('returns array of numbers 21 to 30 when start is 21 and end is 30', () => {
        const generatedNumber = generateNumberRange({ start: 21, end: 30 });
        expect(generatedNumber).toStrictEqual([
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        ]);
    });
});
