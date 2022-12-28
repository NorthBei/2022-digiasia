import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import SingleColumnLayout from '@components/Layout/SingleColumnLayout';
import Headline from '@components/Pages/NftRedeem/Headline';
import LimitedDeclaration from '@components/Pages/NftRedeem/LimitedDeclaration';
import NftsWall from '@components/Pages/NftRedeem/NftsWall';
import ScheduleItem from '@components/Pages/NftRedeem/ScheduleItem';
import ScheduleList from '@components/Pages/NftRedeem/ScheduleList';
import StartMintButton from '@components/Pages/NftRedeem/StartMintButton';
import TutorialList from '@components/Pages/NftRedeem/TutorialList';
import UnivLink, { LinkType } from '@components/UnivLink';
import { EXTERNAL_PAGE_URL, SECTION_ID } from '@const/index';
import StarIcon from '@images/icon-star.svg';
import NftEndingIcon from '@images/nft-redeem/icon-nft-ending.svg';
import NftOpeningIcon from '@images/nft-redeem/icon-nft-opening.svg';
import NftRevealIcon from '@images/nft-redeem/icon-nft-reveal.svg';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import { useMemo } from 'react';

function NftRedeem() {
  const { t } = useTranslation();

  const nftMintInstructions = useMemo(() => {
    const steps = [1, 2, 3, 4, 5, 6].map((number) => ({
      number,
      image: {
        src: `/images/nft-redeem/mint-instructions/兌換說明${number}.png`,
      },
      description: t(`NftRedeem.Nft_mint_instructions.Steps.${number}`),
    }));

    return {
      title: t(`NftRedeem.Nft_mint_instructions.title`),
      steps,
    };
  }, [t]);

  const nftEmpowerment = useMemo(() => {
    const steps = [1, 2].map((number) => ({
      number,
      image: {
        src: `/images/nft-redeem/empowerment/賦能說明${number}.png`,
        link:
          number === 2
            ? EXTERNAL_PAGE_URL.TIX_PROTOCOL_NFT_MINT_TUTORIAL
            : undefined,
      },
      description: t(`NftRedeem.Nft_empowerment.Steps.${number}`),
    }));

    return {
      title: t(`NftRedeem.Nft_empowerment.title`),
      steps,
    };
  }, [t]);

  return (
    <>
      <Head>
        <title>{t('NftRedeem.title')}</title>
      </Head>
      <SingleColumnLayout
        sectionId={SECTION_ID.section1}
        title={t('NftRedeem.title')}
      >
        <Flex direction="column" alignItems="center">
          <Headline
            title={t('NftRedeem.nft_collection_name')[0]}
            subtitle={t('NftRedeem.nft_collection_name')[1]}
          />

          <Box boxSize={{ base: '30px', md: '35px' }} my="25px">
            <StarIcon />
          </Box>

          <LimitedDeclaration text={t('NftRedeem.nft_limited')} />

          <NftsWall />

          <Box mb="50px" alignSelf="stretch">
            <Text
              fontWeight="700"
              fontSize={{ base: '15px', md: '16px' }}
              lineHeight="23px"
              textAlign="justify"
              letterSpacing="0.05em"
            >
              {t('NftRedeem.description')}
            </Text>
          </Box>

          <ScheduleList>
            <ScheduleItem
              day={t('NftRedeem.Schedule.Opening.day')}
              image={NftOpeningIcon}
              description={t('NftRedeem.Schedule.Opening.description')}
            />

            <ScheduleItem
              day={t('NftRedeem.Schedule.Reveal.day')}
              image={NftRevealIcon}
              description={t('NftRedeem.Schedule.Reveal.description')}
            />

            <ScheduleItem
              day={t('NftRedeem.Schedule.Ending.day')}
              image={NftEndingIcon}
              description={t('NftRedeem.Schedule.Ending.description')}
            />
          </ScheduleList>

          <Box my={{ base: '50px', md: '80px' }} w="266px">
            <UnivLink
              type={LinkType.EXTERNAL}
              href={EXTERNAL_PAGE_URL.TIX_PROTOCOL_SIGN_UP}
            >
              <StartMintButton
                buttonText={t('NftRedeem.nft_mint_button_text')}
              />
            </UnivLink>
          </Box>

          <VStack spacing="50px">
            <TutorialList
              title={nftMintInstructions.title}
              steps={nftMintInstructions.steps}
            />
            <TutorialList
              title={nftEmpowerment.title}
              steps={nftEmpowerment.steps}
            />
          </VStack>
        </Flex>
      </SingleColumnLayout>
    </>
  );
}

export default NftRedeem;
