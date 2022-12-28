import { VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export enum AgendaChildListSpacing {
  SM = 'sm',
  LG = 'lg',
}

type AgendaChildListProps = {
  children: ReactNode;
};

function AgendaChildList(props: AgendaChildListProps) {
  const { children } = props;

  return (
    <VStack spacing="0" alignItems="flex-start" mb={{ base: '0', md: '10px' }}>
      {children}
    </VStack>
  );
}

AgendaChildList.defaultProps = {
  spacingType: AgendaChildListSpacing.LG,
};

export default AgendaChildList;
