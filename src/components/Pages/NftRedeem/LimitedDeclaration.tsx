import { Box, Text } from '@chakra-ui/react';

import WhiteGradientDivider from './WhiteGradientDivider';

type LimitedDeclarationProps = {
  text: string;
};

function LimitedDeclaration(props: LimitedDeclarationProps) {
  const { text } = props;

  return (
    <Box display={{ base: 'block', md: 'inline-block' }}>
      <WhiteGradientDivider />
      <Text
        fontWeight="500"
        fontSize={{ base: '18px', md: '20px' }}
        lineHeight={{ base: '56px', md: '40px' }}
        letterSpacing="0.05em"
        background="linear-gradient(98.55deg, #FFFFFF 18.27%, #D1D1D1 44.68%, #FFFFFF 66.03%, #A8A8A8 90.75%, #FFFFFF 111.53%)"
        backgroundClip="text"
        display="inline-block"
        px={{ base: '20px', md: '58px' }}
      >
        {text}
      </Text>
      <WhiteGradientDivider />
    </Box>
  );
}

export default LimitedDeclaration;
