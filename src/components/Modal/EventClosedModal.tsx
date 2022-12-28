import { Center, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useGlobalContext } from '@context/GlobalContext';

function EventCloseModal() {
  const { eventClosedModal } = useGlobalContext();

  return (
    <Modal
      isOpen={eventClosedModal.isOpen}
      onClose={eventClosedModal.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg="none" boxShadow="none">
        <Center h="100%" w="100%" maxH={{ base: '143px', md: '350px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 803 350"
          >
            <g filter="url(#filter0_d_845_31)">
              <rect
                width="593.872"
                height="211.031"
                x="99.375"
                y="69.0452"
                fill="url(#paint0_linear_845_31)"
                rx="30"
              />
            </g>
            <rect
              width="593.872"
              height="211.031"
              x="99.375"
              y="60.6045"
              fill="url(#paint1_linear_845_31)"
              rx="30"
            />
            <text
              xmlSpace="preserve"
              fill="#000"
              fontFamily="Chakra Petch"
              fontSize="20"
              fontWeight="bold"
              letterSpacing=".05em"
              className="svgWhiteSpacePre"
            >
              <tspan x="255" y="150.84">
                CLOSED ! CLOSED ! CLOSED !
              </tspan>
              <tspan x="255" y="180.84">
                CLOSED ! CLOSED ! CLOSED !
              </tspan>
              <tspan x="255" y="210.84">
                CLOSED ! CLOSED ! CLOSED !
              </tspan>
            </text>
            <g filter="url(#filter1_d_845_31)">
              <rect
                width="115.805"
                height="42.8968"
                x="604.195"
                y="48.6329"
                fill="#fff"
                rx="21.4484"
              />
              <rect
                width="113.805"
                height="40.8968"
                x="605.195"
                y="49.6329"
                stroke="#fff"
                strokeWidth="2"
                rx="20.4484"
              />
            </g>
            <text
              xmlSpace="preserve"
              fill="#000"
              fontFamily="Chakra Petch"
              fontSize="20"
              fontWeight="bold"
              letterSpacing=".1em"
              className="svgWhiteSpacePre"
              onClick={eventClosedModal.onClose}
              cursor="pointer"
            >
              <tspan x="625" y="77.84">
                CLOSE
              </tspan>
            </text>
            <defs>
              <linearGradient
                id="paint0_linear_845_31"
                x1="108.283"
                x2="677.905"
                y1="280.076"
                y2="280.076"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#494949" />
                <stop offset=".5" stopColor="#E4E4E4" />
                <stop offset="1" stopColor="#595959" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_845_31"
                x1="135.007"
                x2="685.465"
                y1="295.376"
                y2="131.081"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B5B5B5" />
                <stop offset=".5104" stopColor="#fff" />
                <stop offset="1" stopColor="#929292" />
              </linearGradient>
              <filter
                id="filter0_d_845_31"
                width="693.871"
                height="311.031"
                x="69.375"
                y="39.0452"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="20" dy="20" />
                <feGaussianBlur stdDeviation="25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_845_31"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_845_31"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_845_31"
                width="155.805"
                height="82.8969"
                x="584.195"
                y="32.6329"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_845_31"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_845_31"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </Center>
      </ModalContent>
    </Modal>
  );
}

export default EventCloseModal;
