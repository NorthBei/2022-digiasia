import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import GradientDivider from '@components/Divider/GradientDivider';
import DoubleColumnsLayout from '@components/Layout/DoubleColumnsLayout';
import Address from '@components/Pages/Agenda/Address';
import AgendaChildItem from '@components/Pages/Agenda/AgendaChildItem';
import AgendaChildList from '@components/Pages/Agenda/AgendaChildList';
import AgendaItem from '@components/Pages/Agenda/AgendaItem';
import AgendaList, {
  AgendaListSpacing,
} from '@components/Pages/Agenda/AgendaList';
import Company from '@components/Pages/Agenda/Company';
import Title from '@components/Pages/Agenda/Title';
import { SECTION_ID } from '@const/index';
import useScrollSpy, { Target } from '@hooks/useScrollSpy';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import React, { useMemo, useRef, useState } from 'react';

enum DayType {
  DAY1 = 'DAY1',
  DAY2 = 'DAY2',
  DAY3 = 'DAY3',
  EXHIBITION = 'EXHIBITION',
}

const DayTypeArray = Object.values(DayType);

type AgendaSubtitleProps = {
  activeId: Target['id'];
  scrollTo: (dayType: DayType) => void;
};

function AgendaSubtitle(props: AgendaSubtitleProps) {
  const { activeId, scrollTo } = props;
  const { t } = useTranslation();

  return (
    <>
      <Box>
        <HStack
          spacing={{ base: '14px', md: '34px' }}
          m={{ base: '40px 0 23px', md: '20px 0' }}
        >
          {DayTypeArray.map((day) => {
            return (
              <Text
                key={day}
                fontSize={{ base: '16px', md: '24px' }}
                lineHeight="26px"
                fontWeight="700"
                letterSpacing={{ base: '0.05rem', md: '0.1rem' }}
                textTransform="uppercase"
                cursor="pointer"
                onClick={() => scrollTo(day)}
                opacity={day === activeId ? '1' : '0.5'}
                whiteSpace="nowrap"
              >
                {day === DayType.EXHIBITION
                  ? t('Agenda.Exhibition.title')
                  : day}
              </Text>
            );
          })}
        </HStack>
      </Box>
    </>
  );
}

