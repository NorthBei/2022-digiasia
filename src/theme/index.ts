import { extendTheme } from '@chakra-ui/react';

enum Const {
  DEFAULT_FONT = `Chakra Petch, PingFang SC, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Noto Sans TC, Microsoft JhengHei, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
}

const theme = extendTheme({
  zIndices: {
    background: -10,
    // hide: -1,
    // auto: 'auto',
    // base: 0,
    // docked: 10,
    // dropdown: 1000,
    // sticky: 1100,
    // banner: 1200,
    // overlay: 1300,
    // modal: 1400, // drawer also 1400
    header: 1450,
    // popover: 1500,
    // skipLink: 1600,
    // toast: 1700,
    // tooltip: 1800,
  },
  fonts: {
    heading: Const.DEFAULT_FONT,
    body: Const.DEFAULT_FONT,
  },
});

export default theme;
