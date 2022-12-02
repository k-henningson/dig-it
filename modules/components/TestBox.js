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
                                <Pressable
                                    width="90%"
                                    rounded="lg"
                                    overflow="hidden"
                                    p="2"
                                    my="3"
                                    borderColor="coolGray.300"
                                    borderWidth="2"
                                    alignItems="center"
                                    _web={{
                                        shadow: 2,
                                        borderWidth: 0,
                                    }}
                                >
                                    <Text fontWeight="medium">CTV</Text>
                                    <Text color="blueGray.600">
                                        0 taps: Very Easy
                                    </Text>
                                </Pressable>
                            </HStack>
                            <HStack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text fontWeight="medium">CTE</Text>
                                <Text color="blueGray.600">
                                    1-10 taps: Easy
                                </Text>
                            </HStack>
                            <HStack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text fontWeight="medium">CTM</Text>
                                <Text color="blueGray.600">
                                    11-20 taps: Moderate
                                </Text>
                            </HStack>
                            <HStack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text fontWeight="medium">CTH</Text>
                                <Text color="blueGray.600">
                                    21-30 taps: Hard
                                </Text>
                            </HStack>
                            <HStack
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Text fontWeight="medium">CTN</Text>
                                <Text color="blueGray.600">
                                    No fracture: No result
                                </Text>
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
