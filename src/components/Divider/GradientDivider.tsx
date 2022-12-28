import { Box, SystemProps } from '@chakra-ui/react';

export enum GradientDividerDirection {
  LINEAR = 'linear',
  RADIAL = 'radial',
}

type GradientDividerProps = {
  direction?: GradientDividerDirection;
} & SystemProps;

function GradientDivider(props: GradientDividerProps) {
  const { direction, ...systemProps } = props;

  if (direction === GradientDividerDirection.LINEAR) {
    return (
      <Box
        h="1px"
        w="100%"
        background="linear-gradient(90deg, #FFFFFF 50%, #1A1A1A 100%)"
        border="none"
        {...systemProps}
      ></Box>
    );
  } else if (direction === GradientDividerDirection.RADIAL) {
    return (
      <Box
        h="1px"
        w="100%"
        bg="linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 47.4%, rgba(255, 255, 255, 0) 100%)"
        {...systemProps}
      ></Box>
    );
  } else {
    return null;
  }
}

GradientDivider.defaultProps = {
  direction: GradientDividerDirection.LINEAR,
};

export default GradientDivider;
