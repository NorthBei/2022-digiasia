import { Box, Center, Heading, Text } from '@chakra-ui/react';
import StarIcon from '@components/Pages/Registration/StarIcon';

type InfoBlockProps = {
  title: string;
  descriptions: string[];
};

function InfoBlock(props: InfoBlockProps) {
  const { title, descriptions } = props;
  return (
    <Box py="15px">
      <Heading
        as="h3"
        fontSize="19px"
        lineHeight="23px"
        mb="18px"
        letterSpacing="0.05rem"
      >
        <Center>
          <StarIcon />
          {title}
          <StarIcon />
        </Center>
      </Heading>
      {descriptions.map((text) => {
        return (
          <Text
            key={text}
            fontSize={{ base: '14px', md: '16px' }}
            lineHeight={{ base: '23px', md: '27px' }}
            letterSpacing="0.05rem"
          >
            {text}
          </Text>
        );
      })}
    </Box>
  );
}

export default InfoBlock;
