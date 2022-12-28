import { Box, SystemProps } from '@chakra-ui/react';
import { forwardRef } from 'react';

const Copyright = forwardRef<HTMLDivElement, SystemProps>((props, ref) => {
  const { ...sysProps } = props;

  return (
    <Box
      as="footer"
      w="100%"
      className="hideAfterLoaded"
      color="white"
      fontSize={{ base: '10px', md: '10px' }}
      fontWeight={{ base: '400', md: '700' }}
      textTransform="uppercase"
      letterSpacing="0.05em"
      lineHeight={{ base: '13px', md: '26px' }}
      whiteSpace="nowrap"
      textAlign="center"
      {...sysProps}
      ref={ref}
    >
      Copyright © DigiAsia 2022 ALL RIGHTS RESERVED
    </Box>
  );
});

Copyright.displayName = 'Copyright';

export default Copyright;
