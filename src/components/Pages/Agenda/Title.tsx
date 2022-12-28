import { Box } from '@chakra-ui/react';
import GradientHeading from '@components/GradientHeading';
import { forwardRef } from 'react';

type TitleProps = {
  text: string;
  supplement?: string;
};

const Title = forwardRef<HTMLDivElement, TitleProps>((props, ref) => {
  const { text, supplement } = props;
  return (
    <GradientHeading
      fontSize={{ base: '18px', md: '24px' }}
      p={{ base: '6px 20px', md: '13px 26px' }}
      ref={ref}
    >
      {text}
      {supplement && (
        <Box
          fontSize={{ base: '13px', md: '24px' }}
          lineHeight="23px"
          letterSpacing="0.05em"
          ml={{ base: '7px', md: '10px' }}
        >
          {supplement}
        </Box>
      )}
    </GradientHeading>
  );
});

Title.displayName = 'Title';

Title.defaultProps = {
  supplement: undefined,
};

export default Title;
