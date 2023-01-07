export default function formatDate(timestamp) {
    try {
        let dateObj;

        // toDate is a firestore specific property on timestamp
        if ('toDate' in timestamp) {
            dateObj = timestamp.toDate();
        } else {
            dateObj = timestamp;
        }

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
    } catch (error) {
        return 'No date available';
    }
}
