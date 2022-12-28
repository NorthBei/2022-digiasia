import { As, Center, Icon } from '@chakra-ui/react';
import { LanguageSwitcher } from 'next-export-i18n';
import { forwardRef } from 'react';

import { Locale } from './TranslationMenu';

type LocaleItemProps = {
  icon: As;
  onClick: () => void;
  locale: Locale;
};

const LocaleItem = forwardRef<HTMLDivElement, LocaleItemProps>((props, ref) => {
  const { icon, onClick, locale } = props;

  return (
    <Center
      boxSize="25px"
      cursor="pointer"
      className="hideAfterLoaded"
      ref={ref}
      onClick={onClick}
    >
      <LanguageSwitcher lang={locale}>
        <Icon as={icon} boxSize="100%" />
      </LanguageSwitcher>
    </Center>
  );
});

LocaleItem.displayName = 'LocaleItem';

export default LocaleItem;
