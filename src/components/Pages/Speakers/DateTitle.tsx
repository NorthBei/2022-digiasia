import { Box } from '@chakra-ui/react';
import GradientHeading from '@components/GradientHeading';

type DateTitleProps = {
  date: string;
  weekday: string;
};

function DateTitle(props: DateTitleProps) {
  const { date, weekday } = props;

  return (
    <GradientHeading
      fontSize={{ base: '18px', md: '24px' }}
      p={{ base: '6px 20px', md: '13px 26px' }}
    >
      {date}
      <Box
        fontSize={{ base: '13px', md: '24px' }}
        lineHeight="23px"
        letterSpacing="0.05em"
        ml={{ base: '7px', md: '10px' }}
      >
        {weekday}
      </Box>
    </GradientHeading>
  );
}

export default DateTitle;
