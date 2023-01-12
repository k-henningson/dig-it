import { Pressable, Modal, HStack, VStack, Text, Button } from 'native-base';
import PropTypes from 'prop-types';
import { useState } from 'react';
import StyledText from '../../components/StyledText/StyledText';
import formatDate from '../../../commons/utils/date-utils';
import { WEATHER_EMOJIS } from '../../../commons/constants/weather';
import { SNOW_CONDITIONS } from '../../../commons/constants/conditions';

export default function HistoryBox({ children, testResult, deleteTestResult }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Pressable
                onPress={() => setShowModal(true)}
                width="90%"
                rounded="lg"
                overflow="hidden"
                display="flex"
                p="8"
                my="2"
                borderColor="coolGray.300"
                borderWidth="0.9"
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
                size="full"
            >
                <Modal.Content maxWidth="90%" height="50%">
                    <Modal.CloseButton
                        onPress={() => {
                            setShowModal(false);
                        }}
                    />
                    <Modal.Header>
                        <StyledText fontWeight="medium">
                            {testResult.title}
                        </StyledText>
                    </Modal.Header>
                    <Modal.Body padding={5}>
                        <HStack justifyContent="space-around" space={20}>
                            <VStack
                                justifyContent="space-between"
                                space={2}
                                alignItems="left"
                            >
                                <StyledText color="blueGray.600">
                                    {formatDate(testResult)}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {testResult.type}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {testResult.result.fractureType}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {testResult.result.tapNumber !== null
                                        ? testResult.result.tapNumber
                                        : 'Taps N/A'}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {testResult.result.tapResult}
                                </StyledText>
                                <StyledText color="blueGray.600">
                                    {testResult.notes !== ''
                                        ? testResult.notes
                                        : 'No notes recorded'}
                                </StyledText>
                            </VStack>
                            <VStack>
                                <Text fontSize={40}>
                                    {WEATHER_EMOJIS[testResult.weather]}
                                </Text>
                                <Text fontSize={40}>
                                    {
                                        SNOW_CONDITIONS[
                                            testResult.snowCondition
                                        ].emoji
                                    }
                                </Text>
                            </VStack>
                        </HStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onPress={() => {
                                deleteTestResult(testResult.id);
                                setShowModal(false);
                            }}
                        >
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}

HistoryBox.propTypes = {
    children: PropTypes.node.isRequired,
    testResult: PropTypes.object,
    deleteTestResult: PropTypes.func,
};
