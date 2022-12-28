import { Box, Flex, Hide } from '@chakra-ui/react';
import StarryBackground from '@components/Background/StarryBackground';
import Contacts from '@components/Contacts';
import Header from '@components/Header/Header';
import { BASIC_PADDING } from '@const/index';
import { ReactNode } from 'react';

type BaseLayoutProps = { nav?: ReactNode; children: ReactNode };

function BaseLayout(props: BaseLayoutProps) {
  return (
    <Flex direction="column" h="100vh" w="100%" color="white">
      <Box>
        <Header position="sticky" />
      </Box>
      {props.nav && <Box>{props.nav}</Box>}
      <StarryBackground />

      <Box as="main" flex="1" w="100%" overflow="hidden">
        {props.children}
      </Box>
      <Hide below="md">
        <Contacts
          position="fixed"
          right={{
            base: BASIC_PADDING.MOBILE,
            md: BASIC_PADDING.PC,
          }}
          bottom={{
            base: BASIC_PADDING.MOBILE,
            md: BASIC_PADDING.PC,
          }}
        />
      </Hide>
    </Flex>
  );
}

BaseLayout.defaultProps = {
  nav: undefined,
};

export default BaseLayout;
