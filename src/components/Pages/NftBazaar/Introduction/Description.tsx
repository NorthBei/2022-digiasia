import { Text } from '@chakra-ui/react';

type DescriptionProps = {
  text: string;
};

function Description(props: DescriptionProps) {
  const { text } = props;
  return (
    <Text
      fontWeight="700"
      fontSize={{ base: '15px', md: '16px' }}
      lineHeight="28px"
      letterSpacing="0.05em"
      color="white"
    >
      {text}
    </Text>
  );
}

export default Description;
