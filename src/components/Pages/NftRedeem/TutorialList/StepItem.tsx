import { Box, Square, Text } from '@chakra-ui/react';
import Image, { ImageProps } from '@components/Image';
import UnivLink, { LinkType } from '@components/UnivLink';

export type StepItemProps = {
  number: number;
  image: {
    src: ImageProps['src'];
    link?: string;
  };
  description: string;
};

function StepItem(props: StepItemProps) {
  const { number, image, description } = props;
  return (
    <Box>
      <Box
        boxSize="215px"
        position="relative"
        mx="auto"
        my={{ base: '30px', md: '35px' }}
      >
        {image.link ? (
          <UnivLink type={LinkType.EXTERNAL} href={image.link}>
            <Image src={image.src} alt={description} width={215} height={215} />
          </UnivLink>
        ) : (
          <Image src={image.src} alt={description} width={215} height={215} />
        )}

        <Square
          size="22px"
          bg="black"
          fontWeight="700"
          fontSize="15px"
          lineHeight="23px"
          letterSpacing="0.05em"
          position="absolute"
          top="0"
          left="0"
        >
          {number}
        </Square>
      </Box>
      <Text
        fontWeight="700"
        fontSize="15px"
        lineHeight="23px"
        letterSpacing="0.05em"
      >
        {description}
      </Text>
    </Box>
  );
}

export default StepItem;
