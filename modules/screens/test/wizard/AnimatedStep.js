import PropTypes from 'prop-types';
import { AnimatePresence, MotiView } from 'moti';

export default function AnimatedStep({ children }) {
    return (
        <AnimatePresence>
            <MotiView
                from={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    type: 'timing',
                    opacity: {
                        type: 'spring',
                    },
                }}
                exit={{
                    opacity: 0,
                }}
            >
                {children}
            </MotiView>
        </AnimatePresence>
    );
}

AnimatedStep.propTypes = {
    children: PropTypes.node,
};
