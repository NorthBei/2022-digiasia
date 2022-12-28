import { As, Box, Icon } from '@chakra-ui/react';
import { useHomeContext } from '@context/HomeContext';
import { Animation, presetAnimation } from '@libs/animation';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

export type IndicatorsItemObjType = {
  playAnim: () => void;
};

type IndicatorsItemProps = {
  id: string;
  icon: As;
  text: string;
};

const IndicatorItem = forwardRef<IndicatorsItemObjType, IndicatorsItemProps>(
  (props, ref) => {
    const { activeIndicator, scrollToSection, isIndicatorEnable } =
      useHomeContext();
    const itemText = useRef(null);
    const isAnimRunning = useRef(false);
    const { id, icon, text } = props;

    const fadeIn = useCallback(() => {
      if (isAnimRunning.current) return;
      const anim = new Animation({
        yoyo: true,
        repeat: 1,
        repeatDelay: 3,
        onComplete() {
          isAnimRunning.current = false;
        },
      });

      anim.add(itemText.current, {
        ...presetAnimation.FADE_IN,
        x: [-50, 0],
      });

      anim.play();
      isAnimRunning.current = true;
    }, []);

    useImperativeHandle(
      ref,
      () => {
        return { playAnim: fadeIn };
      },
      [fadeIn]
    );

    return (
      <Box
        as="li"
        opacity={id === activeIndicator ? '1' : '0.5'}
        position="relative"
        boxSize="33px"
      >
        <Icon
          as={icon}
          boxSize="100%"
          cursor="pointer"
          onMouseEnter={fadeIn}
          onClick={() => {
            fadeIn();
            if (isIndicatorEnable) scrollToSection(id);
          }}
        />

        <Box
          ref={itemText}
          // hide under the section-icon-00x image when fade out
          position="absolute"
          top="50%"
          left="50px"
          transform="translateY(-50%)"
          whiteSpace="nowrap"
          zIndex="-1"
          color="white"
          fontSize={{ base: '12px', md: '24px' }}
          lineHeight={{ base: '16px', md: '31px' }}
          cursor="pointer"
          letterSpacing="0.05em"
          textTransform="uppercase"
          onClick={() => {
            if (isIndicatorEnable) scrollToSection(id);
          }}
        >
          {text}
        </Box>
      </Box>
    );
  }
);

IndicatorItem.displayName = 'IndicatorItem';

export default IndicatorItem;
