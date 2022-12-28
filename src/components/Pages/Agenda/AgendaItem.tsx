import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

type AgendaItemProps = {
  time: string;
  name: string[];
  isBoldLetter?: boolean;
  children?: ReactNode;
};

function AgendaItem(props: AgendaItemProps) {
  const { time, name, isBoldLetter, children } = props;
  const [startTime, endTime] = time.split(' - ');

  return (
    <HStack spacing="13px" alignItems="flex-start" w="100%">
      <Text
        display="flex"
        fontSize={{ base: '13px', md: '21px' }}
        lineHeight={{ base: '28px', md: '36px' }}
        minW={{ base: '95px', md: '140px' }}
      >
        {startTime}
        <Box as="span" flex="1" textAlign="center">
          -
        </Box>
        {endTime}
      </Text>
      <Box flex="1">
        <VStack alignItems="flex-start" spacing="0">
          <Box>
            {name.map((nameItem) => (
              <Text
                key={nameItem}
                fontSize={{ base: '15px', md: '21px' }}
                fontWeight={isBoldLetter ? 'bold' : 'normal'}
                lineHeight={{ base: '28px', md: '36px' }}
                letterSpacing="0.05rem"
              >
                {nameItem}
              </Text>
            ))}
          </Box>
          {children && <Box>{children}</Box>}
        </VStack>
      </Box>
    </HStack>
  );
}

AgendaItem.defaultProps = {
  isBoldLetter: false,
};

export default AgendaItem;
