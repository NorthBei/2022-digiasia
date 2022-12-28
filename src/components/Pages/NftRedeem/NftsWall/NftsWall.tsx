import { Box } from '@chakra-ui/react';

import NftsRow, { NftSize } from './NftsRow';

const NFT_LIST_ROWS = 2;

function NftsWall() {
  return (
    <Box
      mx="calc(50% - 50vw)"
      w="100vw"
      h={{
        base: `${NftSize.MOBILE * NFT_LIST_ROWS}px`,
        md: `${NftSize.PC * NFT_LIST_ROWS}px`,
      }}
      overflowX="hidden"
      my="50px"
    >
      {Array(NFT_LIST_ROWS)
        .fill(0)
        .map((item, index) => {
          return (
            <NftsRow
              key={index}
              transform={{
                base:
                  index % 2 !== 0 ? `translateX(-${NftSize.MOBILE / 2}px)` : '',
                md: index % 2 !== 0 ? `translateX(-${NftSize.PC / 2}px)` : '',
              }}
            />
          );
        })}
    </Box>
  );
}

export default NftsWall;
