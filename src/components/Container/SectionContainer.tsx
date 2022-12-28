import { As, Box, Center } from '@chakra-ui/react';
import { useHomeContext } from '@context/HomeContext';
import React, { forwardRef, memo, ReactNode } from 'react';
import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

type SectionContainerProps = {
  as?: As;
  id: string;
  children: ReactNode;
};

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  (props, ref) => {
    const { as = 'section', id, children } = props;
    const { activeIndicator, setActiveIndicator } = useHomeContext();

    return (
      <Element
        name={id}
        style={{
          pointerEvents: activeIndicator === id ? 'auto' : 'none',
        }}
      >
        <Box display="none">
          <ScrollLink to={id} onSetActive={setActiveIndicator} spy>
            {id}
          </ScrollLink>
        </Box>
        <Center as={as} id={id} minH="100vh" w="100%" ref={ref}>
          {children}
        </Center>
      </Element>
    );
  }
);

SectionContainer.displayName = 'SectionContainer';

export default memo(SectionContainer);
