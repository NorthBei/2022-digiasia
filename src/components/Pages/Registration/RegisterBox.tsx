import { Box, Heading } from '@chakra-ui/react';
import Image from '@components/Image';
import UnivLink, { LinkType } from '@components/UnivLink';
import { ReactNode } from 'react';

type RegisterBoxProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  button: {
    text: string;
    type: LinkType;
    href: string;
    fn?: () => void;
  };
};

function RegisterBox(props: RegisterBoxProps) {
  const { title, subtitle, children, button } = props;
  return (
    <Box
      as="section"
      position="relative"
      bg="linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(226, 226, 226, 0) 51.04%, rgba(255, 255, 255, 0.25) 100%);"
      borderRadius="25px"
      color="white"
      fontWeight="700"
      textAlign="center"
      w={{ base: '100%', md: '350px' }}
      p="30px 30px 70px"
      mb="90px"
    >
      <Heading
        as="h2"
        fontSize={{ base: '25px', md: '30px' }}
        lineHeight={{ base: '25px', md: '30px' }}
        mb={subtitle ? '10px' : '30px'}
        letterSpacing="0.1rem"
      >
        {title}
      </Heading>
      {subtitle && (
        <Heading as="h4" fontSize="12px" lineHeight="23px" mb="20px">
          {subtitle}
        </Heading>
      )}
      {children}
      <UnivLink type={button.type} href={button.href} onClick={button.fn}>
        <Box
          as="button"
          h="87px"
          w="214px"
          position="absolute"
          left="50%"
          bottom="0"
          transform="translate(-50%, 50%) rotate(-4.4deg)"
          px="25px"
        >
          <Image
            src="/images/registration/button.png"
            alt="button"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
          <Box
            position="relative"
            zIndex="10"
            color="black"
            letterSpacing="0.01rem"
            fontWeight="600"
            textTransform="capitalize"
          >
            {button.text}
          </Box>
          <Box
            position="absolute"
            right="0"
            bottom="0"
            transform="translate(10%, 35%)"
            boxSize="40px"
          >
            <Image src="/images/registration/arrow.png" alt="arrow" fill />
          </Box>
        </Box>
      </UnivLink>
    </Box>
  );
}

export default RegisterBox;
