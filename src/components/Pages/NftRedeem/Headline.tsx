import { Heading, VStack } from '@chakra-ui/react';

type HeadlineProps = {
  title: string;
  subtitle: string;
};

function Headline(props: HeadlineProps) {
  const { title, subtitle } = props;

  return (
    <VStack
      spacing="0"
      fontWeight="700"
      letterSpacing="0.05em"
      background="linear-gradient(98.55deg, #FFFFFF 18.27%, #D1D1D1 44.68%, #FFFFFF 66.03%, #A8A8A8 90.75%, #FFFFFF 111.53%)"
      backgroundClip="text"
      textShadow="0px 0px 10px rgba(255, 255, 255, 0.5)"
      mt={{ base: '0', md: '25px' }}
    >
      <Heading
        as="h1"
        fontSize={{ base: '32px', md: '48px' }}
        lineHeight={{ base: '52px', md: '60px' }}
        textAlign="center"
      >
        {/* DigiAsia 2022 */}
        {title}
      </Heading>
      <Heading
        as="h1"
        fontSize={{ base: '32px', md: '36px' }}
        lineHeight={{ base: '45px', md: '45px' }}
        textAlign="center"
      >
        {/* 紀念 NFT */}
        {subtitle}
      </Heading>
    </VStack>
  );
}

export default Headline;
