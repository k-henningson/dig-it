import { Pressable } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import WizardRouter from './wizard/WizardRouter';
import * as Haptics from 'expo-haptics';

export default function TestBox({ children, test }) {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = () => {
        // save new test here
        setShowModal(false);
    };

    const handlePress = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setShowModal(true);
    };

    return (
        <>
            <Pressable
                onPress={handlePress}
                width="45%"
                height="25%"
                rounded="lg"
                overflow="hidden"
                p="4"
                m="2"
                borderColor="coolGray.200"
                borderWidth="1"
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
            >
                {children}
            </Pressable>
            {showModal && (
                <WizardRouter
                    test={test}
                    isVisible={showModal}
                    handleClose={() => setShowModal(false)} // todo add confirmation before closing
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    );
}

TestBox.propTypes = {
    children: PropTypes.node.isRequired,
    test: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        objective: PropTypes.string.isRequired,
        steps: PropTypes.arrayOf(PropTypes.shape({})), // todo make step prop
    }),
};
