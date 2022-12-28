import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useLanguageQuery } from 'next-export-i18n';
import { ReactNode } from 'react';

export enum LinkType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL',
  FUNCTION = 'FUNCTION',
}

type UnivLinkProps = {
  type?: LinkType;
  href: string;
  onClick?: () => void;
  children: ReactNode;
  style?: Record<string, string>;
};

function UnivLink(props: UnivLinkProps) {
  const [query] = useLanguageQuery();
  const { type, href, onClick, children, style } = props;

  if (type === LinkType.INTERNAL) {
    const url = query ? { pathname: href, query } : href;
    return (
      <Link
        href={url}
        onClick={onClick}
        className="cursorPointer"
        style={{ cursor: 'pointer', ...style }}
      >
        {children}
      </Link>
    );
  } else if (type === LinkType.EXTERNAL) {
    return (
      <a
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
        className="cursorPointer"
        style={style}
      >
        {children}
      </a>
    );
  } else if (type === LinkType.FUNCTION) {
    return (
      <Box onClick={onClick} cursor="pointer" __css={style}>
        {children}
      </Box>
    );
  }

  throw new Error(
    'LinkType not correct. only accept INTERNAL EXTERNAL FUNCTION'
  );
}

UnivLink.defaultProps = {
  type: LinkType.EXTERNAL,
};

export default UnivLink;
