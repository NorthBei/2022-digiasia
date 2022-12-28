import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Divider,
  Drawer,
  DrawerContent,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import UnivLink, { LinkType } from '@components/UnivLink';
import {
  EXTERNAL_PAGE_URL,
  PAGE_PATH,
  SCROLL_TO_SECTION_ID,
  SECTION_ID,
} from '@const/index';
import { useGlobalContext } from '@context/GlobalContext';
import useSmoothScroll from '@hooks/useSmoothScroll';
import MinusIcon from '@images/header/icon-minus.svg';
import PlusIcon from '@images/header/icon-plus.svg';
import { useRouter } from 'next/router';
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import { useMemo } from 'react';

type MenuDrawerProps = {
  menuControl: ReturnType<typeof useDisclosure>;
};

function MenuDrawer(props: MenuDrawerProps) {
  const { menuControl } = props;
  const { eventClosedModal } = useGlobalContext();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const router = useRouter();
  const scrollTo = useSmoothScroll();

  const menuList = useMemo(() => {
    return [
      {
        name: t('Menu.Experience_Hall.title'),
        children: [
          {
            name: t('Menu.Experience_Hall.children.Online_Exhibition'),
            type: LinkType.FUNCTION,
            url: EXTERNAL_PAGE_URL.ONLINE_EXHIBITION,
            fn: eventClosedModal.onOpen,
          },
          {
            name: t('Menu.Experience_Hall.children.Live_Conference'),
            type: LinkType.FUNCTION,
            url: EXTERNAL_PAGE_URL.LIVE_CONFERENCE,
            fn: eventClosedModal.onOpen,
          },
          {
            name: t('Menu.Experience_Hall.children.NFT_Bazaar'),
            type: LinkType.INTERNAL,
            url: PAGE_PATH.NFT_BAZAAR,
            fn: undefined,
          },
        ],
      },
      {
        name: t('Menu.About.title'),
        children: [
          {
            name: t('Menu.About.children.2022_Introduction'),
            type: LinkType.INTERNAL,
            url: PAGE_PATH.ABOUT,
            fn: undefined,
          },
          {
            name: t('Menu.About.children.2020_Retrospect'),
            type: LinkType.EXTERNAL,
            url: t('DigiAsia_Retrospect.link_2020.url'),
            fn: undefined,
          },
          {
            name: t('Menu.About.children.2018_Retrospect'),
            type: LinkType.EXTERNAL,
            url: t('DigiAsia_Retrospect.link_2018.url'),
            fn: undefined,
          },
        ],
      },
      {
        name: t('Menu.Activities.title'),
        children: [
          {
            name: t('Menu.Activities.children.Agenda'),
            type: LinkType.INTERNAL,
            url: PAGE_PATH.AGENDA,
            fn: undefined,
          },
          {
            name: t('Menu.Activities.children.Speakers'),
            type: LinkType.INTERNAL,
            url: PAGE_PATH.SPEAKERS,
            fn: undefined,
          },
        ],
      },
      {
        name: t('Menu.Tickets.title'),
        children: [
          {
            name: t('Menu.Tickets.children.Registration'),
            type: LinkType.INTERNAL,
            url: PAGE_PATH.REGISTRATION,
            fn: undefined,
          },
          {
            name: t('Menu.Tickets.children.NFT_Redeem'),
            type: LinkType.INTERNAL,
            url: PAGE_PATH.NFT_REDEEM,
            fn: undefined,
          },
          {
            name: t('Menu.Tickets.children.Contact_Us'),
            type: LinkType.FUNCTION,
            url: '',
            fn: () => {
              if (router.pathname === PAGE_PATH.HOME) {
                if (menuControl.isOpen) menuControl.onClose();
                scrollTo(SECTION_ID.footer);
              } else {
                sessionStorage.setItem(SCROLL_TO_SECTION_ID, SECTION_ID.footer);
                router.push({ pathname: PAGE_PATH.HOME, query });
              }
            },
          },
        ],
      },
    ];
  }, [t, router, query, menuControl, scrollTo, eventClosedModal.onOpen]);

  return (
    <Drawer
      isOpen={menuControl.isOpen}
      placement="top"
      onClose={menuControl.onClose}
    >
      <DrawerContent
        bg="rgba(255, 255, 255, 0.7)"
        backdropBlur="6px"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <Flex
          as="nav"
          width="100%"
          p={{ base: '103px 64px 70px', md: '114px 200px 50px' }}
        >
          <Accordion w="100%" maxW="560px" allowToggle>
            {menuList.map((menu) => {
              return (
                <AccordionItem key={menu.name} w="100%" border="none">
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        p="9px 0px"
                        _hover={{ bg: 'none' }}
                        _focus={{ boxShadow: 'none' }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          fontSize="20px"
                          fontWeight={isExpanded ? '700' : '400'}
                          lineHeight="27px"
                          letterSpacing="0.1rem"
                        >
                          {menu.name}
                        </Box>
                        <Center>
                          <Icon
                            as={isExpanded ? MinusIcon : PlusIcon}
                            boxSize="10px"
                          />
                        </Center>
                      </AccordionButton>
                      <Divider
                        mb={{
                          base: isExpanded ? '0' : '40px',
                          md: isExpanded ? '0' : '46px',
                        }}
                        transition="margin-bottom 0.3s"
                      />
                      <AccordionPanel
                        px="0px"
                        py={{ base: '25px', md: '35px' }}
                      >
                        <Stack
                          direction={{ base: 'column', md: 'row' }}
                          alignItems="flex-start"
                          spacing={{ base: '20px', md: '50px' }}
                        >
                          {menu.children.map((item) => {
                            return (
                              <Text
                                key={item.name}
                                fontSize="20px"
                                fontWeight="500"
                                lineHeight="27px"
                                letterSpacing="0.1rem"
                              >
                                <UnivLink
                                  type={item.type}
                                  href={item.url}
                                  onClick={item.fn}
                                >
                                  {item.name}
                                </UnivLink>
                              </Text>
                            );
                          })}
                        </Stack>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
