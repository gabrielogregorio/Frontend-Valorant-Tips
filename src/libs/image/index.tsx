import { ImageLoader } from 'next/dist/client/image-component';
import { PlaceholderValue, StaticImport } from 'next/dist/shared/lib/get-img-props';
import ImageComponent from 'next/image';

interface ImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  loader?: ImageLoader;
  quality?: number | `${number}`;
  priority?: boolean;
  loading?: 'eager' | 'lazy' | undefined;
  placeholder?: PlaceholderValue;
  blurDataURL?: string;
  draggable?: boolean;
  className?: string;
  unoptimized?: boolean;
}

export const Image = (props: ImageProps) => {
  return <ImageComponent {...props} />;
};
