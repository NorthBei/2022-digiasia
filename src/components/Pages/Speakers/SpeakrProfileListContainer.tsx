import { VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type SpeakerProfileListContainerProps = {
  children: ReactNode;
};

function SpeakerProfileListContainer(props: SpeakerProfileListContainerProps) {
  const { children } = props;

  return (
    <VStack
      spacing="35px"
      alignItems="flex-start"
      my={{ base: '19px', md: '44px' }}
    >
      {children}
    </VStack>
  );
}

export default SpeakerProfileListContainer;
