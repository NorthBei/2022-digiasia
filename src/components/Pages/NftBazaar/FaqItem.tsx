import { Box, Heading, Text, VStack } from '@chakra-ui/react';

type FaqBlockProps = {
  title: string;
  descriptions: string[];
};

function FaqItem(props: FaqBlockProps) {
  const { title, descriptions } = props;

  return (
    <Box py="26px">
      <Heading
        as="h2"
        fontWeight="700"
        fontSize={{ base: '17px', md: '18px' }}
        lineHeight="23px"
        letterSpacing="0.05em"
      >
        {title}
      </Heading>
      <Box h={{ base: '13px', md: '21px' }}></Box>
      <VStack spacing="0" alignItems="flex-start">
        {descriptions.map((description) => {
          return (
            <Text
              key={description}
              fontWeight="500"
              fontSize="15px"
              lineHeight="23px"
              letterSpacing="0.05rem"
            >
              {description}
            </Text>
          );
        })}
      </VStack>
    </Box>
  );
}

export default FaqItem;
