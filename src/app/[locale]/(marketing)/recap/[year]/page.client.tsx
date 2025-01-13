'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEventListener } from 'usehooks-ts';
import { recapOptions } from '@/app/[locale]/(marketing)/recap/config';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export function Client(/*{ year, locale }: Readonly<{ year: string; locale: string }>*/) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEventListener('keydown', (event) => {
    if (!api) {
      return;
    }

    if (event.key === 'ArrowRight') {
      api.scrollNext();
    } else if (event.key === 'ArrowLeft') {
      api.scrollPrev();
    }
  });

  return (
    <div>
      <div className="grid-border-color relative flex h-10 border-b border-[color-mix(in_oklab,var(--color-blue-200)50%,transparent)] lg:h-12 dark:border-[color-mix(in_oklab,var(--color-blue-300)8%,transparent)]">
        <div className="pattern-diagonal-lines pattern-bg-white pattern-size-2 pattern-opacity-20 pointer-events-none absolute inset-0 !z-[0] [z-index:-1] opacity-10 [--pattern-color:_#93c5fd] select-none dark:[--pattern-bg-color:_transparent]! dark:[--pattern-color:_#51a2ff50]"></div>
      </div>
      <Carousel
        className="mx-auto w-full border-x border-[color-mix(in_oklab,var(--color-blue-200)50%,transparent)] md:max-w-3xl dark:border-[color-mix(in_oklab,var(--color-blue-300)8%,transparent)]"
        setApi={setApi}
      >
        <CarouselContent>
          {recapOptions.recaps.map((recap) => (
            <CarouselItem
              key={recap.title}
              className={cn(
                'flex w-full flex-col items-center justify-between gap-8 px-6 py-10 transition duration-300 ease-in-out',
                current !== recapOptions.recaps.indexOf(recap) + 1 && 'opacity-30',
              )}
            >
              <recap.component />
              <hgroup className="mx-auto flex w-full max-w-xl flex-col items-center gap-1">
                <p className="mb-2 font-mono text-[.75rem] tracking-wider text-gray-500 uppercase">
                  {format(recap.date, 'MMMM yyyy', { locale: tr })}
                </p>
                <h2 className="font-lora h2 text-accent-blue mb-2.5 scroll-mt-24 text-center font-medium text-pretty dark:text-blue-300">
                  {recap.title}
                </h2>
                <p className="text-center tracking-tight">
                  <span>
                    <span>{recap.description}</span>
                  </span>
                </p>
              </hgroup>
              <recap.footer />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="grid-border-color relative hidden h-16 items-center justify-between border-x border-t border-[color-mix(in_oklab,var(--color-blue-200)50%,transparent)] px-4 lg:flex dark:border-[color-mix(in_oklab,var(--color-blue-300)8%,transparent)]">
          <div className="mb-4 flex w-full gap-x-2">
            <CarouselPrevious
              className="group border-offgray-200 bg-cream-50 dark:hover:bg-accent-blue/30 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border hover:!border-blue-400 hover:bg-blue-100 dark:border-[color-mix(in_oklab,var(--color-offgray-600)20%,transparent)] dark:bg-[hsl(218,_13%,_5%)] dark:hover:!border-blue-400/50"
              size="icon"
            />
            <CarouselNext
              className="group border-offgray-200 bg-cream-50 dark:hover:bg-accent-blue/30 flex size-8 shrink-0 cursor-pointer items-center justify-center rounded border hover:!border-blue-400 hover:bg-blue-100 dark:border-[color-mix(in_oklab,var(--color-offgray-600)20%,transparent)] dark:bg-[hsl(218,_13%,_5%)] dark:hover:!border-blue-400/50"
              size="icon"
            />
          </div>
          <div className="flex w-fit items-center justify-center gap-x-2">
            {Array.from({ length: recapOptions.recaps.length }).map((_, index) => (
              <span
                key={recapOptions.recaps[index].title}
                className={cn(
                  'relative z-2 size-2 rounded-full',
                  index === current - 1
                    ? 'bg-accent-blue dark:bg-blue-300'
                    : 'bg-offgray-100 dark:bg-white/10',
                )}
              >
                <span className="sr-only">{recapOptions.recaps[index].title}</span>
              </span>
            ))}
          </div>
          <div className="pattern-diagonal-lines pattern-bg-white pattern-size-2 pattern-opacity-20 pointer-events-none absolute inset-0 !z-[0] [z-index:-1] opacity-10 [--pattern-color:_#93c5fd] select-none dark:[--pattern-bg-color:_transparent]! dark:[--pattern-color:_#51a2ff50]"></div>
        </div>
        <div className="grid-border-color relative flex h-10 border-t border-[color-mix(in_oklab,var(--color-blue-200)50%,transparent)] md:hidden lg:h-12 dark:border-[color-mix(in_oklab,var(--color-blue-300)8%,transparent)]">
          <div className="pattern-diagonal-lines pattern-bg-white pattern-size-2 pattern-opacity-20 pointer-events-none absolute inset-0 !z-[0] [z-index:-1] opacity-10 [--pattern-color:_#93c5fd] select-none dark:[--pattern-bg-color:_transparent]! dark:[--pattern-color:_#51a2ff50]"></div>
          <div className="absolute inset-0 flex w-full items-center justify-center gap-2 px-2">
            <div className="inline-flex items-center justify-center gap-x-2 opacity-40">
              {Array.from({ length: recapOptions.recaps.length }).map((_, index) => (
                <button
                  type="button"
                  key={recapOptions.recaps[index].title}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    'relative z-2 size-2 rounded-full',
                    index === current - 1
                      ? 'bg-accent-blue dark:bg-blue-300'
                      : 'bg-offgray-100 dark:bg-white/10',
                  )}
                >
                  <span className="sr-only">{recapOptions.recaps[index].title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
