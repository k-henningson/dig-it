import { Button, Modal, VStack, Text, HStack, Pressable } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function TestBox(props) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Pressable
                onPress={() => setShowModal(true)}
                width="50%"
                rounded="lg"
                overflow="hidden"
                p="12"
                my="3"
                borderColor="coolGray.300"
                borderWidth="2"
                alignItems="center"
                _web={{
                    shadow: 2,
                    borderWidth: 0,
                }}
            >
                {props.children}
            </Pressable>
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="lg"
            >
                <Modal.Content maxWidth="350">
                    <Modal.CloseButton />
                    <Modal.Header>{props.children}</Modal.Header>
                    <Modal.Body>
                        <VStack space={3}>
                            <HStack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text fontWeight="medium">Taps</Text>
                                <Text color="blueGray.400">Input slider</Text>
                            </HStack>
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setShowModal(false);
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    setShowModal(false);
                                }}
                            >
                                Next
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}

TestBox.propTypes = {
    children: PropTypes.node.isRequired,
};
