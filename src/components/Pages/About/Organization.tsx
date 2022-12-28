import { Heading } from '@chakra-ui/react';

import MemberList, { MemberListProps } from './MemberList';

type OrganizationProps = { title: string } & MemberListProps;

function Organization(props: OrganizationProps) {
  const { title, members } = props;

  return (
    <>
      <Heading
        as="h3"
        fontWeight="700"
        fontSize={{ base: '16px', md: '23px' }}
        lineHeight="47px"
        letterSpacing="0.05em"
      >
        {title}
      </Heading>
      <MemberList members={members} />
    </>
  );
}

export default Organization;
