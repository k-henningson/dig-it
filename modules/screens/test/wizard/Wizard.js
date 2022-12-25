import { Modal, Button, Center, Box } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../firebaseConfig';
import SuccessStep from '../all-tests/SuccessStep';
import ProgressBar from './ProgressBar';

export default function Wizard({
    isVisible,
    title,
    children,
    handleClose,
    testData,
}) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const stepsWithFinalStep = [
        ...children.filter((step) => typeof step === 'object' && step !== null),
        <SuccessStep key="last-step" />,
    ];

    const currentStep = stepsWithFinalStep[currentStepIndex];

    const isLastStep = currentStepIndex === stepsWithFinalStep.length - 1;

    const incrementStep = () => setCurrentStepIndex((index) => (index += 1));

    const handleBack = () =>
        currentStepIndex === 0
            ? handleClose()
            : setCurrentStepIndex((index) => (index -= 1));

    const handleSubmit = () => {
        addDoc(collection(db, 'testResults'), {
            result: {
                tapResult: testData.tapResult,
                tapNumber: testData.tapNumber,
                fractureType: testData.fractureType,
            },
            type: testData.type,
            weather: testData.weather,
            snowCondition: testData.snowCondition,
            title: testData.title,
            location: testData.location,
            images: testData.images,
        })
            .then((data) => {
                // TODO show success
                console.log('data: ', data);
            })
            .catch((err) => {
                // TODO add error handling
                console.log('err: ', err);
            });
        handleClose();
    };

    return (
        <Modal isOpen={isVisible} onClose={handleClose} size="full">
            <Modal.Content maxWidth="90%" height="90%">
                <Modal.CloseButton />
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    <Center w="100%">
                        <Box w="100%">
                            <ProgressBar
                                currentStep={currentStepIndex}
                                totalSteps={stepsWithFinalStep.length - 1}
                            />
                        </Box>
                    </Center>
                    {currentStep}
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button
                            variant="ghost"
                            colorScheme="blueGray"
                            onPress={handleBack}
                        >
                            Back
                        </Button>
                        {isLastStep ? (
                            <Button onPress={handleSubmit}>Submit</Button>
                        ) : (
                            <Button
                                isDisabled={currentStep.props.canNext === false}
                                onPress={incrementStep}
                            >
                                Next
                            </Button>
                        )}
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
}

Wizard.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    testData: PropTypes.shape({
        tapResult: PropTypes.string.isRequired,
        tapNumber: PropTypes.number,
        fractureType: PropTypes.string.isRequired,
        weather: PropTypes.string.isRequired,
        snowCondition: PropTypes.string.isRequired,
        title: PropTypes.string,
        images: PropTypes.string,
        type: PropTypes.string,
        location: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
        }),
    }),
};
