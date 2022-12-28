import { Box, Text } from '@chakra-ui/react';

type AgendaChildItemProps = { time: string; name: string };

function AgendaChildItem(props: AgendaChildItemProps) {
  const { time, name } = props;

  return (
    <Box>
      <Text
        fontSize={{ base: '11px', md: '15px' }}
        letterSpacing="0.05rem"
        mt={{ base: '15px', md: '25px' }}
        mb={{ base: '6px', md: '15px' }}
      >
        {time}
      </Text>
      <Text fontSize={{ base: '13px', md: '24px' }} letterSpacing="0.05rem">
        {name}
      </Text>
    </Box>
  );
}

export default AgendaChildItem;
