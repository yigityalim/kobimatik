'use client';

import { Slider } from '@/components/marketing/slider';
import { Gallery } from '@/components/gallery';
import { homePageSlide } from '@/lib/slides';

export function HomePageClient() {
  return (
    <>
      <Gallery
        slides={homePageSlide}
        type="top-controls"
        className="md:h-[490px] md:min-w-[622px] lg:min-h-[565px] lg:min-w-[878px] xl:min-h-[770px] xl:min-w-[1200px]"
      />
      <Gallery
        slides={homePageSlide}
        type="left-controls"
        title="Built with ultimate care"
        description="Every single feature in Zed has been designed to advance the state of the art. Anything less isn’t worth building."
        className="md:h-[530px] md:min-w-[622px] lg:h-[656px] lg:min-w-[590px] xl:h-[377px] xl:min-w-[559px] 2xl:h-[377px] 2xl:min-w-[592px]"
      />
    </>
  );
}
