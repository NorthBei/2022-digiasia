import { RefObject, useCallback, useMemo, useRef } from 'react';
import { reverse } from 'src/utils';

export type Target = {
  id: string;
  element: RefObject<HTMLElement | null>;
};

function useScrollSpy(
  scrollRef: HTMLElement | undefined,
  targets: Target[],
  onActiveElementChange: (id: Target['id']) => void
) {
  const activeTargetId = useRef<Target['id']>(targets[0] ? targets[0].id : '');

  const targetList = useMemo(() => {
    return reverse(targets);
  }, [targets]);

  const scrollTo = useCallback(
    (id: Target['id']) => {
      if (!scrollRef) {
        console.warn(
          `scrollRef is ${scrollRef}, cannot scroll to target element`
        );
        return;
      }
      if (activeTargetId.current === id) return;
      const beActiveTarget = targets.find((target) => target.id === id);

      if (!beActiveTarget) {
        console.warn(
          `the element is ${beActiveTarget}, cannot scroll to target element`
        );
        return;
      }
      if (beActiveTarget.element) {
        scrollRef?.scrollTo({
          top: beActiveTarget.element.current?.offsetTop || 0,
        });
        activeTargetId.current = beActiveTarget.id;
        onActiveElementChange(beActiveTarget.id);
        return;
      }
    },
    [scrollRef, targets, onActiveElementChange]
  );

  const onScroll = useCallback(
    (container: HTMLElement) => {
      for (const target of targetList) {
        if (!target.element) {
          console.warn(
            `the element is ${target.element}, cannot detect scroll below or above target element`
          );
          break;
        }
        if (container.scrollTop >= (target.element.current?.offsetTop || 0)) {
          if (activeTargetId.current !== target.id) {
            activeTargetId.current = target.id;
            onActiveElementChange(target.id);
          }
          break;
        }
      }
    },
    [targetList, onActiveElementChange]
  );

  return { scrollTo, onScroll };
}

export default useScrollSpy;
