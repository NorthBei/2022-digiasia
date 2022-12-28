import { VStack } from '@chakra-ui/react';
import React, { ReactNode, useMemo } from 'react';

export enum AgendaListSpacing {
  SM = 'sm',
  LG = 'lg',
}

type AgendaListProps = {
  children: ReactNode;
  spacingType?: AgendaListSpacing;
};

function AgendaList(props: AgendaListProps) {
  const { children, spacingType } = props;

  const my = useMemo(() => {
    return AgendaListSpacing.SM === spacingType
      ? { base: '12px', md: '25px' }
      : { base: '19px', md: '35px' };
  }, [spacingType]);

  return (
    <VStack spacing="15px" alignItems="flex-start" my={my}>
      {children}
    </VStack>
  );
}

AgendaList.defaultProps = {
  spacingType: AgendaListSpacing.LG,
};

export default AgendaList;
