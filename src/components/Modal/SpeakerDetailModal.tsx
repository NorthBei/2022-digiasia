import {
  Box,
  Heading,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from '@components/Image';
import { Speaker } from '@components/Pages/Speakers/SpeakerProfile';
import CloseIcon from '@images/speakers/icon-close.svg';

type SpeakerDetailModalProps = {
  speaker: Speaker;
  isOpen: boolean;
  onClose: () => void;
};

const Const = {
  GAP_X: { mobile: '20px', pc: '30px' },
  GAP_Y: { mobile: '25px', pc: '25px' },
};

function SpeakerDetailModal(props: SpeakerDetailModalProps) {
  const { speaker, isOpen, onClose } = props;

  return (
    <Modal
      autoFocus={false}
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
      blockScrollOnMount={false}
      isCentered
    >
      <ModalContent
        color="black"
        bg="#D9D9D9"
        w="100%"
        maxWidth={{ base: '85%', md: '764px' }}
        maxHeight={{ base: '85%', md: '470px' }}
        borderRadius="20px"
      >
        <ModalCloseButton
          top={{ base: Const.GAP_Y.mobile, md: Const.GAP_Y.pc }}
          right={{ base: Const.GAP_X.mobile, md: Const.GAP_X.pc }}
          fontSize={{ base: '23px', md: '30px' }}
        >
          <Icon as={CloseIcon} boxSize="26px" />
        </ModalCloseButton>
        <ModalHeader
          padding={{
            base: `${Const.GAP_Y.mobile} ${Const.GAP_X.mobile}`,
            md: `${Const.GAP_Y.pc} ${Const.GAP_X.pc}`,
          }}
        >
          <Heading
            fontSize="20px"
            lineHeight="23px"
            fontWeight="700"
            letterSpacing="0.05rem"
            py={{ base: '15px', md: '20px' }}
          >
            {speaker.time}
          </Heading>
          <Heading
            fontSize="20px"
            lineHeight="23px"
            fontWeight="700"
            letterSpacing="0.05rem"
          >
            {speaker.topic}
          </Heading>
        </ModalHeader>
        <ModalBody
          px={{
            base: `${Const.GAP_X.mobile}`,
            md: `${Const.GAP_X.pc}`,
          }}
          pt="0"
          pb={{
            base: `${Const.GAP_Y.mobile}`,
            md: `${Const.GAP_Y.pc}`,
          }}
        >
          <HStack
            spacing={{ base: '19px', md: '25px' }}
            mb={{
              base: `${Const.GAP_Y.mobile}`,
              md: `${Const.GAP_Y.pc}`,
            }}
          >
            <Box
              width={{ base: '110px', md: '140px' }}
              height={{ base: '160px', md: '140px' }}
              borderRadius="108px"
              position="relative"
              flexShrink="0"
              overflow="hidden"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
            <VStack
              spacing={{ base: '7px', md: '10px' }}
              alignItems="flex-start"
            >
              <Heading
                fontSize="22px"
                lineHeight="23px"
                fontWeight="700"
                letterSpacing="0.05rem"
              >
                {speaker.name}
              </Heading>
              <Text
                fontSize={{ base: '14px', md: '15px' }}
                lineHeight={{ base: '17px', md: '23px' }}
                fontWeight="400"
                letterSpacing="0.05rem"
                color="#707070"
              >
                {speaker.company}
              </Text>
              <Text
                fontSize={{ base: '14px', md: '15px' }}
                lineHeight={{ base: '17px', md: '23px' }}
                fontWeight="400"
                letterSpacing="0.05rem"
                color="#707070"
              >
                {speaker.position}
              </Text>
            </VStack>
          </HStack>
          <VStack alignItems="flex-start">
            {speaker.intro.map((text) => {
              return (
                <Text
                  key={text}
                  fontSize="15px"
                  lineHeight="24px"
                  fontWeight="400"
                  color="#2F2F2F"
                >
                  {text}
                </Text>
              );
            })}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default SpeakerDetailModal;
