import { As, Box, Heading, Icon, Text, VStack } from '@chakra-ui/react';

type ScheduleItemProps = {
  day: string;
  image: As;
  description: string;
};

function ScheduleItem(props: ScheduleItemProps) {
  const { day, image, description } = props;
  return (
    <VStack key={day}>
      <Heading
        as="h3"
        p="8px"
        textAlign="center"
        w="164px"
        border="2px solid white"
        borderRadius="100px"
        fontWeight="700"
        fontSize="20px"
        lineHeight="23px"
        letterSpacing="0.05em"
      >
        {day}
      </Heading>
      <Box my="15px">
        <Icon as={image} w="100%" h="88px" />
      </Box>
      <Text
        fontWeight="400"
        fontSize="15px"
        lineHeight="23px"
        textAlign="center"
        letterSpacing="0.05em"
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      >
        {description}
      </Text>
    </VStack>
  );
}

export default ScheduleItem;
