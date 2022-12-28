import { Box, SystemProps, VStack } from '@chakra-ui/react';
import { SECTION_ID_ARRAY } from '@const/index';
import Section1Icon from '@images/indicators/section-icon-001.svg';
import Section2Icon from '@images/indicators/section-icon-002.svg';
import Section3Icon from '@images/indicators/section-icon-003.svg';
import Section4Icon from '@images/indicators/section-icon-004.svg';
import Section5Icon from '@images/indicators/section-icon-005.svg';
import { useTranslation } from 'next-export-i18n';
import {
  forwardRef,
  MutableRefObject,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

import IndicatorItem, { IndicatorsItemObjType } from './IndicatorItem';

const sectionIconList = [
  Section1Icon,
  Section2Icon,
  Section3Icon,
  Section4Icon,
  Section5Icon,
];

export type IndicatorsObjType = {
  getRef: () => MutableRefObject<HTMLDivElement | null>;
  playItemsAnim: () => void;
};

const Indicators = forwardRef<IndicatorsObjType, SystemProps>((props, ref) => {
  const { ...sysProps } = props;
  const { t } = useTranslation();
  const indicatorsRefs = useRef<HTMLDivElement | null>(null);
  const navList = useMemo(() => {
    return [
      t('Indicators.Experience_Hall'),
      t('Indicators.About'),
      t('Indicators.Agenda'),
      t('Indicators.Speaker'),
      t('Indicators.Registration'),
    ];
  }, [t]);
  const itemRefs = useRef<(IndicatorsItemObjType | null)[]>(
    new Array(navList.length).fill(null)
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        getRef() {
          return indicatorsRefs;
        },
        playItemsAnim() {
          itemRefs.current.forEach((item) => item?.playAnim());
        },
      };
    },
    []
  );

  return (
    <Box ref={indicatorsRefs} className="hideAfterLoaded" {...sysProps}>
      <VStack
        id="indicators"
        as="ul"
        listStyleType="none"
        alignItems="flex-start"
        spacing={{ base: '10px', md: '38px' }}
      >
        {navList.map((navItem: string, index: number) => {
          const order = index + 1;

          return (
            <IndicatorItem
              key={SECTION_ID_ARRAY[order]}
              id={SECTION_ID_ARRAY[order]}
              icon={sectionIconList[index]}
              text={navItem}
              ref={(el) => (itemRefs.current[index] = el)}
            />
          );
        })}
      </VStack>
    </Box>
  );
});

Indicators.displayName = 'Indicators';

export default Indicators;
