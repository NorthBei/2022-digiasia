import { AspectRatio, SystemProps } from '@chakra-ui/react';
import Image from '@components/Image';

type BackgroundProps = SystemProps;

export default function Background(props: BackgroundProps) {
  const systemProps = props;

  return (
    <AspectRatio ratio={428 / 285} {...systemProps}>
      <Image
        src="/images/nft-bazaar/background.png"
        alt="background"
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </AspectRatio>
  );
}
