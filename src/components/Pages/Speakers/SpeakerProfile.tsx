import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';
import Image from '@components/Image';

export type Speaker = {
  image: string;
  time: string;
  name: string;
  company: string;
  position: string;
  topic: string;
  intro: string[];
};

export type SpeakerProfileProps = {
  onClick?: () => void;
} & Speaker;

function SpeakerProfile(props: SpeakerProfileProps) {
  const { image, name, company, position, onClick } = props;

  return (
    <HStack
      spacing="25px"
      w="100%"
      color="white"
      cursor="pointer"
      onClick={onClick}
    >
      <Avatar
        boxSize={{ base: '100px', md: '130px' }}
        position="relative"
        overflow="hidden"
        name={name}
        bg="linear-gradient(92.41deg, #FFFFFF 8.26%, #616370 99.46%)"
        color="black"
      >
        <Image
          src={image}
          alt={name}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </Avatar>
      <VStack
        spacing="5px"
        alignItems="flex-start"
        maxW={{ base: '100%', md: '255px' }}
      >
        <Text
          fontSize="22px"
          lineHeight="23px"
          fontWeight="700"
          letterSpacing="0.05rem"
        >
          {name}
        </Text>
        <Text
          fontSize="15px"
          lineHeight="23px"
          fontWeight="400"
          letterSpacing="0.05rem"
        >
          {company}
        </Text>
        <Text
          fontSize="15px"
          lineHeight="23px"
          fontWeight="400"
          letterSpacing="0.05rem"
        >
          {position}
        </Text>
      </VStack>
    </HStack>
  );
}

export default SpeakerProfile;
