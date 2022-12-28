import { Center, Icon, SystemProps, VStack } from '@chakra-ui/react';
import UnivLink from '@components/UnivLink';
import { EXTERNAL_PAGE_URL, ICON_SIZE } from '@const/index';
import EmailIcon from '@images/contacts/icon-email.svg';
import FacebookIcon from '@images/contacts/icon-facebook.svg';
import LineIcon from '@images/contacts/icon-line.svg';
import { forwardRef } from 'react';

import { AnimElement } from '../types/animation';

const Contacts = forwardRef<HTMLDivElement, AnimElement & SystemProps>(
  (props, ref) => {
    const { canPlayAnim, ...sysProps } = props;

    return (
      <VStack
        {...sysProps}
        className={canPlayAnim ? 'hideAfterLoaded' : ''}
        spacing={{ base: '16px', md: '24px' }}
        ref={ref}
      >
        <UnivLink href={EXTERNAL_PAGE_URL.DIGIASIA_FACEBOOK}>
          <Center
            boxSize={{
              base: ICON_SIZE.MOBILE,
              md: ICON_SIZE.PC,
            }}
          >
            <Icon as={FacebookIcon} boxSize="100%" />
          </Center>
        </UnivLink>

        <UnivLink href={EXTERNAL_PAGE_URL.DIGIASIA_LINE_OA}>
          <Center
            boxSize={{
              base: ICON_SIZE.MOBILE,
              md: ICON_SIZE.PC,
            }}
          >
            <Icon as={LineIcon} boxSize="100%" />
          </Center>
        </UnivLink>

        <UnivLink href="mailto: celialiu@taaa.org.tw">
          <Center
            boxSize={{
              base: ICON_SIZE.MOBILE,
              md: ICON_SIZE.PC,
            }}
          >
            <Icon as={EmailIcon} boxSize="100%" />
          </Center>
        </UnivLink>
      </VStack>
    );
  }
);

Contacts.displayName = 'Contacts';

export default Contacts;
