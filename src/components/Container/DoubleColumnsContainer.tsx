import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import MaxWidthContainer from './MaxWidthContainer';

type DoubleColumnsContainerProps = {
  left?: ReactNode;
  rightRatio?: string;
  children: ReactNode;
};

function DoubleColumnsContainer(props: DoubleColumnsContainerProps) {
  const { left, children: right, rightRatio } = props;
  return (
    <MaxWidthContainer flexDirection="row">
      <Box flex="1">{left}</Box>
      <Box w={{ base: '100%', md: rightRatio }}>{right}</Box>
    </MaxWidthContainer>
  );
}

DoubleColumnsContainer.defaultProps = {
  left: null,
  rightRatio: '50%',
};

export default DoubleColumnsContainer;
