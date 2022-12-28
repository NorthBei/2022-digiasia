import { Box } from '@chakra-ui/react';

function WhiteGradientDivider() {
  return (
    <Box
      h="2px"
      bg="linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 47.4%, rgba(255, 255, 255, 0) 100%)"
    ></Box>
  );
}

export default WhiteGradientDivider;
