import { Box, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import DoubleColumnsLayout from '@components/Layout/DoubleColumnsLayout';
import SpeakerModal from '@components/Modal/SpeakerDetailModal';
import DateTitle from '@components/Pages/Speakers/DateTitle';
import EventName from '@components/Pages/Speakers/EventName';
import {
  Speaker,
  SpeakerProfileProps,
} from '@components/Pages/Speakers/SpeakerProfile';
import SpeakerProfileList from '@components/Pages/Speakers/SpeakerProfileList';
import SpeakerProfileListContainer from '@components/Pages/Speakers/SpeakrProfileListContainer';
import { SECTION_ID } from '@const/index';
import useScrollSpy, { Target } from '@hooks/useScrollSpy';
import Head from 'next/head';
import { useTranslation } from 'next-export-i18n';
import { useCallback, useMemo, useRef, useState } from 'react';

enum DayType {
  DAY1 = 'DAY1',
  DAY2 = 'DAY2',
  DAY3 = 'DAY3',
}

type SpeakersSubtitleProps = {
  activeId: Target['id'];
  scrollTo: (dayType: DayType) => void;
};

function SpeakersSubtitle(props: SpeakersSubtitleProps) {
  const { activeId, scrollTo } = props;

  return (
    <>
      <Box>
        <HStack
          spacing={{ base: '14px', md: '34px' }}
          m={{ base: '40px 0 23px', md: '20px 0' }}
        >
          {Object.values(DayType).map((day) => {
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
                {day}
              </Text>
            );
          })}
        </HStack>
      </Box>
    </>
  );
}

function Speakers() {
  const { t } = useTranslation();
  const scrollRef = useRef<HTMLElement>();
  const day1Ref = useRef<HTMLHeadingElement>(null);
  const day2Ref = useRef<HTMLHeadingElement>(null);
  const day3Ref = useRef<HTMLHeadingElement>(null);
  const speakerDetailModal = useDisclosure();
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker>({
    image: '',
    time: '',
    name: '',
    company: '',
    position: '',
    topic: '',
    intro: [''],
  });

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
    ];
  }, []);
  const [activeId, setActiveId] = useState<Target['id']>(targets[0].id);

  const { scrollTo, onScroll } = useScrollSpy(
    scrollRef.current,
    targets,
    (id) => setActiveId(id)
  );

  const showSpeakerDetail = useCallback(
    (speaker: Speaker) => {
      setSelectedSpeaker(speaker);
      speakerDetailModal.onOpen();
    },
    [speakerDetailModal]
  );

  const speakerListData = useCallback(
    (dayType: DayType, idList: number[]): Speaker[] => {
      // DAY1 -> Day1
      const day =
        dayType.charAt(0).toUpperCase() + dayType.slice(1).toLowerCase();

      return idList.map((id) => {
        return {
          image: `/images/speakers/${day.toLowerCase()}/speaker${id}.png`,
          time: t(`Speakers.${day}.${id}.time`),
          name: t(`Speakers.${day}.${id}.name`),
          company: t(`Speakers.${day}.${id}.company`),
          position: t(`Speakers.${day}.${id}.position`),
          topic: t(`Speakers.${day}.${id}.topic`),
          intro: t(`Speakers.${day}.${id}.intro`),
        };
      });
    },
    [t]
  );

  const speakerListDataWithFn = useCallback(
    (dayType: DayType, idList: number[]): SpeakerProfileProps[] => {
      return speakerListData(dayType, idList).map((speaker) => {
        return { ...speaker, onClick: () => showSpeakerDetail(speaker) };
      });
    },
    [speakerListData, showSpeakerDetail]
  );

  const speakerList = useMemo(() => {
    const day1Speakers = speakerListDataWithFn(
      DayType.DAY1,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    );

    const day2Speakers = speakerListDataWithFn(
      DayType.DAY2,
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    );

    const day3GeneralSpeakers = speakerListDataWithFn(DayType.DAY3, [1, 2]);
    const day3PanelSpeakers = speakerListDataWithFn(
      DayType.DAY3,
      [3, 4, 5, 6, 7]
    );
    const day3PitchSpeakers = speakerListDataWithFn(
      DayType.DAY3,
      [8, 9, 10, 11, 12, 13]
    );

    return {
      day1: day1Speakers,
      day2: day2Speakers,
      day3: {
        general: day3GeneralSpeakers,
        panel: day3PanelSpeakers,
        pitch: day3PitchSpeakers,
      },
    };
  }, [speakerListDataWithFn]);

  return (
    <>
      <Head>
        <title>{t('Speakers.title')}</title>
      </Head>
      <DoubleColumnsLayout
        sectionId={SECTION_ID.section4}
        scrollRef={scrollRef}
        onScrollY={onScroll}
        title={t('Speakers.title')}
        subtitle={<SpeakersSubtitle activeId={activeId} scrollTo={scrollTo} />}
        image={{
          url: '/images/speakers/main.png',
          height: 479,
          width: 543,
        }}
      >
        <Flex display="inline-flex" direction="column">
          <Box ref={day1Ref}>
            <DateTitle date="11/17" weekday="[ THU ]" />
            <SpeakerProfileListContainer>
              <SpeakerProfileList speakers={speakerList.day1} />
            </SpeakerProfileListContainer>
          </Box>
          <Box ref={day2Ref}>
            <DateTitle date="11/18" weekday="[ FRI ]" />
            <SpeakerProfileListContainer>
              <SpeakerProfileList speakers={speakerList.day2} />
            </SpeakerProfileListContainer>
          </Box>
          <Box ref={day3Ref}>
            <DateTitle date="11/19" weekday="[ SAT ]" />

            <SpeakerProfileListContainer>
              <SpeakerProfileList speakers={speakerList.day3.general} />

              <EventName>Panel Discussion：Web3 Marketing NEXT</EventName>
              <SpeakerProfileList speakers={speakerList.day3.panel} />

              <EventName>Startup Pitch</EventName>
              <SpeakerProfileList speakers={speakerList.day3.pitch} />
            </SpeakerProfileListContainer>
          </Box>
        </Flex>
      </DoubleColumnsLayout>
      <SpeakerModal
        speaker={selectedSpeaker}
        isOpen={speakerDetailModal.isOpen}
        onClose={speakerDetailModal.onClose}
      />
    </>
  );
}

export default Speakers;
