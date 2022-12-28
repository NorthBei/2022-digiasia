import gsap from 'gsap';

export type AnimVarsObjType = {
  [k: string]: [number | string, number | string];
};

export const presetAnimation: { [k: string]: AnimVarsObjType } = {
  FADE_IN: { autoAlpha: [0, 1] },
  FADE_OUT: { autoAlpha: [1, 0] },
  TOP_SLIDE: { yPercent: [-100, 0] },
  BOTTOM_SLIDE: { yPercent: [100, 0] },
  LEFT_SLIDE: { xPercent: [-100, 0] },
  RIGHT_SLIDE: { xPercent: [100, 0] },
};

export class Animation {
  self: gsap.core.Timeline;

  constructor(timelineVars?: gsap.TimelineVars) {
    this.self = gsap.timeline({
      ease: 'cubic-bezier(0.25,0.46,0.45,0.94)',
      duration: 0.3,
      ...(timelineVars ? timelineVars : {}),
    });
  }

  addWithPrevious(
    element: gsap.DOMTarget,
    aminVarsObj: AnimVarsObjType,
    configVar?: Record<string, number | string>,
    position = '<'
  ) {
    return this.fromTo(element, aminVarsObj, configVar, position);
  }

  add(
    element: gsap.DOMTarget,
    aminVarsObj: AnimVarsObjType,
    configVar?: Record<string, number | string>,
    position = '>'
  ) {
    return this.fromTo(element, aminVarsObj, configVar, position);
  }

  fromTo(
    element: gsap.DOMTarget,
    aminVarsObj: AnimVarsObjType,
    configVar?: Record<string, number | string>,
    position = '>'
  ) {
    const fromVars: gsap.TweenVars = {};
    const toVars: gsap.TweenVars = {};

    for (const varName in aminVarsObj) {
      const [from, to] = aminVarsObj[varName];
      fromVars[varName] = from;
      toVars[varName] = to;
    }

    if (configVar) {
      for (const varName in configVar) {
        fromVars[varName] = configVar[varName];
        toVars[varName] = configVar[varName];
      }
    }
    return this.self.fromTo(element, fromVars, toVars, position);
  }

  addLabel(label: string, position?: gsap.Position) {
    this.self.addLabel(label, position);
  }

  seek(time: number | string, suppressEvents?: boolean) {
    this.self.seek(time, suppressEvents);
    return this.self;
  }

  play(from?: string) {
    this.self.play(from);
  }

  reverse() {
    this.self.reverse();
  }

  kill() {
    this.self.kill();
  }
}

export class ScrollTriggerAnimation extends Animation {
  constructor(
    scrollTrigger: ScrollTrigger.Vars,
    timelineVars?: gsap.TimelineVars
  ) {
    super({
      ...timelineVars,
      scrollTrigger: {
        toggleActions: 'play play reverse reverse',
        start: 'top top',
        end: 'bottom top',
        // markers: true,
        pin: true,
        scrub: true,
        ...scrollTrigger,
      },
    });
  }

  kill() {
    super.kill();
    this.self.scrollTrigger?.kill();
  }
}