function Agenda() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLElement>();
  const day1Ref = useRef<HTMLHeadingElement>(null);
  const day2Ref = useRef<HTMLHeadingElement>(null);
  const day3Ref = useRef<HTMLHeadingElement>(null);
  const exhibitionRef = useRef<HTMLHeadingElement>(null);

  const targets = useMemo(() => {
    return [
      {
        id: DayType.DAY1,
        element: day1Ref,
      },
      {
        id: DayType.DAY2,
        element: day2Ref,
      },
      {
        id: DayType.DAY3,
        element: day3Ref,
      },
      {
        id: DayType.EXHIBITION,
        element: exhibitionRef,
      },
    ];
  }, []);
  const [activeId, setActiveId] = useState<Target['id']>(targets[0].id);

  const { scrollTo, onScroll } = useScrollSpy(
    scrollRef.current,
    targets,
    (id) => setActiveId(id)
  );

  return (
    <>
      <Head>
        <title>{t('Agenda.title')}</title>
      </Head>
      <DoubleColumnsLayout
        sectionId={SECTION_ID.section3}
        scrollRef={scrollRef}
        onScrollY={onScroll}
        title={t('Agenda.title')}
        subtitle={<AgendaSubtitle activeId={activeId} scrollTo={scrollTo} />}
        image={{
          url: '/images/agenda/main.png',
          height: 890,
          width: 811,
        }}
      >
        <Flex display="inline-flex" direction="column">
          <Box>
            <Title text="11/17" supplement="[ THU ]" ref={day1Ref} />

            <AgendaList>
              <AgendaItem
                time="09:00 - 09:30"
                name={[t('Agenda.Text.registration')]}
                isBoldLetter={true}
              />
              <AgendaItem
                time="09:30 - 10:20"
                name={[t('Agenda.Text.opening'), t('Agenda.Text.vip_Speeches')]}
              />
              <AgendaItem
                time="10:20 - 11:00"
                name={[t('Agenda.Company.Dentsu_Inc')]}
              />
              <AgendaItem time="11:00 - 11:40" name={['Yahoo']} />
              <AgendaItem
                time="11:40  -  12:00"
                name={['ADASIA 2023', 'Seoul roadshow']}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList spacingType={AgendaListSpacing.SM}>
              <AgendaItem
                time="12:00 - 13:20"
                name={[t('Agenda.Text.break')]}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList>
              <AgendaItem
                time="13:20 - 14:00"
                name={[t('Agenda.Company.Omnicom_Media_Group')]}
              />
              <AgendaItem time="14:00 - 14:40" name={['XLenz Inc, USA']} />
              <AgendaItem
                time="14:40 - 15:20"
                name={[t('Agenda.Company.Publicis_Groupe_Taiwan')]}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList spacingType={AgendaListSpacing.SM}>
              <AgendaItem
                time="15:20 - 15:40"
                name={[t('Agenda.Text.break')]}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList>
              <AgendaItem
                time="15:40 - 16:20"
                name={[t('Agenda.Company.Volkswagen_Group_Taiwan')]}
              />
              <AgendaItem time="16:20 - 17:00" name={['The SMC Group']} />
              <AgendaItem time="17:00 - 17:30" name={['KRAFTON Inc.']} />
            </AgendaList>
          </Box>
          <Box>
            <Title text="11/18" supplement="[ FRI ]" ref={day2Ref} />

            <AgendaList>
              <AgendaItem
                time="09:00 - 09:30"
                name={[t('Agenda.Text.registration')]}
                isBoldLetter={true}
              />
              <AgendaItem
                time="09:30 - 10:10"
                name={[t('Agenda.Company.Hakuhodo_Zeta_Inc')]}
              />
              <AgendaItem time="10:10 - 10:50" name={['Twitch']} />
              <AgendaItem time="10:50 - 11:30" name={['Meta']} />
              <AgendaItem
                time="11:30  -  12:10"
                name={['LINE Taiwan Limited']}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList spacingType={AgendaListSpacing.SM}>
              <AgendaItem
                time="12:10 - 13:30"
                name={[t('Agenda.Text.break')]}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList>
              <AgendaItem
                time="13:30 - 14:20"
                name={['[ IAA ] What’s coming next?']}
              >
                <AgendaChildList>
                  <AgendaChildItem
                    time="13:30 - 13:50"
                    name="IAA World Congress 2024 Penang Roadshow"
                  />
                  <AgendaChildItem time="13:50 - 14:20" name="CNN" />
                </AgendaChildList>
              </AgendaItem>

              <AgendaItem
                time="14:20 - 15:00"
                name={[t('Agenda.Company.MicroAd_Taiwan')]}
              />
            </AgendaList>
            <GradientDivider />
            <VStack
              spacing="15px"
              alignItems="flex-start"
              my={{ base: '12px', md: '25px' }}
            >
              <AgendaItem
                time="15:00 - 15:30"
                name={[t('Agenda.Text.break')]}
              />
            </VStack>
            <GradientDivider />
            <AgendaList>
              <AgendaItem
                time="15:30 - 16:10"
                name={[t('Agenda.Company.Dentsu_Taiwan_Inc')]}
              />
              <AgendaItem time="16:10 - 16:50" name={['Google']} />
              <AgendaItem
                time="16:50 - 17:30"
                name={[t('Agenda.Company.Mindshare')]}
              />
              <AgendaItem
                time="17:30 - 17:50"
                name={[t('Agenda.Company.MaiCoin_Group')]}
              />
            </AgendaList>
          </Box>
          <Box>
            <Title text="11/19" supplement="[ SAT ]" ref={day3Ref} />

            <AgendaList>
              <AgendaItem
                time="09:00 - 09:30"
                name={[t('Agenda.Text.registration')]}
                isBoldLetter={true}
              />
              <AgendaItem
                time="09:30 - 10:10"
                name={[t('Agenda.Company.CacaFly')]}
              />
              <AgendaItem time="10:10 - 10:50" name={['HTC VIVE ORIGINALS']} />
              <AgendaItem
                time="10:50 - 11:50"
                name={[t('Agenda.Text.panel_Discussion')]}
              />
              <AgendaItem
                time="11:50  -  12:00"
                name={[t('Agenda.Text.closing')]}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList spacingType={AgendaListSpacing.SM}>
              <AgendaItem
                time="12:00 - 13:00"
                name={[t('Agenda.Text.break')]}
              />
            </AgendaList>
            <GradientDivider />
            <AgendaList>
              <AgendaItem
                time="13:00 - 14:30"
                name={['Startup Pitch', 'Institution Visit ']}
              />
              <AgendaItem
                time="14:30 - 15:00"
                name={[t('Agenda.Text.transition')]}
              />
              <AgendaItem
                time="15:00 - 17:30"
                name={[t('Agenda.Text.17th_AdTaiwan')]}
              />
            </AgendaList>
          </Box>
          <Box>
            <Title text={t('Agenda.Exhibition.title')} ref={exhibitionRef} />
            <Address />

            <GradientDivider mb={{ base: '30px', md: '50px' }} />
            <Company
              image="/images/agenda/company-logo/Yahoo.png"
              title={t('Agenda.Exhibition.Yahoo.title')}
              descriptions={t('Agenda.Exhibition.Yahoo.descriptions')}
            />
            <Company
              image="/images/agenda/company-logo/HTC_VIVE_ORIGINALS.png"
              title={t('Agenda.Exhibition.HTC_VIVE_ORIGINALS.title')}
              descriptions={t(
                'Agenda.Exhibition.HTC_VIVE_ORIGINALS.descriptions'
              )}
            />
            <Company
              image="/images/agenda/company-logo/LINE.png"
              title={t('Agenda.Exhibition.LINE_Taiwan_Limited.title')}
              descriptions={t(
                'Agenda.Exhibition.LINE_Taiwan_Limited.descriptions'
              )}
            />
            <Company
              image="/images/agenda/company-logo/Meta.png"
              title={t('Agenda.Exhibition.Meta.title')}
              descriptions={[t('Agenda.Exhibition.Meta.descriptions')]}
            />
            <Company
              image="/images/agenda/company-logo/光禾感知.png"
              title={t('Agenda.Exhibition.OSENSE_TECHNOLOGY_CO_LTD.title')}
              descriptions={t(
                'Agenda.Exhibition.OSENSE_TECHNOLOGY_CO_LTD.descriptions'
              )}
            />
            <Company
              image="/images/agenda/company-logo/茶米宇宙.png"
              title={t('Agenda.Exhibition.Demiverse_Technology_Co_Ltd.title')}
              descriptions={t(
                'Agenda.Exhibition.Demiverse_Technology_Co_Ltd.descriptions'
              )}
            />
            <Company
              image="/images/agenda/company-logo/成境科技.png"
              title={t('Agenda.Exhibition.Red_Pill_Lab_Limited.title')}
              descriptions={t(
                'Agenda.Exhibition.Red_Pill_Lab_Limited.descriptions'
              )}
            />
            <Company
              image="/images/agenda/company-logo/MaiCoin_Qubic.png"
              title={t('Agenda.Exhibition.MaiCoin_Group.title')}
              descriptions={t('Agenda.Exhibition.MaiCoin_Group.descriptions')}
            />
            <Company
              image="/images/agenda/company-logo/天衍互動.png"
              title={t('Agenda.Exhibition.TianYen_Inc.title')}
              descriptions={t('Agenda.Exhibition.TianYen_Inc.descriptions')}
            />
            <Company
              image="/images/agenda/company-logo/方略電子.png"
              title={t('Agenda.Exhibition.Panelsemi_corp.title')}
              descriptions={t('Agenda.Exhibition.Panelsemi_corp.descriptions')}
            />
          </Box>
        </Flex>
      </DoubleColumnsLayout>
    </>
  );
}

export default Agenda;
