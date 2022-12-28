import { Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ScheduleListProps = {
  children: ReactNode;
};

function ScheduleList(props: ScheduleListProps) {
  const { children } = props;

  return (
    <Stack
      spacing={{ base: '30px', md: '88px' }}
      direction={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
      justifyContent="space-between"
    >
      {children}
    </Stack>
  );
}

export default ScheduleList;
