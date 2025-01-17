'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FileCode2 } from 'lucide-react';
import Image from 'next/image';
import type { SlideContent } from '@/lib/slides';

export interface SliderProps {
  slides: SlideContent[];
}

export function Slider({ slides }: Readonly<SliderProps>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slideRefs.current.findIndex((ref) => ref === entry.target);
            setActiveIndex(index);
          }
        });
      },
      {
        root: sliderRef.current,
        threshold: 0.5,
      },
    );

    slideRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 p-6 md:hidden">
      <div
        ref={sliderRef}
        className="relative flex w-full snap-x snap-mandatory space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            className="flex w-full flex-none snap-center flex-col"
          >
            <SlideCard {...slide} />
          </div>
        ))}
      </div>
      <SliderNavigation
        totalSlides={slides.length}
        activeIndex={activeIndex}
        onNavigate={scrollToSlide}
      />
    </div>
  );
}

export function SlideCard({ title, description, imageUrl }: Readonly<SlideContent>) {
  return (
    <div className="group border-offgray-100 flex w-full cursor-pointer flex-col overflow-clip rounded-sm border [box-shadow:hsl(218,_13%,_50%,_0.1)_0_-2px_0_0_inset] transition-colors hover:border-blue-300 hover:[box-shadow:_var(--sh-alt)] dark:border-gray-600/40 dark:[box-shadow:hsl(218,_13%,_70%,_0.05)_0_-2px_0_0_inset] dark:hover:border-blue-300/50">
      <div className="relative flex h-fit w-full shrink-0 grow items-center justify-center overflow-clip rounded-sm p-2 md:h-[220px]">
        <div className="flex size-full items-center justify-center">
          <div className="group relative overflow-clip rounded-sm border border-gray-300 shadow-xl xl:min-h-[740px] xl:min-w-[1240px] dark:border-gray-300/20">
            {imageUrl && (
              <Image
                width={1920}
                height={1080}
                src={imageUrl}
                alt={title}
                className="aspect-video h-full w-full object-cover object-top"
              />
            )}
            <div className="pointer-events-none absolute inset-y-0 z-2 flex w-full flex-col items-center justify-center gap-6 opacity-0 transition-opacity duration-200 ease-in-out group-hover:pointer-events-auto group-hover:opacity-100">
              <button
                type="button"
                aria-label="Video reproduction control"
                className="bg-accent-blue fv-style relative flex size-16 cursor-pointer items-center justify-center overflow-clip rounded-full bg-linear-to-t from-black to-gray-900 shadow-xl shadow-black/60 outline outline-4 outline-blue-300/20 transition-all hover:scale-105 hover:outline-[6px] hover:outline-blue-300/40"
              >
                <div className="pointer-events-none absolute inset-0 [z-index:-1] [z-index:0] bg-[size:180px] bg-repeat opacity-5! opacity-[0.035] dark:opacity-[0.015]"></div>
                <svg
                  className="size-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M15 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="pattern-diagonal-lines pattern-bg-white pattern-size-2 pattern-opacity-20 pointer-events-none absolute inset-0 [z-index:-1] [--pattern-color:_#93c5fd] select-none dark:[--pattern-bg-color:_transparent]! dark:[--pattern-color:_#51a2ff50]"></div>
      </div>
      <div className="bg-cream-50/20 dark:bg-offgray-900/10 border-offgray-100 flex h-fit shrink-0 flex-col gap-1.5 border-t p-4 dark:border-gray-400/15">
        <div className="flex flex-col">
          <p className="mb-1 flex items-center gap-2 text-sm text-black dark:text-white">
            <span className="shrink-0">
              <FileCode2 className="size-[14px] text-blue-400" />
            </span>
            {title}
          </p>
          <p className="text-left text-sm [text-wrap:pretty]">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface SliderNavigationProps {
  totalSlides: number;
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export function SliderNavigation({
  totalSlides,
  activeIndex,
  onNavigate,
}: Readonly<SliderNavigationProps>) {
  return (
    <div className="mt-4 mb-2 flex justify-center gap-3 md:hidden">
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`relative h-0.5 w-4 ${
            i === activeIndex ? 'bg-accent-blue dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-700'
          }`}
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onNavigate(i)}
        >
          <span className="absolute -inset-x-1.5 -inset-y-3"></span>
        </button>
      ))}
    </div>
  );
}
