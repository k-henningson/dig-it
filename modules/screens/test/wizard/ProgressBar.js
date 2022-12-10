import { View } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const styles = StyleSheet.create({
    progressBarContainer: {
        width: '100%',
        height: 10,
        backgroundColor: '#f3f3f3',
        borderRadius: 8,
    },
    progressBar: {
        height: 10,
        width: 0,
        backgroundColor: '#369ff2',
        borderRadius: 8,
    },
});

export default function ProgressBar({ numerator, denominator }) {
    const [viewWidth, setViewWidth] = useState(0);

    const progressBarWidthAnimated = useAnimatedStyle(() => {
        const useClamping = numerator === 0;
        return {
            width: withSpring((numerator / denominator) * viewWidth, {
                overshootClamping: useClamping,
                damping: 20,
                mass: 0.7,
            }),
        };
    }, [numerator, denominator, viewWidth]);

    const progressBarStyles = [styles.progressBar, progressBarWidthAnimated];

    return (
        <View
            style={styles.progressBarContainer}
            onLayout={(e) => setViewWidth(e.nativeEvent.layout.width)}
        >
            <Animated.View style={progressBarStyles} />
        </View>
    );
}

ProgressBar.propTypes = {
    numerator: PropTypes.number,
    denominator: PropTypes.number,
};
