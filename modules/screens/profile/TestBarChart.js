import { Dimensions } from 'react-native';
import { Heading } from 'native-base';
import { BarChart } from 'react-native-chart-kit';
import PropTypes from 'prop-types';

const graphStyle = {
    marginVertical: 8,
    borderRadius: 16,
};

const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    backgroundGradientToOpacity: 0.5,
    fillShadowGradientOpacity: 1,
    fillShadowGradientToOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: () => '#369ff2',
    labelColor: () => 'black',
    style: {
        borderRadius: 16,
    },
    barRadius: 6,
    barPercentage: 0.5,
    propsForBackgroundLines: {
        strokeDasharray: '', // solid background lines with no dashes
        strokeWidth: '1',
        stroke: 'hsla(206, 58%, 68%, 0.3)',
    },
};

const screenWidth = Dimensions.get('window').width;

export default function TestBarChart({ data, heading }) {
    return (
        <>
            <Heading margin="14px" fontSize={14}>
                {heading}
            </Heading>
            <BarChart
                style={graphStyle}
                data={data}
                width={screenWidth - 20}
                height={230}
                chartConfig={chartConfig}
                showBarTops={false}
                segments={2}
                fromZero
            />
        </>
    );
}
TestBarChart.propTypes = {
    heading: PropTypes.string,
    data: PropTypes.shape({
        datasets: PropTypes.arrayOf(PropTypes.shape({ data: PropTypes.array })),
        labels: PropTypes.arrayOf(PropTypes.string),
    }),
};
