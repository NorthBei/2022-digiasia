import { Box } from '@chakra-ui/react';

import Background from './Background';
import Description from './Description';
import Headline, { HeadlineProps } from './Headline';

type IntroductionType = {
  description: string;
} & HeadlineProps;

function Introduction(props: IntroductionType) {
  const { title, subtitle, description } = props;

  return (
    <Box as="section" pt={{ base: '80px', md: '118px' }} position="relative">
      <Background
        position="absolute"
        top="0"
        left="0"
        w={{ base: '100vw', md: '100%' }}
        mx={{ base: 'calc(50% - 50vw)', md: 'initial' }}
        zIndex="-1"
      />
      <Headline title={title} subtitle={subtitle} />
      <Box h={{ base: '33px', md: '26px' }}></Box>
      <Description text={description} />
    </Box>
  );
}

export default Introduction;
