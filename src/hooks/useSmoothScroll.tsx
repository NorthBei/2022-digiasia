import { SECTION_ID } from '@const/index';
import { useCallback } from 'react';
import { scroller } from 'react-scroll';

function useSmoothScroll() {
  const scrollToTop = useCallback(
    (anchor: SECTION_ID, callbackFn?: () => void) => {
      scroller.scrollTo(anchor, {
        smooth: true,
      });
      if (callbackFn) callbackFn();
    },
    []
  );

  return scrollToTop;
}

export default useSmoothScroll;
