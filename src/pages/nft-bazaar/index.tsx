import { Box, Stack, VStack } from '@chakra-ui/react';
import GradientDivider, {
  GradientDividerDirection,
} from '@components/Divider/GradientDivider';
import GradientHeading from '@components/GradientHeading';
import SingleColumnLayout from '@components/Layout/SingleColumnLayout';
import FaqItem from '@components/Pages/NftBazaar/FaqItem';
import Introduction from '@components/Pages/NftBazaar/Introduction';
import PurchaseSelection from '@components/Pages/NftBazaar/PurchaseSelection';
import { SECTION_ID } from '@const/index';
import CurrencyETH from '@images/nft-bazaar/currency-eth.svg';
import CurrencyTWD from '@images/nft-bazaar/currency-twd.svg';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';

function NftBazaar() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('NftBazaar.title')}</title>
      </Head>
      <SingleColumnLayout
        sectionId={SECTION_ID.section1}
        title={t('NftBazaar.title')}
      >
        <VStack spacing={{ base: '39px', md: '50px' }}>
          <Introduction
            title="DIGIASIA"
            subtitle="2022 NFT ARTS"
            description={t('NftBazaar.description')}
          />

          <Stack
            spacing={{ base: '26px', md: '116px' }}
            direction={{ base: 'column', md: 'row' }}
          >
            <PurchaseSelection
              icon={{
                image: CurrencyTWD,
                width: '167px',
                transform: 'rotate(-10.68deg)',
              }}
              button={{
                text: t(`NftBazaar.Purchase_link.Twd.text`),
                link: t(`NftBazaar.Purchase_link.Twd.link`),
              }}
            />
            <PurchaseSelection
              icon={{
                image: CurrencyETH,
                width: '140px',
                transform: 'rotate(6.42deg)',
              }}
              button={{
                text: t(`NftBazaar.Purchase_link.Eth.text`),
                link: t(`NftBazaar.Purchase_link.Eth.link`),
              }}
            />
          </Stack>

          <GradientDivider direction={GradientDividerDirection.RADIAL} />

          <Box as="section">
            <GradientHeading p="8px 18px" fontSize="25px" letterSpacing="0.1em">
              FAQ
            </GradientHeading>
            <VStack
              spacing="0"
              alignItems="flex-start"
              divider={<GradientDivider />}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => {
                return (
                  <FaqItem
                    key={num}
                    title={t(`NftBazaar.Fqa.${num}.title`)}
                    descriptions={t(`NftBazaar.Fqa.${num}.descriptions`)}
                  />
                );
              })}
            </VStack>
          </Box>
        </VStack>
      </SingleColumnLayout>
    </>
  );
}

export default NftBazaar;
