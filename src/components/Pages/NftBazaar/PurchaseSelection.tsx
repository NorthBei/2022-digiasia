import {
  As,
  Center,
  Icon,
  ResponsiveValue,
  SystemProps,
  Text,
  VStack,
} from '@chakra-ui/react';
import UnivLink, { LinkType } from '@components/UnivLink';
import ButtonArrow from '@images/nft-bazaar/arrow.svg';

type PurchaseSelectionProps = {
  icon: {
    image: As;
    width: ResponsiveValue<string>;
  } & SystemProps;
  button: {
    text: string;
    link: string;
  };
};

function PurchaseSelection(props: PurchaseSelectionProps) {
  const { icon, button } = props;
  const { image, width, ...systemProps } = icon;

  return (
    <VStack spacing="10px">
      <Icon
        as={image}
        w={width}
        h={{ base: '109px', md: '112px' }}
        {...systemProps}
      />
      <UnivLink type={LinkType.EXTERNAL} href={button.link}>
        <Center
          p={{ base: '9px 16px', md: '13px 16px' }}
          border="2px solid white"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
          borderRadius="25px"
          minW="174px"
        >
          <Center flex="1">
            <Text
              fontWeight="700"
              fontSize="17px"
              lineHeight="23px"
              letterSpacing="0.1em"
              color="#FFFFFF"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              {button.text}
            </Text>
          </Center>
          <Center ml="16px" w={{ base: '8px', md: '10px' }}>
            <ButtonArrow />
          </Center>
        </Center>
      </UnivLink>
    </VStack>
  );
}

export default PurchaseSelection;
