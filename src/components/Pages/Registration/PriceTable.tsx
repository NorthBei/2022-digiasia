import { Box, SystemProps, Text } from '@chakra-ui/react';

import PriceList, { PriceListProps } from './PriceList';

type PriceTableProps = {
  instruction: string;
  priceList: PriceListProps['list'];
  isPriceAlignLeft?: boolean;
} & SystemProps;

function PriceTable(props: PriceTableProps) {
  const { instruction, priceList, isPriceAlignLeft, ...systemProps } = props;

  return (
    <Box>
      <Text
        fontSize="15px"
        lineHeight="23px"
        letterSpacing="0.05rem"
        mt="10px"
        mb="30px"
        {...systemProps}
      >
        {instruction}
      </Text>

      <PriceList
        list={priceList}
        textAlign={isPriceAlignLeft ? 'left' : 'center'}
      />
    </Box>
  );
}

PriceTable.defaultProps = {
  isPriceAlignLeft: false,
};

export default PriceTable;
