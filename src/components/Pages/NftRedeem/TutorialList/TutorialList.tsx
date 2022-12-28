import { Box, Grid, GridItem } from '@chakra-ui/react';
import GradientHeading from '@components/GradientHeading';

import StepItem, { StepItemProps } from './StepItem';

export type TutorialListProps = {
  title: string;
  steps: StepItemProps[];
};

export default function TutorialList(props: TutorialListProps) {
  const { title, steps } = props;

  return (
    <Box>
      <GradientHeading p="9px 13px">{title}</GradientHeading>
      <Grid
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        columnGap={{ base: '0', md: '36px' }}
      >
        {steps.map((step) => {
          return (
            <GridItem key={step.number}>
              <StepItem {...step} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
