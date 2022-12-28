import { Box, Text, VStack } from '@chakra-ui/react';

import Title from './Title';

enum Const {
  LineHeight = '23px',
}

type TextBlocksProps = { title: string; descriptions: string[] };

function TextBlocks(props: TextBlocksProps) {
  const { title, descriptions } = props;
  return (
    <>
      <Title>{title}</Title>
      <VStack spacing={Const.LineHeight}>
        {descriptions.map((description) => {
          return (
            <Text
              key={description}
              fontSize={{ base: '13px', md: '14px' }}
              lineHeight={Const.LineHeight}
              letterSpacing="0.05em"
            >
              {description}
            </Text>
          );
        })}
        <Box h="20px"></Box>
      </VStack>
    </>
  );
}

export default TextBlocks;
