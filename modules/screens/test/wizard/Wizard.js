import { Modal, Button, View, Progress, Center, Box } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import StyledText from '../../../components/StyledText/StyledText';

export default function Wizard({
    isVisible,
    title,
    handleSubmit,
    children,
    handleClose,
}) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const stepsWithFinalStep = [
        ...children.filter((step) => typeof step === 'object' && step !== null),
        <View key="last-step">
            <StyledText style={{ textAlign: 'center' }}>🎉</StyledText>
        </View>,
    ];

    const currentStep = stepsWithFinalStep[currentStepIndex];

    const incrementStep = () => setCurrentStepIndex((index) => (index += 1));

    const handleBack = () =>
        currentStepIndex === 0
            ? handleClose()
            : setCurrentStepIndex((index) => (index -= 1));

    const isLastStep = currentStepIndex === stepsWithFinalStep.length - 1;

    const progress = (currentStepIndex / (stepsWithFinalStep.length - 1)) * 100;

    return (
        <Modal isOpen={isVisible} onClose={handleClose} size="full">
            <Modal.Content maxWidth="90%" height="90%">
                <Modal.CloseButton />
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body>
                    <Center w="100%">
                        <Box w="100%">
                            <Progress value={progress} mx="4" />
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
                            <Button onPress={handleSubmit}>Finish</Button>
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
};
