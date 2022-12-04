import { Button, Modal, VStack, Text, HStack, Pressable } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';

const testTapOptions = [
    { header: 'CTV', subHeader: '0 taps: Very Easy' },
    { header: 'CTE', subHeader: '1-10 taps: Easy' },
    { header: 'CTM', subHeader: '11-20 taps: Moderate' },
    { header: 'CTH', subHeader: '21-30 taps: Hard' },
    { header: 'CTN', subHeader: 'No fracture: No result' },
];

export default function TestBox({ children, header }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Pressable
                onPress={() => setShowModal(true)}
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
            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="lg"
            >
                <Modal.Content maxWidth="350">
                    <Modal.CloseButton />
                    <Modal.Header>{header}</Modal.Header>
                    <Modal.Body>
                        {testTapOptions.map((test, index) => {
                            return (
                                <VStack space={3} key={index}>
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
                                            <Text fontWeight="medium">
                                                {test.header}
                                            </Text>
                                            <Text color="blueGray.600">
                                                {test.subHeader}
                                            </Text>
                                        </Pressable>
                                    </HStack>
                                </VStack>
                            );
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => setShowModal(false)}
                            >
                                Cancel
                            </Button>
                            <Button onPress={() => setShowModal(false)}>
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
    header: PropTypes.string.isRequired,
};
