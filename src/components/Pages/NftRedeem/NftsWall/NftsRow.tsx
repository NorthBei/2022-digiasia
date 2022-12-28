import { Box, Grid, GridItem, SystemProps } from '@chakra-ui/react';
import Image, { ImageProps } from '@components/Image';
import { useEffect, useState } from 'react';

const NFT_MAX_SERIAL_NUMBER = 1080;
// 10個NFT裡面，要出現多少個badge
const BADGE_ATTENDANCE_RATE = 0.3;
const PROBABILITY = NFT_MAX_SERIAL_NUMBER * (1 + BADGE_ATTENDANCE_RATE);

export enum NftSize {
  MOBILE = 99,
  PC = 114,
}

type NftsRowProps = SystemProps;

function NftsRow(props: NftsRowProps) {
  const [nftImages, setNftImages] = useState<ImageProps['src'][]>([]);

  useEffect(() => {
    const nftCount = Math.ceil(window.innerWidth / NftSize.MOBILE);

    const nftImages = [];

    for (let i = 0; i < nftCount; i++) {
      const nftId = Math.floor(Math.random() * PROBABILITY);
      if (nftId < NFT_MAX_SERIAL_NUMBER) {
        nftImages.push(`/images/nft-redeem/digibaby-nfts/${nftId}.jpg`);
      } else {
        nftImages.push(`/images/nft-redeem/badge.svg`);
      }
    }

    setNftImages(nftImages);
  }, []);

  return (
    <Grid
      w="100%"
      gridTemplateColumns={{
        base: `repeat(auto-fill, ${NftSize.MOBILE}px)`,
        md: `repeat(auto-fill, ${NftSize.PC}px)`,
      }}
      gridTemplateRows={{
        base: `${NftSize.MOBILE}px`,
        md: `${NftSize.PC}px`,
      }}
      gridAutoFlow="column"
      columnGap={{ base: '9px', md: '12px' }}
      {...props}
    >
      {nftImages.map((image, i) => {
        return (
          <GridItem key={i}>
            <Box
              boxSize={{
                base: `${NftSize.MOBILE}px`,
                md: `${NftSize.PC}px`,
              }}
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src={image}
                alt="DigiBaby NFT"
                width={NftSize.PC}
                height={NftSize.PC}
              />
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}

export default NftsRow;
