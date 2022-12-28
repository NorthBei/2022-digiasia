import { Box, Heading, HStack } from '@chakra-ui/react';
import SingleColumnsContainer from '@components/Container/SingleColumnsContainer';
import BaseLayout from '@components/Layout/BaseLayout';
import UnivLink, { LinkType } from '@components/UnivLink';
import { PAGE_PATH, SCROLL_TO_SECTION_ID, SECTION_ID } from '@const/index';
import BackHomeArrow from '@images/icon-back-home-arrow.svg';
import { ReactNode, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Const = {
  ARROW_ICON_SIZE: { base: '50px', md: '82px' },
  ARROW_ICON_GAP: { base: '15px', md: '30px' },
};

type SingleColumnNavProps = {
  title: string;
};

function SingleColumnNav(props: SingleColumnNavProps) {
  const { title } = props;

  return (
    <SingleColumnsContainer>
      <HStack
        spacing={Const.ARROW_ICON_GAP}
        mt={{ base: '47px', md: '50px' }}
        mb="20px"
      >
        <UnivLink type={LinkType.INTERNAL} href={PAGE_PATH.HOME}>
          <Box boxSize={Const.ARROW_ICON_SIZE} cursor="pointer">
            <BackHomeArrow />
          </Box>
        </UnivLink>
        <Heading
          as="h1"
          fontSize={{ base: '34px', md: '40px' }}
          lineHeight={Const.ARROW_ICON_SIZE}
          letterSpacing="0.1rem"
        >
          {title}
        </Heading>
      </HStack>
    </SingleColumnsContainer>
  );
}

type SingleColumnLayoutProps = {
  sectionId: SECTION_ID;
  title: string;
  children: ReactNode;
};

function SingleColumnLayout(props: SingleColumnLayoutProps) {
  const { title, children, sectionId } = props;

  useEffect(() => {
    sessionStorage.setItem(SCROLL_TO_SECTION_ID, sectionId);
    // just run once after page loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseLayout nav={<SingleColumnNav title={title} />}>
      <PerfectScrollbar>
        <SingleColumnsContainer pb={{ base: '50px', md: '100px' }}>
          {children}
        </SingleColumnsContainer>
      </PerfectScrollbar>
    </BaseLayout>
  );
}

export default SingleColumnLayout;
