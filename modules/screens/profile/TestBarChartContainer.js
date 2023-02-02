import TestBarChart from './TestBarChart';
import PropTypes from 'prop-types';

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const getDataByYear = (data, year) => {
    return data[String(year)] || [];
};

export default function TestBarChartContainer({ chartData }) {
    const currentYear = new Date().getFullYear();
    const prevYear = currentYear - 1;

    return (
        <>
            <TestBarChart
                heading={currentYear}
                data={{
                    labels: MONTHS,
                    datasets: [
                        {
                            data: getDataByYear(chartData, currentYear),
                        },
                    ],
                }}
            />
            <TestBarChart
                heading={prevYear}
                data={{
                    labels: MONTHS,
                    datasets: [
                        {
                            data: getDataByYear(chartData, prevYear),
                        },
                    ],
                }}
            />
        </>
    );
}

TestBarChartContainer.propTypes = {
    chartData: PropTypes.shape({
        [PropTypes.number]: PropTypes.arrayOf(PropTypes.number),
    }),
};
