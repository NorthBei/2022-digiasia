import { Box, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import DoubleColumnsContainer from '@components/Container/DoubleColumnsContainer';
import Image from '@components/Image';
import BaseLayout from '@components/Layout/BaseLayout';
import UnivLink, { LinkType } from '@components/UnivLink';
import { PAGE_PATH, SCROLL_TO_SECTION_ID, SECTION_ID } from '@const/index';
import BackHomeArrow from '@images/icon-back-home-arrow.svg';
import {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

enum Const {
  TWO_COLS_RIGHT_RATIO = '55%',
  ARROW_ICON_SIZE = '50px',
  ARROW_ICON_GAP = '15px',
}

type DoubleColumnsLayoutTitleProps = {
  title: string;
  subtitle?: ReactNode;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

function DoubleColumnsNav(props: DoubleColumnsLayoutTitleProps) {
  const { title, subtitle, image } = props;
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<string>('auto');

  useEffect(() => {
    const updateImageWidth = () => {
      setImageWidth(`${imageRef.current?.offsetWidth}px`);
    };
    updateImageWidth();
    addEventListener('resize', updateImageWidth);

    return () => {
      removeEventListener('resize', updateImageWidth);
    };
  }, []);

  return (
    <DoubleColumnsContainer
      left={
        <Box display={{ base: 'none', md: 'block' }} ref={imageRef}>
          <Box
            position="fixed"
            top="50%"
            transform="translateY(-50%)"
            w={imageWidth}
          >
            <Image
              src={image.url}
              alt={title}
              height={image.height}
              width={image.width}
              unoptimized
            />
          </Box>
        </Box>
      }
      rightRatio={Const.TWO_COLS_RIGHT_RATIO}
    >
      <Grid
        templateAreas={{
          base: `"arrow title"
                 "subtitle subtitle"`,
          md: `"arrow title"
               ". subtitle"`,
        }}
        gridColumnGap={Const.ARROW_ICON_GAP}
        templateColumns={`${Const.ARROW_ICON_SIZE} auto`}
        mt={{ base: '47px', md: '50px' }}
        mb={subtitle ? '0' : '50px'}
      >
        <GridItem area="arrow">
          <Box boxSize={Const.ARROW_ICON_SIZE} cursor="pointer">
            <UnivLink type={LinkType.INTERNAL} href={PAGE_PATH.HOME}>
              <BackHomeArrow />
            </UnivLink>
          </Box>
        </GridItem>
        <GridItem area="title">
          <Heading
            as="h1"
            fontSize={{ base: '34px', md: '40px' }}
            lineHeight={Const.ARROW_ICON_SIZE}
            letterSpacing="0.05rem"
          >
            {title}
          </Heading>
        </GridItem>
        {subtitle && <GridItem area="subtitle">{subtitle}</GridItem>}
      </Grid>
    </DoubleColumnsContainer>
  );
}

type DoubleColumnsLayoutProps = {
  sectionId: SECTION_ID;
  onScrollY?: (container: HTMLElement) => void;
  scrollRef?: MutableRefObject<HTMLElement | undefined>;
  children: ReactNode;
} & DoubleColumnsLayoutTitleProps;

function DoubleColumnsLayout(props: DoubleColumnsLayoutProps) {
  const { sectionId, title, subtitle, image, scrollRef, onScrollY, children } =
    props;

  useEffect(() => {
    sessionStorage.setItem(SCROLL_TO_SECTION_ID, sectionId);
    // just run once after page loaded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BaseLayout
        nav={
          <DoubleColumnsNav title={title} subtitle={subtitle} image={image} />
        }
      >
        <PerfectScrollbar
          containerRef={(ref) => {
            if (scrollRef) {
              scrollRef.current = ref;
            }
          }}
          onScrollY={onScrollY}
        >
          <DoubleColumnsContainer rightRatio={Const.TWO_COLS_RIGHT_RATIO}>
            <HStack
              spacing={{ base: '0', md: Const.ARROW_ICON_GAP }}
              alignItems="flex-start"
              pb={{ base: '50px', md: '100px' }}
            >
              <Box
                boxSize={Const.ARROW_ICON_SIZE}
                visibility="hidden"
                display={{ base: 'none', md: 'block' }}
              ></Box>
              <Box flex="1">{children}</Box>
            </HStack>
          </DoubleColumnsContainer>
        </PerfectScrollbar>
      </BaseLayout>
    </>
  );
}

export default DoubleColumnsLayout;
