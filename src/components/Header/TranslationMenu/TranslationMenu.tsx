import { Box, Icon, SystemProps, VStack } from '@chakra-ui/react';
import EarthIcon from '@images/translation-menu/icon-earth.svg';
import EnglishIcon from '@images/translation-menu/icon-en-us.svg';
import ChineseIcon from '@images/translation-menu/icon-zh-tw.svg';
import { Animation, presetAnimation } from '@libs/animation';
import {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { AnimElement } from '../../../types/animation';
import LocaleItem from './LocaleItem';

export enum Locale {
  EN = 'en',
  ZH = 'zh',
}

const TranslationMenu = forwardRef<HTMLDivElement, AnimElement & SystemProps>(
  (props, ref) => {
    const headerI18nTC = useRef<HTMLDivElement>(null);
    const headerI18nEN = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [menuAmin, setMenuAmin] = useState<Animation | null>(null);
    const { canPlayAnim, ...sysProps } = props;

    useLayoutEffect(() => {
      const anim = new Animation({
        onStart() {
          [headerI18nTC.current, headerI18nEN.current].forEach((item) => {
            if (item) item.style.display = 'block';
          });
        },
        onReverseComplete() {
          [headerI18nTC.current, headerI18nEN.current].forEach((item) => {
            if (item) item.style.display = 'none';
          });
        },
      });

      anim.add(headerI18nTC.current, {
        y: [-25, 0],
        ...presetAnimation.FADE_IN,
      });

      anim.addWithPrevious(headerI18nEN.current, {
        y: [-65, 0],
        ...presetAnimation.FADE_IN,
      });

      setMenuAmin(anim);
      anim.reverse();

      return () => anim.kill();
    }, [setMenuAmin]);

    const onI18nMenuToggle = useCallback(() => {
      if (!menuAmin) return;
      const isOpen = !isMenuOpen;
      if (isOpen) menuAmin.play();
      else menuAmin.reverse();
      setMenuOpen(isOpen);
    }, [isMenuOpen, menuAmin]);

    return (
      <Box
        position="relative"
        ref={ref}
        className={canPlayAnim ? 'hideAfterLoaded' : ''}
      >
        <Box cursor="pointer" {...sysProps} onClick={onI18nMenuToggle}>
          <Icon as={EarthIcon} boxSize="100%" />
        </Box>
        <VStack
          position="absolute"
          top="160%"
          left="50%"
          transform="translateX(-50%)"
          alignItems="center"
          spacing="16px"
        >
          <LocaleItem
            icon={ChineseIcon}
            locale={Locale.ZH}
            ref={headerI18nTC}
            onClick={onI18nMenuToggle}
          />
          <LocaleItem
            icon={EnglishIcon}
            locale={Locale.EN}
            ref={headerI18nEN}
            onClick={onI18nMenuToggle}
          />
        </VStack>
      </Box>
    );
  }
);

TranslationMenu.displayName = 'TranslationMenu';

export default TranslationMenu;
