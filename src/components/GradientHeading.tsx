import { Heading, SystemProps } from '@chakra-ui/react';
import { forwardRef, ReactNode } from 'react';

type GradientHeadingProps = {
  children: ReactNode;
} & SystemProps;

const GradientHeading = forwardRef<HTMLHeadingElement, GradientHeadingProps>(
  (props, ref) => {
    const { children, ...sysProps } = props;
    return (
      <>
        <Heading
          as="h2"
          display="inline-flex"
          p={{ base: '9px 25px', md: '18px 28px' }}
          fontSize="18px"
          fontWeight="700"
          lineHeight="23px"
          letterSpacing="0.05em"
          borderRadius="100px"
          background="linear-gradient(92.41deg, #FFFFFF 8.26%, #616370 99.46%)"
          color="black"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          boxSizing="content-box"
          {...sysProps}
          ref={ref}
        >
          {children}
        </Heading>
      </>
    );
  }
);

GradientHeading.displayName = 'GradientHeading';

export default GradientHeading;
