import GradientHeading from '@components/GradientHeading';
import { ReactNode } from 'react';

type TitleProps = { children: ReactNode };

function Title(props: TitleProps) {
  const { children } = props;
  return (
    <GradientHeading p={{ base: '9px 25px', md: '13px 28px' }}>
      {children}
    </GradientHeading>
  );
}

export default Title;
