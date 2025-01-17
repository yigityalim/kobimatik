import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

export type ImageProps = Omit<NextImageProps, 'src'> & {
  containerClassName?: string;
  removeStyles?: boolean;
  lightSrc: string;
  darkSrc: string;
};

export function Image({
  containerClassName,
  lightSrc,
  darkSrc,
  removeStyles,
  alt,
  className,
  ...props
}: Readonly<ImageProps>) {
  return (
    <div
      className={cn(
        removeStyles
          ? ''
          : 'default-border-color lg:min-h-[400px]" relative flex aspect-video h-auto w-full shrink-0 grow items-center justify-center overflow-clip border p-2 lg:max-h-[400px]',
        containerClassName,
      )}
    >
      <NextImage
        className={cn(
          !removeStyles
            ? 'default-border-color hidden aspect-video size-full min-h-full border object-cover object-top dark:block'
            : 'block dark:hidden',
          className,
        )}
        width={1920}
        height={1080}
        src={darkSrc}
        alt={alt}
        {...props}
      />
      <NextImage
        className={cn(
          !removeStyles
            ? 'default-border-color block aspect-video size-full min-h-full border object-cover object-top dark:hidden'
            : 'hidden dark:block',
          className,
        )}
        width={1920}
        height={1080}
        src={lightSrc}
        alt={alt}
        {...props}
      />
      {!removeStyles && (
        <div className="pattern-diagonal-lines pattern-bg-white pattern-size-2 pattern-opacity-20 pointer-events-none absolute inset-0 [z-index:-1] !opacity-10 [--pattern-color:_#93c5fd] select-none dark:[--pattern-bg-color:_transparent]! dark:[--pattern-color:_#51a2ff50]" />
      )}
    </div>
  );
}
