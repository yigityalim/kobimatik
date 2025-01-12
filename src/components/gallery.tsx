import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import type { SlideContent } from '@/lib/slides';
import { VideoPlayer } from '@/components/video-player';
import { Fragment } from 'react';
import { Slider } from '@/components/marketing/slider';

export interface GalleryProps {
  slides: SlideContent[];
  type: 'top-controls' | 'left-controls';
  title?: string;
  description?: string;
  className?: string;
}

export function Gallery({ slides, type, title, description, className }: Readonly<GalleryProps>) {
  if (type === 'top-controls') {
    return (
      <>
        <div className="hidden w-full max-w-full p-4 md:block">
          <TabGroup>
            <TabList className="m-0 mb-8 flex w-full flex-wrap items-center justify-center gap-2 sm:mb-4 lg:mx-auto lg:w-[70%] xl:m-0 xl:w-full">
              {slides.map(({ title, icon: Icon }) => (
                <Tab
                  key={title}
                  className="hover:bg-offgray-100/40 flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm border border-transparent px-3 py-2 text-sm text-black opacity-80 transition-colors select-none hover:opacity-100 focus:outline-none! focus-visible:outline-none! data-selected:snap-start data-selected:border-blue-500/70 data-selected:bg-linear-to-b data-selected:from-blue-400/10 data-selected:opacity-100 data-selected:[box-shadow:_var(--sh-alt)] dark:text-white dark:hover:bg-gray-600/20 dark:data-selected:border-blue-300/40"
                >
                  <Icon className="text-accent-blue size-[14px] shrink-0 dark:text-blue-400" />
                  {title}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {slides.map(({ title, description, imageUrl }) => (
                <TabPanel key={title} className="flex w-full flex-col items-center gap-6 sm:gap-8">
                  <p className="my-4 mt-6 max-w-lg text-center tracking-tight md:mt-8 lg:mt-10">
                    <span className="inline align-top text-balance">{description}</span>
                  </p>
                  <VideoPlayer className={className} />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
        <Slider slides={slides} />
      </>
    );
  }

  if (type === 'left-controls') {
    return (
      <>
        <TabGroup className="hidden w-full grid-cols-1 gap-8 p-4 md:grid xl:grid-cols-2 xl:gap-4">
          <TabList className="flex flex-col gap-6 xl:max-w-lg">
            {title && (
              <hgroup className="">
                <h2 className="font-lora h2 text-accent-blue mb-2.5 scroll-mt-24 text-left font-medium text-pretty dark:text-blue-300">
                  {title}
                </h2>
                {description && (
                  <p className="tracking-tight">
                    <span>
                      <span className="inline align-top text-balance">{description}</span>
                    </span>
                  </p>
                )}
              </hgroup>
            )}
            <div className="flex w-full snap-x scroll-pl-6 flex-row justify-start gap-8 overflow-x-auto xl:flex-col xl:justify-center xl:gap-2 xl:overflow-visible [&::-webkit-scrollbar]:hidden">
              {slides.map(({ title, imageUrl }) => (
                <Tab
                  key={title}
                  className="hover:bg-offgray-100/40 flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm border border-transparent px-3 py-2 text-sm text-black opacity-80 transition-colors select-none hover:opacity-100 focus:outline-none! focus-visible:outline-none! data-selected:snap-start data-selected:border-blue-500/70 data-selected:bg-linear-to-b data-selected:from-blue-400/10 data-selected:opacity-100 data-selected:[box-shadow:_var(--sh-alt)] dark:text-white dark:hover:bg-gray-600/20 dark:data-selected:border-blue-300/40"
                >
                  <p className="text-center">{title}</p>
                </Tab>
              ))}
            </div>
          </TabList>
          <TabPanels className="flex w-full">
            {slides.map(({ title }) => (
              <TabPanel as={Fragment} key={title}>
                <VideoPlayer className={className} />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
        <p className="w-full px-4 pb-4 text-center text-sm tracking-tight italic opacity-80 xl:max-w-lg xl:text-left">
          And a lot more...
        </p>
        <Slider slides={slides} />
      </>
    );
  }
}
