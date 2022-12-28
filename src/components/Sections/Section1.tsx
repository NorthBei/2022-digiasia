import { Center } from '@chakra-ui/react';
import SectionContainer from '@components/Container/SectionContainer';
import OutlinkModal, {
  OutlinkModalObjType,
} from '@components/Modal/OutlinkModal';
import { SECTION_ID } from '@const/index';
import {
  Animation,
  presetAnimation,
  ScrollTriggerAnimation,
} from '@libs/animation';
import { useCallback, useEffect, useRef } from 'react';

function Section1() {
  const section1 = useRef(null);
  const mainImage = useRef(null);
  const mainImageSquare = useRef(null);
  const mainImageRing = useRef(null);
  const mainImageLight = useRef(null);
  const outlinkModal = useRef<OutlinkModalObjType>(null);
  const fadeAnim = useRef<Animation | null>(null);

  useEffect(() => {
    const anim = new ScrollTriggerAnimation({
      id: 'section1',
      trigger: section1.current,
    });

    anim.add(mainImageSquare.current, {
      yPercent: [66, 0],
      ...presetAnimation.FADE_IN,
    });

    anim.addWithPrevious(mainImageRing.current, {
      yPercent: [23, 0],
      ...presetAnimation.FADE_IN,
    });

    anim.addWithPrevious(
      mainImageLight.current,
      {
        scale: [0.5, 1],
        yPercent: [13, 0],
        ...presetAnimation.FADE_IN,
      },
      {
        transformOrigin: 'center',
      }
    );

    anim.add(mainImage.current, {
      yPercent: [0, -30],
      ...presetAnimation.FADE_OUT,
    });

    return () => anim.kill();
  }, []);

  useEffect(() => {
    const anim = new Animation({ paused: true });

    anim.add(mainImage.current, {
      ...presetAnimation.FADE_OUT,
    });

    fadeAnim.current = anim;

    outlinkModal.current?.onCloseCallback(() => {
      anim.reverse();
    });
  }, []);

  const onMainSVGImageClick = useCallback(() => {
    fadeAnim.current?.play();
    outlinkModal.current?.zoomIn();
  }, []);

  return (
    <>
      <SectionContainer id={SECTION_ID.section1} ref={section1}>
        <Center
          h="100%"
          w="100%"
          maxH={{ base: '41vh', md: '74vh' }}
          maxW={{ base: '100vw', md: '55vw' }}
          ref={mainImage}
          cursor="pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="100%"
            width="100%"
            viewBox="0 0 1063 806"
            className="svgOverflowVisible"
            onClick={onMainSVGImageClick}
          >
            <g id="square" ref={mainImageSquare}>
              <path
                id="Vector"
                fill="url(#paint0_linear_576_1883)"
                d="M798.122 136H265v533.122h533.122V136Z"
              />
              <path
                id="Vector_2"
                fill="url(#paint1_radial_576_1883)"
                d="M706.896 234.391h-351.38v351.38h351.38v-351.38Z"
              />
              <path
                id="Vector_3"
                fill="url(#paint2_radial_576_1883)"
                d="M606.5 323.912H447.774a.774.774 0 0 0-.774.774v158.726c0 .428.346.774.774.774H606.5c.428 0 .774-.346.774-.774V324.686a.774.774 0 0 0-.774-.774Z"
              />
              <path
                id="Vector_4"
                fill="url(#paint3_radial_576_1883)"
                d="M569.735 363.832h-87.479c-.23 0-.416.187-.416.417v87.478c0 .23.186.416.416.416h87.479c.23 0 .416-.186.416-.416v-87.478c0-.23-.186-.417-.416-.417Z"
              />
              <path
                id="Vector_5"
                fill="url(#paint4_linear_576_1883)"
                d="M447.773 484.186 265 669.123h533.122l-190.848-185.71-159.501.773Z"
              />
              <path
                id="Vector_6"
                fill="url(#paint5_linear_576_1883)"
                d="M447 324.686 265 136h533.122L607.274 324.686H447Z"
              />
            </g>
            <g id="ring" ref={mainImageRing}>
              <g id="Group">
                <path
                  id="Vector_7"
                  fill="url(#paint6_linear_576_1883)"
                  d="M804.638 179.287c11.989-4.212 24.128-8.03 36.485-11.157 12.357-3.094 24.915-5.694 37.791-6.286 6.43-.231 12.96-.066 19.372 1.596 3.182.856 6.346 2.123 9.126 4.114 2.813 1.942 5.057 4.772 6.312 7.981 1.273 3.193 1.574 6.632 1.34 9.923-.251 3.292-.955 6.501-1.959 9.561-1.993 6.155-4.956 11.849-8.188 17.345-6.563 10.911-14.383 20.949-22.587 30.592-8.221 9.627-16.928 18.843-25.869 27.795-8.908 8.985-18.201 17.592-27.611 26.05-9.41 8.459-19.021 16.703-28.732 24.816-19.507 16.144-39.532 31.629-59.859 46.703-10.164 7.537-20.428 14.959-30.742 22.282-10.297 7.356-20.645 14.646-31.06 21.837-10.398 7.208-20.929 14.251-31.428 21.327-10.498 7.076-21.064 14.054-31.679 20.966-21.265 13.757-42.596 27.416-64.229 40.63-43.183 26.527-87.286 51.673-132.477 74.843-45.192 23.104-91.304 44.744-139.292 61.991-12.005 4.278-24.111 8.293-36.401 11.799-12.29 3.488-24.747 6.549-37.506 8.392-6.379.905-12.809 1.597-19.322 1.613-6.497 0-13.144-.477-19.557-2.715-3.181-1.136-6.329-2.781-8.874-5.266-2.562-2.452-4.337-5.694-5.107-9.068-.77-3.373-.737-6.829-.151-10.071s1.44-6.401 2.646-9.396c2.31-6.04 5.408-11.635 8.824-17 3.415-5.364 7.149-10.499 11.067-15.468 7.836-9.957 16.309-19.353 25.099-28.437 8.757-9.117 17.95-17.806 27.276-26.33 9.343-8.508 18.87-16.818 28.548-24.947l.318.362c-18.87 16.768-37.154 34.196-54.333 52.577-8.573 9.199-16.811 18.695-24.363 28.683-3.784 4.987-7.35 10.105-10.582 15.403-3.214 5.299-6.178 10.763-8.271 16.473-1.105 2.831-1.842 5.76-2.344 8.673-.486 2.912-.436 5.858.201 8.573.669 2.716 2.042 5.151 4.068 7.06 2.01 1.909 4.622 3.291 7.418 4.246 5.626 1.909 11.888 2.336 18.066 2.254 6.212-.082 12.458-.806 18.653-1.777 12.407-1.991 24.697-5.003 36.836-8.491 12.14-3.489 24.145-7.505 36.067-11.783 23.809-8.59 47.167-18.431 70.307-28.7 23.14-10.285 45.995-21.245 68.599-32.649 45.208-22.858 89.563-47.345 133.197-73.066 21.767-12.934 43.417-26.066 64.681-39.807 21.298-13.675 42.396-27.663 63.057-42.243 10.348-7.258 20.662-14.597 30.859-22.068 10.18-7.504 20.277-15.107 30.273-22.808 20.026-15.403 39.683-31.267 58.888-47.608 19.289-16.243 37.992-33.176 55.907-50.801 8.942-8.837 17.632-17.92 25.836-27.383 8.188-9.462 15.957-19.319 22.437-29.901 3.181-5.299 6.028-10.812 8.037-16.538 1.004-2.864 1.691-5.809 1.959-8.739.268-2.929.033-5.874-.971-8.524-.988-2.649-2.746-4.986-5.124-6.698-2.344-1.744-5.14-2.962-8.07-3.784-5.911-1.646-12.24-1.942-18.502-1.811-12.575.412-25.133 2.6-37.49 5.365-12.373 2.798-24.596 6.286-36.719 10.022l-.151-.527Z"
                />
              </g>
              <path
                id="Vector_8"
                fill="url(#paint7_linear_576_1883)"
                d="M195.765 572.08c5.484 0 9.929-4.369 9.929-9.758 0-5.39-4.445-9.759-9.929-9.759s-9.929 4.369-9.929 9.759c0 5.389 4.445 9.758 9.929 9.758Z"
              />
              <path
                id="Vector_9"
                fill="url(#paint8_linear_576_1883)"
                d="M906.941 179.517c5.483 0 9.929-4.369 9.929-9.758 0-5.39-4.446-9.759-9.929-9.759-5.484 0-9.929 4.369-9.929 9.759 0 5.389 4.445 9.758 9.929 9.758Z"
              />
              <g id="TEXT">
                <text
                  xmlSpace="preserve"
                  id="EXPERIENCE HALL"
                  fill="#fff"
                  fontFamily="Chakra Petch"
                  fontSize="20"
                  fontWeight="bold"
                  letterSpacing=".05em"
                  className="svgWhiteSpacePre"
                >
                  <tspan x="77.7168" y="473.84">
                    EXPERIENCE
                  </tspan>
                  <tspan x="116.842" y="499.84">
                    HALL
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  id="é«é©å¤§å»³"
                  fill="#fff"
                  fontFamily="Noto Sans"
                  fontSize="32"
                  fontWeight="bold"
                  letterSpacing=".1em"
                  className="svgWhiteSpacePre"
                >
                  <tspan x="74.2" y="418.416">
                    體驗大廳
                  </tspan>
                </text>
                <path
                  id="Vector_10"
                  stroke="url(#paint9_linear_576_1883)"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M58 441h170"
                />
              </g>
            </g>
            <g id="light" ref={mainImageLight}>
              <path
                id="Vector 6"
                fill="url(#paint10_linear_576_1883)"
                d="M525.758 410.386-38.547 160.428l-12.5329 91.124L525.758 410.386Z"
              />
              <path
                id="Vector 9"
                fill="url(#paint11_linear_576_1883)"
                d="m515.758 403.658 591.382 4.765 1.93-44.333-593.312 39.568Z"
              />
              <path
                id="Vector 10"
                fill="url(#paint12_linear_576_1883)"
                d="m516.306 422 241.461 329.858 25.63-18.058L516.306 422Z"
              />
              <path
                id="Vector 7"
                fill="url(#paint13_linear_576_1883)"
                d="M526.258 397.353 128.94 605.466l31.748 45.223 365.57-253.336Z"
              />
              <path
                id="Vector 11"
                fill="url(#paint14_linear_576_1883)"
                d="m539.606 421.853 341.82 106.5v-36.501l-341.82-69.999Z"
              />
              <path
                id="Vector 8"
                fill="url(#paint15_linear_576_1883)"
                d="M515.999 420.853 992.547-10.0124l-29.571-30.4974L515.999 420.853Z"
              />
              <g id="Ellipse 3" filter="url(#filter0_f_576_1883)">
                <path
                  fill="#D9D9D9"
                  d="M970.807 452.71c-129.505-14.543-174.828-21.054-391.18-38.417-216.352-17.364-176.861-13.94-392.301-24.462 161.44 21.522 174.829 21.053 391.181 38.417 216.352 17.364 246.592 19.791 392.3 24.462Z"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_576_1883"
                x1="-171.756"
                x2="643.007"
                y1="1279.52"
                y2="263.576"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".51" stopColor="#616370" stopOpacity="0" />
                <stop offset=".65" stopColor="#666" />
                <stop offset=".81" stopColor="#F1FFFE" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_576_1883"
                x1="1067.36"
                x2="214.386"
                y1="241.394"
                y2="884.871"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".51" stopColor="#616370" stopOpacity="0" />
                <stop offset=".65" stopColor="#666" />
                <stop offset=".81" stopColor="#F1FFFE" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_576_1883"
                x1="-52.3735"
                x2="947.722"
                y1="497.718"
                y2="-49.6703"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".51" stopColor="#616370" stopOpacity="0" />
                <stop offset=".65" stopColor="#666" />
                <stop offset=".81" stopColor="#F1FFFE" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_576_1883"
                x1="680.56"
                x2="395.349"
                y1="70.3889"
                y2="747.971"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#666" />
                <stop offset=".33" stopColor="#F1FFFE" />
                <stop offset=".61" stopColor="#fff" />
                <stop offset=".8" stopColor="#999" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_576_1883"
                x1="105.762"
                x2="204.109"
                y1="584.5"
                y2="559.412"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".27" />
                <stop offset=".39" stopColor="#fff" />
                <stop offset=".51" stopColor="#616370" />
                <stop offset=".65" stopColor="#666" />
                <stop offset=".81" stopColor="#F1FFFE" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_576_1883"
                x1="816.914"
                x2="915.274"
                y1="191.922"
                y2="166.854"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".27" />
                <stop offset=".39" stopColor="#fff" />
                <stop offset=".51" stopColor="#616370" />
                <stop offset=".65" stopColor="#666" />
                <stop offset=".81" stopColor="#F1FFFE" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_576_1883"
                x1="60.8094"
                x2="233.077"
                y1="441.227"
                y2="441.227"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#666" />
                <stop offset=".33" stopColor="#F1FFFE" />
                <stop offset=".61" stopColor="#fff" />
                <stop offset=".8" stopColor="#999" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_576_1883"
                x1="47.5569"
                x2="486.077"
                y1="228.257"
                y2="417.535"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".0678" stopColor="#00FFB3" stopOpacity="0" />
                <stop offset=".2572" stopColor="#00FFB3" stopOpacity=".37" />
                <stop offset=".4635" stopColor="#F1FFFE" />
                <stop offset=".724" stopColor="#F1FFFE" stopOpacity=".82" />
                <stop offset="1" stopColor="#02FFB4" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_576_1883"
                x1="1074.94"
                x2="549.492"
                y1="393.92"
                y2="357.96"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".0678" stopColor="#00FFB3" stopOpacity="0" />
                <stop offset=".2572" stopColor="#00FFB3" stopOpacity=".37" />
                <stop offset=".4635" stopColor="#F1FFFE" />
                <stop offset=".724" stopColor="#F1FFFE" stopOpacity=".82" />
                <stop offset="1" stopColor="#02FFB4" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_576_1883"
                x1="752.597"
                x2="550.018"
                y1="727.751"
                y2="424.868"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".0678" stopColor="#00FFB3" stopOpacity="0" />
                <stop offset=".2572" stopColor="#00FFB3" stopOpacity=".37" />
                <stop offset=".4635" stopColor="#F1FFFE" />
                <stop offset=".724" stopColor="#F1FFFE" stopOpacity=".82" />
                <stop offset="1" stopColor="#02FFB4" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_576_1883"
                x1="193.549"
                x2="494.619"
                y1="576.153"
                y2="547.845"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F1FFFE" stopOpacity="0" />
                <stop offset=".4896" stopColor="#F1FFFE" stopOpacity=".82" />
                <stop offset=".8021" stopColor="#F1FFFE" />
                <stop offset="1" stopColor="#F1FFFE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_576_1883"
                x1="872.426"
                x2="595.971"
                y1="505.853"
                y2="352.832"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".0525" stopColor="#F1FFFE" stopOpacity="0" />
                <stop offset=".3824" stopColor="#F1FFFE" stopOpacity=".82" />
                <stop offset=".6785" stopColor="#F1FFFE" />
                <stop offset=".9427" stopColor="#F1FFFE" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_576_1883"
                x1="981.401"
                x2="485.977"
                y1="-40.9039"
                y2="320.723"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".1139" stopColor="#F1FFFE" stopOpacity="0" />
                <stop offset=".3622" stopColor="#F1FFFE" stopOpacity=".82" />
                <stop offset=".8021" stopColor="#F1FFFE" />
                <stop offset="1" stopColor="#F1FFFE" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_576_1883"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="translate(530.631 414.684) scale(233.784)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".37" stopColor="#F1FFFE" />
                <stop offset=".63" stopColor="#B3B3B3" stopOpacity="0" />
                <stop offset=".67" stopColor="#999" />
                <stop offset="1" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_576_1883"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(125.691 0 0 125.692 526.383 404.486)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".13" stopColor="#F1FFFE" />
                <stop offset=".33" stopColor="#B3B3B3" stopOpacity="0" />
                <stop offset=".45" stopColor="#999" />
                <stop offset="1" />
              </radialGradient>
              <radialGradient
                id="paint3_radial_576_1883"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="matrix(69.2643 0 0 69.2642 525.569 408.236)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".15" stopColor="#F1FFFE" />
                <stop offset=".38" stopColor="#B3B3B3" stopOpacity="0" />
                <stop offset=".47" stopColor="#999" />
                <stop offset="1" />
              </radialGradient>
              <filter
                id="filter0_f_576_1883"
                width="823.479"
                height="102.879"
                x="167.328"
                y="369.831"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  result="effect1_foregroundBlur_576_1883"
                  stdDeviation="10"
                />
              </filter>
            </defs>
          </svg>
        </Center>
      </SectionContainer>
      <OutlinkModal ref={outlinkModal} />
    </>
  );
}

export default Section1;
