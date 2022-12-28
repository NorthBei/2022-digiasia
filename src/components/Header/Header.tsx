import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Icon,
  SystemProps,
  useDisclosure,
} from '@chakra-ui/react';
import { BASIC_PADDING, ICON_SIZE, PAGE_PATH, SECTION_ID } from '@const/index';
import useSmoothScroll from '@hooks/useSmoothScroll';
import MenuIcon from '@images/header/icon-menu.svg';
import { useRouter } from 'next/router';
import { useLanguageQuery } from 'next-export-i18n';
import { useLayoutEffect, useRef } from 'react';

import { AnimElement } from '../../types/animation';
import MenuDrawer from './MenuDrawer';
import TranslationMenu from './TranslationMenu';

type HeaderProps = {
  onLoad?: (
    title: HTMLDivElement | null,
    menu: HTMLDivElement | null,
    translation: HTMLDivElement | null
  ) => void;
} & AnimElement &
  SystemProps;

function Header(props: HeaderProps) {
  const [query] = useLanguageQuery();
  const router = useRouter();
  const title = useRef<HTMLDivElement | null>(null);
  const menu = useRef<HTMLDivElement | null>(null);
  const translation = useRef<HTMLDivElement | null>(null);
  const menuDrawer = useDisclosure();
  const { onLoad, canPlayAnim, ...sysProps } = props;
  const scrollTo = useSmoothScroll();

  useLayoutEffect(() => {
    if (onLoad) onLoad(title.current, menu.current, translation.current);
  }, [onLoad]);

  return (
    <>
      <MenuDrawer menuControl={menuDrawer} />

      <Box as="header" {...sysProps} w="100%" zIndex="header">
        <Grid
          templateColumns="1fr auto 1fr"
          padding={{
            base: BASIC_PADDING.MOBILE,
            md: BASIC_PADDING.PC,
          }}
          paddingBottom={{
            base: '0px',
            md: '0px',
          }}
          alignItems="center"
          color={menuDrawer.isOpen ? 'black' : 'white'}
          transition="color 0.3s"
        >
          <GridItem justifySelf="flex-start">
            <Center
              className={canPlayAnim ? 'hideAfterLoaded' : ''}
              cursor="pointer"
              boxSize={{
                base: ICON_SIZE.MOBILE,
                md: ICON_SIZE.PC,
              }}
              onClick={menuDrawer.onToggle}
              ref={menu}
            >
              <Icon as={MenuIcon} boxSize="100%" />
            </Center>
          </GridItem>
          <GridItem>
            <Heading
              as="h1"
              className={canPlayAnim ? 'hideAfterLoaded' : ''}
              color="currentColor"
              fontSize={{ base: '16px', md: '20px' }}
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="0.1em"
              whiteSpace="nowrap"
              onClick={() => {
                if (router.pathname === PAGE_PATH.HOME) {
                  scrollTo(SECTION_ID.section0);
                } else {
                  sessionStorage.clear();
                  router.push({ pathname: PAGE_PATH.HOME, query });
                }
              }}
              cursor="pointer"
              ref={title}
            >
              Welcome To DigiAsia
            </Heading>
          </GridItem>
          <GridItem justifySelf="flex-end">
            <TranslationMenu
              boxSize={{
                base: ICON_SIZE.MOBILE,
                md: ICON_SIZE.PC,
              }}
              canPlayAnim={canPlayAnim}
              ref={translation}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Header;
