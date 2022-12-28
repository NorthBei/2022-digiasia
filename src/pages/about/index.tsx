import { VStack } from '@chakra-ui/react';
import GradientDivider from '@components/Divider/GradientDivider';
import DoubleColumnsLayout from '@components/Layout/DoubleColumnsLayout';
import IntroBlock from '@components/Pages/About/IntroBlock';
import Organization from '@components/Pages/About/Organization';
import Title from '@components/Pages/About/Title';
import { SECTION_ID } from '@const/index';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import { useMemo, useRef } from 'react';

const images = {
  preparatoryMembers: [
    '1盧炳勳TAAA理事長_600X400.png',
    '2吳東龍KAAA理事長_600X400.png',
    '3IAA理事長_600X400.png',
    '4程懷昌4A理事長_600X400.png',
    '5李運華MAA理事長_600X400.png',
    '6邱繼弘DMA理事長_600X400.png',
    '7郭慶輝TIPRA理事長_600X400.png',
    '8高端訓AMT理事長_600X400.png',
  ],
  preparationCommitteeMembers: [
    '0.顧問 段鍾沂董事長_600X400.png',
    '1.鄧博文榮譽主任委員_600X400.png',
    '2.盧炳勳主任委員_600X400.png',
    '3.黃逸甫策展委員_600X400.png',
    '4.紀緻謙籌備委員_600X400.png',
    '5.謝中川籌備委員_600X400.png',
    '6.呂豐餘籌備委員_600X400.png',
    '7.陈秉鴻籌備委員_600X400.png',
    '8.張昱籌備委員_600X400.png',
  ],
};

function About() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLElement>();

  const preparatoryMembers = useMemo(() => {
    const members: string[] = t('About.Organization.members');
    return members.map((member, index) => ({
      image: `/images/about/大會籌備會照片/${images.preparatoryMembers[index]}`,
      title: member,
    }));
  }, [t]);

  const preparationCommitteeMembers = useMemo(() => {
    const members: string[] = t(
      'About.DigiAsia_2022_Preparation_Committee.members'
    );
    return members.map((member, index) => ({
      image: `/images/about/大會籌備委員會照片/${images.preparationCommitteeMembers[index]}`,
      title: member,
    }));
  }, [t]);

  return (
    <>
      <Head>
        <title> {t('About.title')}</title>
      </Head>
      <DoubleColumnsLayout
        sectionId={SECTION_ID.section2}
        scrollRef={scrollRef}
        title={t('About.title')}
        image={{
          url: '/images/about/main.png',
          height: 497,
          width: 984,
        }}
      >
        <VStack spacing={{ base: '20px', md: '30px' }} alignItems="flex-start">
          <IntroBlock
            title={t('About.What_is_DigiAsia.title')}
            descriptions={t('About.What_is_DigiAsia.descriptions')}
          />
          <IntroBlock
            title={t('About.Why_is_DigiAsia_important.title')}
            descriptions={t('About.Why_is_DigiAsia_important.descriptions')}
          />
          <IntroBlock
            title={t('About.DigiBaby.title')}
            descriptions={t('About.DigiBaby.descriptions')}
          />
          <IntroBlock
            title={t('About.DigiAsia_2022.title')}
            descriptions={t('About.DigiAsia_2022.descriptions')}
          />
        </VStack>

        <GradientDivider my="30px" />

        <VStack alignItems="flex-start" spacing="20px">
          <Title>{t('About.Organization.title')}</Title>
          <Organization
            title={t('About.Organization.subtitle')}
            members={preparatoryMembers}
          />
          <Organization
            title={t('About.DigiAsia_2022_Preparation_Committee.subtitle')}
            members={preparationCommitteeMembers}
          />
        </VStack>
      </DoubleColumnsLayout>
    </>
  );
}

export default About;
