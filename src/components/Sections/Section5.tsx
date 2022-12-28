import { Center } from '@chakra-ui/react';
import SectionContainer from '@components/Container/SectionContainer';
import UnivLink, { LinkType } from '@components/UnivLink';
import { PAGE_PATH, SECTION_ID } from '@const/index';
import { presetAnimation, ScrollTriggerAnimation } from '@libs/animation';
import { useEffect, useRef } from 'react';

function Section5() {
  const section5 = useRef(null);
  const mainImage = useRef(null);
  const mainImageLight = useRef(null);
  const mainImageCardOutSide = useRef(null);
  const mainImageMouse = useRef(null);
  const mainImageRing = useRef(null);

  useEffect(() => {
    const anim = new ScrollTriggerAnimation({
      id: 'section5',
      trigger: section5.current,
    });

    anim.add(
      mainImageLight.current,
      {
        scaleX: [0.5, 1],
        scaleY: [0.2, 1],
        ...presetAnimation.FADE_IN,
      },
      {
        transformOrigin: '80% 89%',
      }
    );

    anim.addWithPrevious(mainImageCardOutSide.current, {
      yPercent: [82, 0],
      ...presetAnimation.FADE_IN,
    });

    anim.addWithPrevious(mainImageMouse.current, {
      xPercent: [30, 0],
      yPercent: [245, 0],
      ...presetAnimation.FADE_IN,
    });

    anim.addWithPrevious(mainImageRing.current, {
      yPercent: [70, 0],
      ...presetAnimation.FADE_IN,
    });

    anim.add(mainImage.current, {
      yPercent: [0, -50],
      ...presetAnimation.FADE_OUT,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <SectionContainer id={SECTION_ID.section5} ref={section5}>
      <Center
        h="100%"
        w="100%"
        maxH={{ base: '32vh', md: '63vh' }}
        maxW={{ base: '89vw', md: '46vw' }}
        ref={mainImage}
      >
        <UnivLink
          type={LinkType.INTERNAL}
          href={PAGE_PATH.REGISTRATION}
          style={{ width: '100%', height: '100%' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            height="100%"
            width="100%"
            viewBox="0 0 845 674"
            className="svgOverflowVisible cursorPointer"
          >
            <g id="ring" ref={mainImageRing}>
              <path
                id="Vector"
                stroke="url(#paint0_linear_576_3622)"
                strokeMiterlimit="10.0003"
                strokeWidth="2.7479"
                d="M529.53 557.969c169.407-63.855 295.678-144.962 282.034-181.157-13.643-36.195-162.034-13.771-331.44 50.084-169.406 63.856-295.677 144.963-282.034 181.158 13.643 36.194 162.034 13.771 331.44-50.085Z"
              />
              <path
                id="Vector_2"
                fill="url(#paint1_linear_576_3622)"
                d="M478.419 426.92c169.41-63.847 317.816-86.26 331.456-50.068 13.64 36.192-112.633 117.305-282.057 181.153-169.424 63.848-317.816 86.26-331.456 50.068-13.64-36.205 112.647-117.305 282.057-181.153Z"
              />
              <path
                id="Vector_3"
                fill="url(#paint2_linear_576_3622)"
                d="m284.309 413.1-24.546 11.561c-4.491 2.134-9.861.265-12.064-4.184l-18.131-36.791c-2.231-4.519-.376-9.986 4.142-12.217.042-.014.084-.042.126-.056l26.861-12.775c4.547-2.162 9.972-.237 12.134 4.309.069.14.125.279.195.419l15.829 38.018c1.841 4.491-.153 9.637-4.546 11.716Z"
              />
              <path
                id="Vector_4"
                fill="url(#paint3_linear_576_3622)"
                d="m281.73 414.159-24.546 11.562c-4.491 2.12-9.846.265-12.064-4.184l-18.13-36.791c-2.232-4.505-.391-9.958 4.1-12.19.056-.028.098-.042.153-.069l26.862-12.79c4.546-2.161 9.971-.237 12.133 4.31.07.139.126.279.195.418l15.83 38.019c1.855 4.491-.14 9.637-4.533 11.715Z"
              />
              <path
                id="Vector_5"
                fill="url(#paint4_linear_576_3622)"
                d="M253.167 391.078c3.805 0 6.89-3.085 6.89-6.89 0-3.805-3.085-6.89-6.89-6.89-3.805 0-6.89 3.085-6.89 6.89 0 3.805 3.085 6.89 6.89 6.89Z"
              />
              <path
                id="Vector_6"
                fill="url(#paint5_linear_576_3622)"
                d="M250.909 410.436c-2.846-6.667.251-14.393 6.917-17.238 6.639-2.832 14.323.223 17.21 6.833"
              />
              <path
                id="Vector_7"
                fill="url(#paint6_linear_576_3622)"
                d="m440.971 484.395-19.902 26.331c-3.64 4.811-10.46 5.816-15.341 2.273l-40.334-29.372c-4.951-3.668-5.997-10.655-2.343-15.606l.014-.014 21.701-28.939c3.737-4.895 10.739-5.844 15.634-2.106.098.084.209.153.307.237l38.52 31.994c4.561 3.779 5.328 10.488 1.744 15.202Z"
              />
              <path
                id="Vector_8"
                fill="url(#paint7_linear_576_3622)"
                d="m438.81 487.003-19.902 26.317c-3.668 4.77-10.446 5.774-15.341 2.273l-40.32-29.371c-4.965-3.654-6.011-10.642-2.357-15.607l.014-.014 21.673-28.911c3.71-4.923 10.711-5.886 15.634-2.176.126.098.237.182.349.279l38.506 31.994c4.519 3.807 5.286 10.488 1.744 15.216Z"
              />
              <path
                id="Vector_9"
                fill="url(#paint8_linear_576_3622)"
                d="M391.098 479.22c4.622 0 8.368-3.746 8.368-8.368 0-4.621-3.746-8.368-8.368-8.368-4.621 0-8.368 3.747-8.368 8.368 0 4.622 3.747 8.368 8.368 8.368Z"
              />
              <path
                id="Vector_10"
                fill="url(#paint9_linear_576_3622)"
                d="M403.51 500.392c-6.847-5.565-7.893-15.634-2.329-22.482 5.565-6.848 15.635-7.894 22.482-2.329"
              />
              <path
                id="Vector_11"
                fill="url(#paint10_linear_576_3622)"
                d="m538.794 428.608-54.127-3.292c-9.972-.613-16.136-8.619-13.946-17.768l16.15-66.274c1.757-7.225 10.223-12.552 18.842-11.953l50.208 3.292c8.744.572 15.062 7.085 13.835 14.476l-10.99 66.359c-1.507 8.981-10.307 15.69-19.972 15.16Z"
              />
              <path
                id="Vector_12"
                fill="url(#paint11_linear_576_3622)"
                d="m533.997 429.138-54.127-3.291c-9.972-.614-16.136-8.633-13.946-17.768l16.122-66.247c1.757-7.21 10.223-12.552 18.842-11.938l50.208 3.291c8.744.572 15.062 7.085 13.835 14.463l-10.99 66.372c-1.478 8.982-10.335 15.746-19.944 15.118Z"
              />
              <path
                id="Vector_13"
                fill="url(#paint12_linear_576_3622)"
                d="M530.369 364.984c-1.241 5.955-7.852 10.334-14.769 9.679-6.918-.656-11.283-6.095-9.763-12.022 1.52-5.927 8.034-9.902 14.686-9.261 6.653.642 11.06 5.718 9.846 11.604Z"
              />
              <path
                id="Vector_14"
                fill="url(#paint13_linear_576_3622)"
                d="M485.518 399.85c3.375-12.482 16.819-21.213 30.124-19.944 13.305 1.269 22.315 12.092 19.93 24.658"
              />
              <g id="Group">
                <mask
                  id="mask0_576_3622"
                  width="616"
                  height="266"
                  x="197"
                  y="359"
                  maskUnits="userSpaceOnUse"
                  className="svgMaskTypeAlpha"
                >
                  <path
                    id="Vector_15"
                    fill="url(#paint14_linear_576_3622)"
                    d="M480.066 426.375c169.41-63.848 317.816-86.26 331.456-50.069 13.639 36.192-112.633 117.305-282.057 181.153-169.424 63.848-317.816 86.26-331.456 50.069-13.64-36.206 112.647-117.306 282.057-181.153Z"
                  />
                </mask>
                <g mask="url(#mask0_576_3622)">
                  <g id="Group_2">
                    <g id="Group_3">
                      <g id="Group_4">
                        <path
                          id="Vector_16"
                          fill="url(#paint15_linear_576_3622)"
                          d="m553.859 576.191-25.438-25.857c-4.645-4.742-4.645-12.329 0-17.071l38.409-39.148c4.728-4.784 12.426-4.84 17.224-.112.042.042.084.084.111.112l27.991 28.228c4.742 4.769 4.7 12.482-.069 17.224-.14.139-.293.293-.447.418l-40.947 36.763c-4.853 4.338-12.273 4.101-16.834-.557Z"
                        />
                        <path
                          id="Vector_17"
                          fill="url(#paint16_linear_576_3622)"
                          d="m550.889 573.137-25.411-25.857c-4.658-4.742-4.658-12.329-1.185-15.872l38.395-39.134c5.941-6.053 13.737-6.081 18.521-1.255l27.949 28.242c4.742 4.783 4.7 12.496-.069 17.238-.14.139-.279.279-.433.404l-40.961 36.75c-4.84 4.337-12.231 4.114-16.806-.516Z"
                        />
                        <path
                          id="Vector_18"
                          fill="url(#paint17_linear_576_3622)"
                          d="M575.922 533.64c5.083 0 9.204-4.121 9.204-9.205 0-5.083-4.121-9.205-9.204-9.205-5.084 0-9.205 4.122-9.205 9.205 0 5.084 4.121 9.205 9.205 9.205Z"
                        />
                        <path
                          id="Vector_19"
                          fill="url(#paint18_linear_576_3622)"
                          d="M541.824 533.193c6.862-6.833 17.977-6.806 24.811.056s6.806 17.977-.055 24.811c-.335.335-.684.656-1.046.963"
                        />
                        <path
                          id="Vector_20"
                          fill="url(#paint19_linear_576_3622)"
                          d="m405.537 587.209-4.965 28.59c-.92 5.258-5.885 8.801-11.157 7.964l-43.346-6.75c-5.328-.837-8.968-5.83-8.131-11.158 0-.042.014-.069.014-.111l5.328-31.366c.92-5.314 5.969-8.884 11.282-7.964.154.028.293.056.433.084l42.997 9.525c5.105 1.116 8.424 6.039 7.545 11.186Z"
                        />
                        <path
                          id="Vector_21"
                          fill="url(#paint20_linear_576_3622)"
                          d="m404.98 590.556-5.021 28.591c-.907 5.244-5.858 8.786-9.763 8.173l-43.234-6.75c-6.709-1.046-10.349-6.109-9.442-11.464l5.258-31.367c.92-5.313 5.969-8.884 11.283-7.963.153.028.292.056.432.084l42.997 9.511c5.077 1.13 8.368 6.053 7.49 11.185Z"
                        />
                        <path
                          id="Vector_22"
                          fill="url(#paint21_linear_576_3622)"
                          d="M361.633 604.321c4.067 0 7.364-3.296 7.364-7.363s-3.297-7.364-7.364-7.364-7.363 3.297-7.363 7.364 3.296 7.363 7.363 7.363Z"
                        />
                        <path
                          id="Vector_23"
                          fill="url(#paint22_linear_576_3622)"
                          d="M383.224 615.074c-7.601-1.576-12.469-9.023-10.893-16.61 1.576-7.601 9.024-12.468 16.611-10.892"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <path
                id="Vector_24"
                fill="url(#paint23_linear_576_3622)"
                d="M744.493 369.721c5.446 0 9.86-4.415 9.86-9.861 0-5.445-4.414-9.86-9.86-9.86s-9.86 4.415-9.86 9.86c0 5.446 4.414 9.861 9.86 9.861Z"
              />
              <path
                id="Vector_25"
                fill="url(#paint24_linear_576_3622)"
                d="M262.259 634.363c5.445 0 9.86-4.414 9.86-9.86s-4.415-9.86-9.86-9.86c-5.446 0-9.861 4.414-9.861 9.86s4.415 9.86 9.861 9.86Z"
              />
              <path
                id="Vector_26"
                fill="url(#paint25_linear_576_3622)"
                d="M811.714 400.924c5.445 0 9.86-4.414 9.86-9.86s-4.415-9.86-9.86-9.86c-5.446 0-9.86 4.414-9.86 9.86s4.414 9.86 9.86 9.86Z"
              />
              <g id="TEXT">
                <text
                  xmlSpace="preserve"
                  id="REGISTRATION"
                  fill="#fff"
                  fontFamily="Chakra Petch"
                  fontSize="20"
                  fontWeight="bold"
                  letterSpacing=".05em"
                  className="svgWhiteSpacePre"
                >
                  <tspan x="672.953" y="290.84">
                    REGISTRATION
                  </tspan>
                </text>
                <text
                  xmlSpace="preserve"
                  id="æ´»åä»ç´¹"
                  fill="#fff"
                  fontFamily="Noto Sans"
                  fontSize="32"
                  fontWeight="bold"
                  letterSpacing=".1em"
                  className="svgWhiteSpacePre"
                >
                  <tspan x="678.833" y="235.416">
                    活動報名
                  </tspan>
                </text>
                <path
                  id="Vector_27"
                  stroke="url(#paint26_linear_576_3622)"
                  strokeMiterlimit="10"
                  strokeWidth="3"
                  d="M662.633 258h170"
                />
              </g>
            </g>
            <g id="mouse" ref={mainImageMouse}>
              <path
                id="Rectangle"
                fill="url(#pattern0)"
                d="M573.742 371.798h292.891v279.01H573.742z"
              />
              <path
                id="Vector_28"
                fill="url(#paint27_linear_576_3622)"
                d="m653.586 451.745.363.711 75.353 53.89 56.721-34.002-132.437-20.599Z"
              />
              <path
                id="Vector_29"
                fill="url(#paint28_linear_576_3622)"
                d="m715.077 570.835 13.654-64.14.572-.349-75.354-53.89 61.128 118.379Z"
              />
            </g>
            <g id="card outside" ref={mainImageCardOutSide}>
              <path
                id="Vector_30"
                fill="url(#paint29_linear_576_3622)"
                d="m516.048 107.528-60.919 2.399c-10.739.432-22.064-10.0698-20.293-19.5256l16.946-65.0193c1.394-7.322 9.944-13.8769 19.176-14.7555l53.235-9.5814C534.332.069 545.043 9.7758 544.346 17.6l-6.318 71.4068c-.851 9.7905-10.614 18.0753-21.98 18.5213Z"
              />
              <path
                id="Vector_31"
                fill="url(#paint30_linear_576_3622)"
                d="M511.933 103.511 451 105.91c-10.739.432-17.782-7.0852-16.011-16.5829l12.678-68.0038c1.394-7.322 9.93-13.877 19.162-14.7695l55.926-5.3695c10.14-.9623 18.131 4.5745 17.476 12.3986l-6.318 71.4068c-.865 9.7766-10.614 18.0753-21.98 18.5213Z"
              />
              <path
                id="Vector_32"
                fill="url(#paint31_linear_576_3622)"
                d="M501.765 38.2968c-.878 6.276-7.963 11.7291-15.731 12.0499-7.769.3208-12.915-4.5466-11.73-10.7389 1.186-6.1923 8.034-11.1573 15.439-11.5757 7.406-.4184 12.873 4.1282 12.022 10.2647Z"
              />
              <path
                id="Vector_33"
                fill="url(#paint32_linear_576_3622)"
                d="M455.004 80.0393c2.789-13.0959 16.736-23.7093 31.505-24.2811 15.049-.5718 26.248 9.4279 24.7 22.9283"
              />
              <path
                id="Vector_34"
                fill="url(#paint33_linear_576_3622)"
                d="m363.919 155.058-64.531 7.35c-11.813 1.353-22.538-7.015-24.1-18.814l-12.845-97.3475c-1.575-11.9522 6.848-22.9143 18.801-24.4763.097-.014.181-.0279.279-.0419l70.709-8.368c11.966-1.4086 22.803 7.1407 24.225 19.1069.042.3627.084.7253.098 1.0879l6.666 98.3659c.795 11.631-7.712 21.826-19.302 23.137Z"
              />
              <path
                id="Vector_35"
                fill="url(#paint34_linear_576_3622)"
                d="m359.51 154.388-64.531 7.35c-11.813 1.339-22.538-7.029-24.086-18.828l-12.914-97.3054c-1.576-11.9523 6.847-22.9143 18.8-24.4764.097-.0139.181-.0279.279-.0418l70.709-8.368c11.98-1.3807 22.817 7.2104 24.198 19.1906.041.3486.069.6973.097 1.046l6.653 98.324c.767 11.589-7.671 21.743-19.205 23.109Z"
              />
              <path
                id="Vector_36"
                fill="url(#paint35_linear_576_3622)"
                d="M315.772 83.6514c8.843 0 16.011-7.1683 16.011-16.0108s-7.168-16.0107-16.011-16.0107c-8.842 0-16.01 7.1682-16.01 16.0107 0 8.8425 7.168 16.0108 16.01 16.0108Z"
              />
              <path
                id="Vector_37"
                fill="url(#paint36_linear_576_3622)"
                d="M293.794 121.405c-1.256-15.662 10.418-29.3713 26.094-30.6265 15.662-1.2552 29.371 10.4185 30.627 26.0805"
              />
              <path
                id="Vector_38"
                fill="url(#paint37_linear_576_3622)"
                d="m491.097 275.724-33.541-34.141c-6.137-6.248-6.137-16.262 0-22.51l50.64-51.603c6.234-6.318 16.415-6.387 22.747-.139.056.042.097.097.139.139l36.917 37.126c6.248 6.29 6.22 16.471-.084 22.719-.195.196-.404.391-.599.572l-54.03 48.493c-6.387 5.746-16.15 5.453-22.189-.656Z"
              />
              <path
                id="Vector_39"
                fill="url(#paint38_linear_576_3622)"
                d="m487.194 271.666-33.556-34.099c-6.15-6.249-6.15-16.276-1.576-20.92l50.655-51.603c7.824-7.991 18.13-8.019 24.434-1.646l36.931 37.238c6.248 6.318 6.192 16.499-.112 22.747-.181.181-.376.362-.572.53l-54.029 48.478c-6.387 5.732-16.164 5.412-22.175-.725Z"
              />
              <path
                id="Vector_40"
                fill="url(#paint39_linear_576_3622)"
                d="M520.204 219.562c6.701 0 12.134-5.433 12.134-12.134 0-6.701-5.433-12.134-12.134-12.134-6.701 0-12.134 5.433-12.134 12.134 0 6.701 5.433 12.134 12.134 12.134Z"
              />
              <path
                id="Vector_41"
                fill="url(#paint40_linear_576_3622)"
                d="M475.266 218.975c9.344-8.73 23.988-8.228 32.718 1.116 8.731 9.344 8.229 23.988-1.115 32.719-.084.084-.168.167-.265.237"
              />
              <path
                id="Vector_42"
                fill="url(#paint41_linear_576_3622)"
                d="m417.084 344.286-42.719 20.125c-7.824 3.682-17.154.419-20.989-7.335l-31.52-64.029c-3.877-7.866-.641-17.378 7.224-21.255.056-.028.126-.056.182-.084l46.749-22.315c7.922-3.765 17.391-.39 21.143 7.518.112.237.223.474.321.711l27.544 66.163c3.292 7.852-.209 16.903-7.935 20.501Z"
              />
              <path
                id="Vector_43"
                fill="url(#paint42_linear_576_3622)"
                d="m412.604 346.127-42.719 20.125c-7.824 3.696-17.168.433-20.99-7.336l-31.575-64.029c-3.877-7.852-.655-17.363 7.197-21.241.069-.027.139-.069.209-.097l46.749-22.245c7.894-3.794 17.364-.46 21.157 7.434.126.251.237.516.349.781l27.544 66.162c3.25 7.838-.237 16.848-7.921 20.446Z"
              />
              <path
                id="Vector_44"
                fill="url(#paint43_linear_576_3622)"
                d="M362.884 305.947c6.617 0 11.981-5.364 11.981-11.981 0-6.616-5.364-11.98-11.981-11.98-6.616 0-11.98 5.364-11.98 11.98 0 6.617 5.364 11.981 11.98 11.981Z"
              />
              <path
                id="Vector_45"
                fill="url(#paint44_linear_576_3622)"
                d="M358.967 339.642c-5.006-11.59.335-25.048 11.925-30.055 11.589-5.007 25.048.335 30.055 11.924"
              />
              <path
                id="Vector_46"
                fill="url(#paint45_linear_576_3622)"
                d="m267.909 260.007-39.399 25.62c-6.639 4.309-16.304 3.612-21.882-1.479l-45.759-41.84c-5.105-4.504-5.593-12.287-1.088-17.377.432-.488.907-.948 1.409-1.367l37.656-33.318c7.238-6.416 18.604-6.569 24.713-.182l48.088 50.306c5.718 5.927 3.961 14.63-3.738 19.637Z"
              />
              <path
                id="Vector_47"
                fill="url(#paint46_linear_576_3622)"
                d="m264.562 262.517-39.4 25.62c-6.638 4.324-16.303 3.613-21.868-1.478l-45.773-41.84c-5.104-4.505-5.592-12.287-1.088-17.377.433-.488.907-.949 1.409-1.367l37.656-33.319c7.238-6.415 18.605-6.568 24.713-.181l48.102 50.292c5.705 5.941 3.947 14.644-3.751 19.65Z"
              />
              <path
                id="Vector_48"
                fill="url(#paint47_linear_576_3622)"
                d="M211.413 226.13c4.463 4.184 3.779 10.92-1.395 14.881-5.174 3.961-12.664 3.682-16.959-.39-4.296-4.073-3.863-10.586 1.102-14.63 4.965-4.045 12.789-4.087 17.252.139Z"
              />
              <path
                id="Vector_49"
                fill="url(#paint48_linear_576_3622)"
                d="M211.817 270.689c-8.075-7.656-6.973-19.525 2.79-26.875 10.139-7.587 25.661-7.308 34.308.893"
              />
            </g>
            <path
              id="light"
              fill="url(#paint49_linear_576_3622)"
              d="M0 254.165 618.241 13l13.709 469.667L374.9 608.326 0 254.165Z"
              opacity=".5"
              ref={mainImageLight}
            />
            <defs>
              <linearGradient
                id="paint0_linear_576_3622"
                x1="462.248"
                x2="547.103"
                y1="819.46"
                y2="165.478"
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
                id="paint1_linear_576_3622"
                x1="100.271"
                x2="900.948"
                y1="473.145"
                y2="511.54"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".31" stopOpacity="0" />
                <stop offset=".66" stopColor="#fff" />
                <stop offset=".74" stopColor="#666" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_576_3622"
                x1="275.602"
                x2="238.304"
                y1="348.654"
                y2="447.075"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_576_3622"
                x1="273.02"
                x2="235.722"
                y1="349.714"
                y2="448.135"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_576_3622"
                x1="275.998"
                x2="236.663"
                y1="359.026"
                y2="402.376"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_576_3622"
                x1="289.014"
                x2="249.679"
                y1="370.835"
                y2="414.185"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_576_3622"
                x1="395.178"
                x2="410.618"
                y1="419.649"
                y2="546.69"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_576_3622"
                x1="393.006"
                x2="408.436"
                y1="422.241"
                y2="549.292"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_576_3622"
                x1="401.462"
                x2="383.588"
                y1="430.899"
                y2="499.805"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_576_3622"
                x1="422.173"
                x2="404.299"
                y1="436.272"
                y2="505.178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_576_3622"
                x1="536.137"
                x2="512.008"
                y1="326.14"
                y2="419.158"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".2" stopColor="#858585" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".59" stopColor="#fff" />
                <stop offset=".96" stopColor="#898989" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_576_3622"
                x1="593.017"
                x2="417.645"
                y1="479.29"
                y2="253.616"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_576_3622"
                x1="578.961"
                x2="489.103"
                y1="379.821"
                y2="356.511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_576_3622"
                x1="571.617"
                x2="481.759"
                y1="408.134"
                y2="384.825"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint14_linear_576_3622"
                x1="101.917"
                x2="902.594"
                y1="472.599"
                y2="510.994"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".11" stopColor="#999" />
                <stop offset=".31" stopOpacity="0" />
                <stop offset=".66" stopColor="#fff" />
                <stop offset=".74" stopColor="#666" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint15_linear_576_3622"
                x1="608.5"
                x2="543.607"
                y1="499.661"
                y2="558.196"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint16_linear_576_3622"
                x1="552.45"
                x2="591.037"
                y1="471.637"
                y2="631.79"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".2" stopColor="#858585" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".59" stopColor="#fff" />
                <stop offset=".96" stopColor="#898989" />
              </linearGradient>
              <linearGradient
                id="paint17_linear_576_3622"
                x1="568.657"
                x2="580.941"
                y1="508.498"
                y2="535.447"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint18_linear_576_3622"
                x1="552.283"
                x2="561.39"
                y1="514.371"
                y2="563.384"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint19_linear_576_3622"
                x1="330.392"
                x2="398.701"
                y1="587.352"
                y2="602.317"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint20_linear_576_3622"
                x1="338.21"
                x2="424.445"
                y1="636.82"
                y2="537.105"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".2" stopColor="#858585" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".59" stopColor="#fff" />
                <stop offset=".96" stopColor="#898989" />
              </linearGradient>
              <linearGradient
                id="paint21_linear_576_3622"
                x1="354.647"
                x2="366.453"
                y1="609.124"
                y2="588.565"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint22_linear_576_3622"
                x1="366.269"
                x2="393.921"
                y1="617.181"
                y2="588.429"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint23_linear_576_3622"
                x1="665.807"
                x2="752.04"
                y1="407.445"
                y2="355.296"
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
                id="paint24_linear_576_3622"
                x1="183.57"
                x2="269.817"
                y1="672.083"
                y2="619.933"
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
                id="paint25_linear_576_3622"
                x1="733.022"
                x2="819.255"
                y1="438.652"
                y2="386.503"
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
                id="paint26_linear_576_3622"
                x1="665.442"
                x2="837.71"
                y1="258.227"
                y2="258.227"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#666" />
                <stop offset=".33" stopColor="#F1FFFE" />
                <stop offset=".61" stopColor="#fff" />
                <stop offset=".8" stopColor="#999" />
                <stop offset=".95" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint27_linear_576_3622"
                x1="699.564"
                x2="746.042"
                y1="528.985"
                y2="375.275"
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
                id="paint28_linear_576_3622"
                x1="630.665"
                x2="714.292"
                y1="591.384"
                y2="467.55"
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
                id="paint29_linear_576_3622"
                x1="438.456"
                x2="533.232"
                y1="4.4932"
                y2="98.442"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".2" stopColor="#858585" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".59" stopColor="#fff" />
                <stop offset=".96" stopColor="#898989" />
              </linearGradient>
              <linearGradient
                id="paint30_linear_576_3622"
                x1="598.466"
                x2="441.718"
                y1="-71.7797"
                y2="111.707"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".2" stopColor="#858585" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".59" stopColor="#fff" />
                <stop offset=".96" stopColor="#898989" />
              </linearGradient>
              <linearGradient
                id="paint31_linear_576_3622"
                x1="478.397"
                x2="489.611"
                y1="123.782"
                y2="24.9509"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint32_linear_576_3622"
                x1="447.583"
                x2="503.172"
                y1="84.7365"
                y2="64.8492"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint33_linear_576_3622"
                x1="324.439"
                x2="319.508"
                y1="156.257"
                y2="-43.4739"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#999" stopOpacity="0" />
                <stop offset=".05" stopColor="#463E3C" stopOpacity=".28" />
                <stop offset=".11" stopColor="#231815" stopOpacity=".4" />
                <stop offset=".15" stopColor="#483E3C" stopOpacity=".48" />
                <stop offset=".21" stopColor="#6C6562" stopOpacity=".55" />
                <stop offset=".26" stopColor="#827C7A" stopOpacity=".6" />
                <stop offset=".3" stopColor="#8A8482" stopOpacity=".62" />
                <stop offset=".36" stopColor="#B7B4B3" stopOpacity=".77" />
                <stop offset=".47" stopColor="#fff" />
                <stop offset=".51" stopColor="#E0DFDF" stopOpacity=".93" />
                <stop offset=".61" stopColor="#9B9999" stopOpacity=".78" />
                <stop offset=".69" stopColor="#696665" stopOpacity=".67" />
                <stop offset=".74" stopColor="#4A4645" stopOpacity=".61" />
                <stop offset=".78" stopColor="#3E3A39" stopOpacity=".58" />
              </linearGradient>
              <linearGradient
                id="paint34_linear_576_3622"
                x1="419.942"
                x2="284.285"
                y1="149.328"
                y2="63.8371"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint35_linear_576_3622"
                x1="352.534"
                x2="282.027"
                y1="63.3458"
                y2="71.5831"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint36_linear_576_3622"
                x1="266.46"
                x2="372.281"
                y1="112.006"
                y2="99.3853"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint37_linear_576_3622"
                x1="563.162"
                x2="477.549"
                y1="174.752"
                y2="251.948"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint38_linear_576_3622"
                x1="489.24"
                x2="540.145"
                y1="137.802"
                y2="349.066"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".2" stopColor="#858585" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".59" stopColor="#fff" />
                <stop offset=".96" stopColor="#898989" />
              </linearGradient>
              <linearGradient
                id="paint39_linear_576_3622"
                x1="510.618"
                x2="526.841"
                y1="186.423"
                y2="221.972"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint40_linear_576_3622"
                x1="488.771"
                x2="500.783"
                y1="194.219"
                y2="258.879"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint41_linear_576_3622"
                x1="402.027"
                x2="337.125"
                y1="231.987"
                y2="403.271"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint42_linear_576_3622"
                x1="397.503"
                x2="332.601"
                y1="233.823"
                y2="405.107"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" stopOpacity="0" />
                <stop offset=".1" stopColor="#929292" stopOpacity=".18" />
                <stop offset=".24" stopColor="gray" stopOpacity=".63" />
                <stop offset=".35" stopColor="#727171" />
                <stop offset=".58" stopColor="#fff" />
                <stop offset=".96" stopColor="#B3B3B3" />
              </linearGradient>
              <linearGradient
                id="paint43_linear_576_3622"
                x1="402.606"
                x2="334.142"
                y1="250.19"
                y2="325.643"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint44_linear_576_3622"
                x1="425.222"
                x2="356.758"
                y1="270.71"
                y2="346.162"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint45_linear_576_3622"
                x1="194.061"
                x2="236.758"
                y1="212.104"
                y2="268.582"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".03" stopColor="#999" />
                <stop offset=".19" stopColor="#ADADAD" />
                <stop offset=".47" stopColor="#D8D8D8" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".82" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint46_linear_576_3622"
                x1="261.689"
                x2="154.34"
                y1="246.591"
                y2="231.165"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint47_linear_576_3622"
                x1="282.311"
                x2="186.371"
                y1="248.762"
                y2="230.345"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint48_linear_576_3622"
                x1="279.151"
                x2="183.211"
                y1="265.27"
                y2="246.852"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#898989" />
                <stop offset=".14" stopColor="#767575" />
                <stop offset=".16" stopColor="#727171" />
                <stop offset=".69" stopColor="#fff" />
                <stop offset=".76" stopColor="#FBFBFB" />
                <stop offset=".81" stopColor="#F0F0F0" />
                <stop offset=".87" stopColor="#DEDEDE" />
                <stop offset=".93" stopColor="#C3C3C3" />
                <stop offset=".96" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#BCBCBC" />
              </linearGradient>
              <linearGradient
                id="paint49_linear_576_3622"
                x1="515.393"
                x2="353.458"
                y1="603.776"
                y2="234.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".22" stopColor="#3FFFC6" stopOpacity="0" />
                <stop offset=".33" stopColor="#8AFFDC" stopOpacity=".39" />
                <stop offset=".43" stopColor="#C9FFEF" stopOpacity=".72" />
                <stop offset=".5" stopColor="#F0FFFB" stopOpacity=".92" />
                <stop offset=".54" stopColor="#fff" />
                <stop offset=".58" stopColor="#F8EEFE" stopOpacity=".93" />
                <stop offset=".67" stopColor="#E6C3FA" stopOpacity=".76" />
                <stop offset=".8" stopColor="#C87DF4" stopOpacity=".49" />
                <stop offset=".95" stopColor="#A01EEC" stopOpacity=".12" />
                <stop offset="1" stopColor="#9300E9" stopOpacity="0" />
              </linearGradient>
              <pattern
                id="pattern0"
                width="1"
                height="1"
                patternContentUnits="objectBoundingBox"
              >
                <use
                  xlinkHref="#image0_576_3622"
                  transform="scale(.00474 .00498)"
                />
              </pattern>
            </defs>
          </svg>
        </UnivLink>
      </Center>
    </SectionContainer>
  );
}

export default Section5;
