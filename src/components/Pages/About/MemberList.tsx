import { AspectRatio, Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Image, { ImageProps } from '@components/Image';

type Member = {
  image: ImageProps['src'];
  title: string;
};

export type MemberListProps = {
  members: Member[];
};

function MemberList(props: MemberListProps) {
  const { members } = props;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="47px" spacingY="23px">
      {members.map((member) => (
        <Stack
          key={member.title}
          direction={{ base: 'row', md: 'column' }}
          spacing={{ base: '19px', md: '23px' }}
          alignItems="center"
          w={{ base: '100%', md: '200px' }}
        >
          <AspectRatio w={{ base: '124px', md: '100%' }} ratio={200 / 133}>
            <Box boxSize="100%" borderRadius={{ base: '15px', md: '30px' }}>
              <Image
                src={member.image}
                alt={member.title}
                height={133}
                width={200}
                loading="lazy"
                style={{
                  objectFit: 'cover',
                }}
              />
            </Box>
          </AspectRatio>
          <Text
            flex="1"
            fontWeight="700"
            fontSize={{ base: '14px', md: '15px' }}
            lineHeight="23px"
            letterSpacing="0.05em"
            textAlign={{ base: 'left', md: 'center' }}
          >
            {member.title}
          </Text>
        </Stack>
      ))}
    </SimpleGrid>
  );
}

export default MemberList;
