import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import Star from '@images/icon-star.svg';

export default function Address() {
  return (
    <Box py={{ base: '30px', md: '50px' }}>
      <VStack spacing={{ base: '13px', md: '26px' }} alignItems="flex-start">
        <Heading
          as="h4"
          fontSize={{ base: '24px', md: '38px' }}
          fontWeight="700"
          lineHeight={{ base: '23px', md: '40px' }}
          letterSpacing="0.05em"
        >
          Web3 Rhapsody 狂想曲
        </Heading>
        <Box>
          <Text
            as="h4"
            fontSize={{ base: '22px', md: '32px' }}
            fontWeight="700"
            lineHeight={{ base: '23px', md: '34px' }}
            letterSpacing="0.05em"
          >
            2022.11.17
            <Box
              as="span"
              fontSize={{ base: '13px', md: '18px' }}
              fontWeight="700"
              lineHeight="23px"
              letterSpacing="0.05em"
              mx="8px"
            >
              [ THU ]
            </Box>
            - 11.19
            <Box
              as="span"
              fontSize={{ base: '13px', md: '18px' }}
              fontWeight="700"
              lineHeight="23px"
              letterSpacing="0.05em"
              mx="8px"
            >
              [ SAT ]
            </Box>
          </Text>
        </Box>
        <Box boxSize={{ base: '16px', md: '24px' }}>
          <Star />
        </Box>
        <Box>
          <Text
            as="address"
            fontSize={{ base: '15px', md: '18px' }}
            fontWeight="700"
            lineHeight="23px"
            letterSpacing="0.05em"
            fontStyle="normal"
          >
            <Flex direction={{ base: 'column', md: 'row' }}>
              <Box as="span">台灣台北市中山區玉門街1號</Box>
              <Box as="span" display={{ base: 'none', md: 'inline-block' }}>
                &nbsp; | &nbsp;
              </Box>
              <Box as="span">花博公園流行館</Box>
            </Flex>
          </Text>
          <Box h={{ base: '8px', md: '13px' }} />
          <Text
            as="address"
            fontSize={{ base: '14px', md: '18px' }}
            fontWeight="700"
            lineHeight={{ base: '18px', md: '23px' }}
            letterSpacing="0.05em"
            fontStyle="normal"
          >
            No. 1, Yumen St., Zhongshan Dist., Taipei City ｜ FE EcoARK Taipei
            EXPO Park
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
