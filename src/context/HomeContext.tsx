import { SCROLL_TO_SECTION_ID } from '@const/index';
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { scroller } from 'react-scroll';

type HomeContextValue = {
  activeIndicator: string;
  setActiveIndicator: Dispatch<SetStateAction<string>>;
  isIndicatorEnable: boolean;
  setIndicatorEnable: Dispatch<SetStateAction<boolean>>;
  scrollToSection: (id: string, config?: Record<string, unknown>) => void;
};

type HomeProviderProps = {
  children: ReactNode;
};

const HomeContext = createContext<HomeContextValue | null>(null);

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
};

export const HomeProvider = (props: HomeProviderProps) => {
  const { children } = props;
  const [activeIndicator, setActiveIndicator] = useState<string>('');
  const [isIndicatorEnable, setIndicatorEnable] = useState<boolean>(true);

  const scrollToSection = useCallback((id: string, config = {}) => {
    scroller.scrollTo(id, {
      smooth: true,
      // Scrolls to section's top and 50% section's height to scroll to the 50% of the animation
      offset: Math.floor(window.innerHeight / 2),
      duration: 1000, // 1s
      ...config,
    });
  }, []);

  useEffect(() => {
    const sectionId = sessionStorage.getItem(SCROLL_TO_SECTION_ID);
    if (sectionId !== null) {
      // TODO: We should call it after all gsap animation loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 1000);
      sessionStorage.clear();
    }
  }, [scrollToSection]);

  const value = {
    activeIndicator,
    setActiveIndicator,
    isIndicatorEnable,
    setIndicatorEnable,
    scrollToSection,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
