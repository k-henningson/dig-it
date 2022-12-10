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

export default function ProgressBar({ currentStep, totalSteps }) {
    const [viewWidth, setViewWidth] = useState(0);

    const progressBarWidthAnimated = useAnimatedStyle(
        () => ({
            width: withSpring((currentStep / totalSteps) * viewWidth, {
                overshootClamping: currentStep === 0,
                damping: 20,
                mass: 0.7,
            }),
        }),
        [currentStep, totalSteps, viewWidth]
    );

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
    currentStep: PropTypes.number,
    totalSteps: PropTypes.number,
};
