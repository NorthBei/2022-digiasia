import DoubleColumnsLayout from '@components/Layout/DoubleColumnsLayout';
import InfoBlock from '@components/Pages/Registration/InfoBlock';
import PriceTable from '@components/Pages/Registration/PriceTable';
import RegisterBox from '@components/Pages/Registration/RegisterBox';
import { LinkType } from '@components/UnivLink';
import { EXTERNAL_PAGE_URL, SECTION_ID } from '@const/index';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import { useRef } from 'react';

function Registration() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLElement>();

  return (
    <>
      <Head>
        <title>{t('Registration.title')}</title>
      </Head>
      <DoubleColumnsLayout
        sectionId={SECTION_ID.section5}
        scrollRef={scrollRef}
        title={t('Registration.title')}
        image={{
          url: '/images/registration/main.png',
          height: 700,
          width: 909,
        }}
      >
        <RegisterBox
          title={t('Registration.Taiwan_Delegates.title')}
          button={{
            text: t('Registration.Taiwan_Delegates.button'),
            type: LinkType.EXTERNAL,
            href: EXTERNAL_PAGE_URL.DIGIASIA_ACCUPASS_ZH,
          }}
        >
          <PriceTable
            mt="0"
            instruction={t('Registration.Taiwan_Delegates.time')}
            priceList={t('Registration.Taiwan_Delegates.price_list')}
            isPriceAlignLeft
          />
        </RegisterBox>

        <RegisterBox
          title={t('Registration.AFAA_Members.title')}
          subtitle={t('Registration.AFAA_Members.subtitle')}
          button={{
            text: t('Registration.AFAA_Members.button'),
            type: LinkType.EXTERNAL,
            href: `${process.env.baseUrl}/docs/online_registration_for_AFAA_Members.xlsx`,
            fn: undefined,
          }}
        >
          <InfoBlock
            title={t('Registration.AFAA_Members.Section1.title')}
            descriptions={t('Registration.AFAA_Members.Section1.descriptions')}
          />
          <InfoBlock
            title={t('Registration.AFAA_Members.Section2.title')}
            descriptions={t('Registration.AFAA_Members.Section2.descriptions')}
          />
          <InfoBlock
            title={t('Registration.AFAA_Members.Section2.title')}
            descriptions={t('Registration.AFAA_Members.Section3.descriptions')}
          />
        </RegisterBox>

        <RegisterBox
          title={t('Registration.IAA_Members.title')}
          subtitle={t('Registration.IAA_Members.subtitle')}
          button={{
            text: t('Registration.IAA_Members.button'),
            type: LinkType.EXTERNAL,
            href: EXTERNAL_PAGE_URL.DIGIASIA_ACCUPASS_EN,
          }}
        >
          <PriceTable
            instruction={t('Registration.IAA_Members.time')}
            priceList={t('Registration.IAA_Members.price_list')}
          />
        </RegisterBox>

        <RegisterBox
          title={t('Registration.International_Delegates.title')}
          subtitle={t('Registration.International_Delegates.subtitle')}
          button={{
            text: t('Registration.International_Delegates.button'),
            type: LinkType.EXTERNAL,
            href: EXTERNAL_PAGE_URL.DIGIASIA_ACCUPASS_EN,
          }}
        >
          <PriceTable
            instruction={t('Registration.International_Delegates.time')}
            priceList={t('Registration.International_Delegates.price_list')}
          />
        </RegisterBox>
      </DoubleColumnsLayout>
    </>
  );
}

export default Registration;
