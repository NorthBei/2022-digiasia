import ExportedImage, { ExportedImageProps } from 'next-image-export-optimizer';

export type ImageProps = ExportedImageProps;

function Image(props: ImageProps) {
  const src = `${process.env.NEXT_PUBLIC_BASE_PATH}${props.src}`;
  return <ExportedImage {...props} src={src} />;
}

export default Image;
