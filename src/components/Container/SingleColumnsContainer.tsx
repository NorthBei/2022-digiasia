import { Container, SystemProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

import MaxWidthContainer from './MaxWidthContainer';

type SingleColumnsContainerProps = { children: ReactNode } & SystemProps;

function SingleColumnsContainer(props: SingleColumnsContainerProps) {
  const { children, ...systemProps } = props;
  return (
    <MaxWidthContainer>
      <Container
        maxW={{ base: 'initial', md: '637px' }}
        px="0"
        {...systemProps}
      >
        {children}
      </Container>
    </MaxWidthContainer>
  );
}

export default SingleColumnsContainer;
