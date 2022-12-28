import { Flex, SystemProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type MaxWidthContainerProps = { children: ReactNode } & SystemProps;

const widthLimitStyle = {
  maxW: '1360px',
  px: '55px',
  m: 'auto',
};

function MaxWidthContainer(props: MaxWidthContainerProps) {
  const { children, ...sysProps } = props;
  return (
    // 1250px + 55px*2
    <Flex direction="column" w="100%" {...widthLimitStyle} {...sysProps}>
      {children}
    </Flex>
  );
}

export const useMaxWidthContainerStyle = () => {
  return widthLimitStyle;
};

export default MaxWidthContainer;
