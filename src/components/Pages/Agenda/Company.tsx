import { AspectRatio, Heading, Text, VStack } from '@chakra-ui/react';
import Image from '@components/Image';

type CompanyProps = {
  image: string;
  title: string;
  descriptions: string[];
};

function Company(props: CompanyProps) {
  const { image, title, descriptions } = props;

  return (
    <VStack
      spacing={{ base: '15px', md: '25px' }}
      alignItems="flex-start"
      w="100%"
      maxW={{ base: '318px', md: '500px' }}
      mt="35px"
    >
      <AspectRatio
        ratio={318 / 106}
        w="100%"
        maxW={{ base: '318px', md: '400px' }}
      >
        <Image src={image} alt={title} height={106} width={318} unoptimized />
      </AspectRatio>
      {title.split('\n').map((text) => {
        return (
          <Heading
            key={text}
            fontSize={{ base: '18px', md: '24px' }}
            fontWeight="700"
            letterSpacing="0.05rem"
          >
            {text}
          </Heading>
        );
      })}
      <VStack spacing="10px">
        {descriptions.map((description) => {
          return (
            <Text
              key={description}
              fontSize="15px"
              lineHeight="25px"
              fontWeight="400"
              letterSpacing="0.05rem"
              color="#CBCBCB"
            >
              {description}
            </Text>
          );
        })}
      </VStack>
    </VStack>
  );
}

export default Company;
