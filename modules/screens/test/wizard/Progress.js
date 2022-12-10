import PropTypes from 'prop-types';
import { View } from 'react-native';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

export default function Progress({ value = 0 }) {
    return (
        <MotiView>
            <View
                style={{
                    width: '100%',
                    height: 10,
                    backgroundColor: '#f3f3f3',
                    borderRadius: 8,
                }}
            >
                <MotiView
                    from={{
                        scaleX: 0,
                    }}
                    animate={{
                        scaleX: value,
                    }}
                    transition={{
                        easing: Easing.elastic(1.0),
                        type: 'timing',
                        duration: 500,
                    }}
                    style={{
                        backgroundColor: '#369ff2',
                        height: 10,
                        borderRadius: 8,
                        width: 100,
                    }}
                />
            </View>
        </MotiView>
    );
}

Progress.propTypes = {
    value: PropTypes.number,
};
