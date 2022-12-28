// For svgr usage
// ref: https://react-svgr.com/docs/webpack/
declare module '*.svg?url' {
  const content: any;
  export default content;
}
