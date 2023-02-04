import formatDate from './date-utils';

describe('formatDate', () => {
    it('returns No date available if the input is null', () => {
        const formattedDate = formatDate(null);
        expect(formattedDate).toBe('No date available');
    });

    it('returns No date available if the input is an empty string', () => {
        const formattedDate = formatDate('');
        expect(formattedDate).toBe('No date available');
    });

    it('returns correctly formatted date for date object', () => {
        const formattedDate = formatDate(new Date('01/01/23'));
        expect(formattedDate).toBe('Sunday, 1 Jan');
    });

    it('returns correctly formatted date for date string', () => {
        const formattedDate = formatDate('01/01/23');
        expect(formattedDate).toBe('Sunday, 1 Jan');
    });

    it('returns correctly formatted date for date string', () => {
        const formattedDate = formatDate({
            toDate: () => new Date('02/01/23'),
        });
        expect(formattedDate).toBe('Wednesday, 1 Feb');
    });
});
