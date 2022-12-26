export default function formatDate(testResult) {
    if (!testResult.timestamp) {
        return `No date available`;
    }
    const dateObj = testResult.timestamp.toDate();
    const day = dateObj.getDay();
    const date = dateObj.getDate();
    const month = dateObj.getMonth();
    // const year = dateObj.getFullYear();
    const DAYS = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    return `${DAYS[day]}, ${date} ${MONTHS[month].slice(0, 3)}`;
}
