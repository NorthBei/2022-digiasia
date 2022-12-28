import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

type IEventNameProps = {
  children: ReactNode;
};

export default function EventName(props: IEventNameProps) {
  const { children } = props;

  return (
    <Text pt="15px" fontSize="24px" fontWeight="700" lineHeight="23px">
      {children}
    </Text>
  );
}
