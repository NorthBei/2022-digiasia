import { Heading, Text } from '@chakra-ui/react';

export type HeadlineProps = {
  title: string;
  subtitle: string;
};

function Headline(props: HeadlineProps) {
  const { title, subtitle } = props;
  return (
    <Heading
      as="h1"
      fontWeight="700"
      lineHeight={{ base: '40px', md: '60px' }}
      textAlign="center"
      letterSpacing="0.05em"
      background="linear-gradient(98.55deg, #FFFFFF 18.27%, #D1D1D1 44.68%, #FFFFFF 66.03%, #A8A8A8 90.75%, #FFFFFF 111.53%)"
      backgroundClip="text"
      color="transparent"
      textShadow="0px 0px 10px rgba(255, 255, 255, 0.5)"
    >
      <Text fontSize={{ base: '40px', md: '64px' }}>
        {/* DIGIASIA */}
        {title}
      </Text>
      <Text fontSize={{ base: '30px', md: '48px' }}>
        {/* 2022 NFT ARTS */}
        {subtitle}
      </Text>
    </Heading>
  );
}

export default Headline;
