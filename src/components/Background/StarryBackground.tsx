import { Box } from '@chakra-ui/react';

// ref https://codepen.io/sarazond/pen/LYGbwj

function StarryBackground() {
  return (
    <>
      <Box
        h="100vh"
        w="100%"
        position="fixed"
        top="0"
        left="0"
        zIndex="background"
        className="universeBackground"
      ></Box>
      <Box
        id="stars"
        h="100vh"
        w="100%"
        position="fixed"
        top="0"
        left="0"
      ></Box>
      <Box
        id="stars2"
        h="100vh"
        w="100%"
        position="fixed"
        top="0"
        left="0"
      ></Box>
      <Box
        id="stars3"
        h="100vh"
        w="100%"
        position="fixed"
        top="0"
        left="0"
      ></Box>
    </>
  );
}

export default StarryBackground;
