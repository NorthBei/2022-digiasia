import { Box } from '@chakra-ui/react';
import StarryBackground from '@components/Background/StarryBackground';
import Contacts from '@components/Contacts';
import Copyright from '@components/Copyright';
import Footer from '@components/Footer';
import Header from '@components/Header';
import IndicatorList, { IndicatorsObjType } from '@components/Indicators';
import Section0 from '@components/Sections/Section0';
import Section1 from '@components/Sections/Section1';
import Section2 from '@components/Sections/Section2';
import Section3 from '@components/Sections/Section3';
import Section4 from '@components/Sections/Section4';
import Section5 from '@components/Sections/Section5';
import { BASIC_PADDING } from '@const/index';
import { HomeProvider } from '@context/HomeContext';
import { Animation, presetAnimation } from '@libs/animation';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { NextPage } from 'next';
import { useCallback, useLayoutEffect, useRef } from 'react';
// import styles from '@styles/Home.module.css';

const Home: NextPage = () => {
  const headerTitle = useRef<HTMLDivElement | null>(null);
  const headerMenu = useRef<HTMLDivElement | null>(null);
  const headerTranslation = useRef<HTMLDivElement | null>(null);
  const indicators = useRef<IndicatorsObjType>(null);
  const foldDivider = useRef(null);
  const copyright = useRef(null);
  const contacts = useRef(null);
  const foldAmin = useRef<gsap.core.Timeline | null>(null);

  const onHeaderLoad = useCallback(
    (
      title: HTMLDivElement | null,
      menu: HTMLDivElement | null,
      translation: HTMLDivElement | null
    ) => {
      headerTitle.current = title;
      headerMenu.current = menu;
      headerTranslation.current = translation;
    },
    []
  );

  useLayoutEffect(() => {
    const anim = new Animation({
      delay: 1,
      ease: 'slow',
      duration: 1,
    });

    anim.add(headerTitle.current, {
      ...presetAnimation.FADE_IN,
      ...presetAnimation.TOP_SLIDE,
    });

    anim.addWithPrevious(copyright.current, {
      ...presetAnimation.FADE_IN,
      ...presetAnimation.BOTTOM_SLIDE,
    });

    foldAmin.current = anim.self;
    return () => anim.kill();
  }, []);

  useLayoutEffect(() => {
    const fadInAmin = new Animation({ paused: true });
    const indicatorList = indicators?.current?.getRef();
    if (!indicatorList) {
      console.error(`Error: IndicatorList ${indicatorList}`);
      return;
    }

    fadInAmin.add([headerMenu.current, indicatorList.current], {
      ...presetAnimation.FADE_IN,
      ...presetAnimation.LEFT_SLIDE,
    });

    fadInAmin.addWithPrevious([headerTranslation.current, contacts.current], {
      ...presetAnimation.FADE_IN,
      ...presetAnimation.RIGHT_SLIDE,
    });

    fadInAmin.self.to(copyright.current, {
      opacity: 0,
      yPercent: 100,
    });

    const scrollDetector = ScrollTrigger.create({
      id: 'foldDivider',
      trigger: foldDivider.current,
      start: 'top top',
      endTrigger: 'body',
      end: 'bottom top',
      onEnter() {
        fadInAmin.play();
        indicators?.current?.playItemsAnim();
      },
      onLeaveBack() {
        fadInAmin.reverse();
      },
    });

    return () => {
      fadInAmin.kill();
      scrollDetector.kill();
    };
  }, []);

  const onFoldAnimCompleted = useCallback(() => {
    foldAmin.current?.play();
  }, [foldAmin]);

  return (
    <>
      <HomeProvider>
        <Box as="main" minH="100vh" w="100%">
          <StarryBackground />
          <Header onLoad={onHeaderLoad} position="fixed" top="0" canPlayAnim />

          <Section0 onFoldAnimCompleted={onFoldAnimCompleted} />
          <Box ref={foldDivider}></Box>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Footer />

          <IndicatorList
            position="fixed"
            bottom={{ base: BASIC_PADDING.MOBILE, md: '50%' }}
            left={{ base: BASIC_PADDING.MOBILE, md: BASIC_PADDING.PC }}
            transform={{ base: '0', md: 'translateY(50%)' }}
            ref={indicators}
          />

          <Contacts
            position="fixed"
            right={{
              base: BASIC_PADDING.MOBILE,
              md: BASIC_PADDING.PC,
            }}
            bottom={{
              base: BASIC_PADDING.MOBILE,
              md: BASIC_PADDING.PC,
            }}
            ref={contacts}
            canPlayAnim
          />
          <Copyright
            position="fixed"
            bottom={{
              base: BASIC_PADDING.MOBILE,
              md: BASIC_PADDING.PC,
            }}
            ref={copyright}
          />
        </Box>
      </HomeProvider>
    </>
  );
};

export default Home;
